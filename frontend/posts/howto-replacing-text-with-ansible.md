---
title: "Ansibleでテキスト置換を行ういくつかの方法"
date: "2017-10-23"
categories: 
  - "ansible"
---

## copy

- `dest` と `content` を指定することでプレーンテキストを書き込むことができる
- contentの内容に変更がない場合はchangedにならない。

```yaml
- name: create a file
  copy:
    dest: /tmp/hello
    content: hello world
```

## replace

> This module will replace all instances of a pattern within a file. It is up to the user to maintain idempotence by ensuring that the same pattern would never match any replacements made.

パターンにマッチしたすべてのテキストを置換する。 regexpのパターンにマッチするテキストが存在するかによって冪等性が担保されている。

```yaml
- replace:
  path: "/etc/httpd/vhosts.d/{{ item.website.user.name }}/{{ item.migration_src.domain }}.conf"
  regexp: '\<virtualhost \*\:80\="">'
  replace: '<virtualhost *:8080="">'
  backup: yes # backupする
```

regexp内のエスケープする文字

`(, ), [, ], ', /, .`

regexp自体のエスケープ
* なし, '', ""
* 基本なしでOK。クォートが含まれる場合はクォートをエスケープする

```yaml
- replace:
  path: "/path/to/dest"
  regexp: dirname\(dirname\(\$_SERVER\[\'DOCUMENT_ROOT\'\]\)\)\.\'\/private\/config\.php\'
  replace: "$_SERVER['DOCUMENT_ROOT'] . '/module/config/database.php'"

- replace:
  path: "/path/to/dest"
  regexp: \(\'DB_USER\', SERVER_USER\)
  replace: ('DB_USER', PGSQL_USER)

- replace:
  path: "/path/to/dest"
  regexp: \(\'DB_PASSWORD\', SERVER_PASS\)
  replace: ('DB_PASSWORD', PGSQL_PASS)

- replace:
  path: "/path/to/dest"
  regexp: \(\'DB_SERVER\', SERVER_HOST\)
  replace: ('DB_SERVER', PGSQL_HOST)

# パターンマッチする
- replace:
  path: "/path/to/dest"
  regexp: \(\'DB_NAME\', .+?\)
  replace: ('DB_NAME', PGSQL_DBNAME)
```

正規表現内で変数展開する

## lineinfile

> This module will search a file for a line, and ensure that it is present or absent. This is primarily useful when you want to change a single line in a file only. See the replace module if you want to change multiple, similar lines or check blockinfile if you want to insert/update/remove a block of lines in a file. For other cases, see the copy or template modules. ドキュメントより

- 単一行を置換する。複数行は置換できない
- 複数箇所にマッチした場合最後にマッチしたもののみ書き換える。
- regexp でマッチしたものを lineに書き換える

```yaml
- name: timezone を日本語に変更
  lineinfile:
  dest: /etc/php.ini
  regexp: '^;?date.timezone ='
  line: 'date.timezone = Asia/Tokyo'
  state: present # 行が存在する

  # 所有者やパーミッションも指定可
  owner: root
  group: root
  mode: 0644
```

## blockinfile

- 複数行の置換が可能
- マーカーによって変更が管理される

```
# BEGIN ANSIBLE MANAGED BLOCK
# END ANSIBLE MANAGED BLOCK
```

```yaml
- name: .soファイルを読み込み
  blockinfile:
  dest: /etc/httpd/conf.d/process_security.conf
  content: |
    LoadModule process_security_module   modules/mod_process_security.so
  create: yes

  # 所有者やパーミッションも指定可
  owner: root
  group: root
  mode: 0644
```

## shell

replace, lineinfileで対応できない場合に使用する

```yaml
# replaceだとsql置換時に UnicodeDecodeError: 'utf8' codec can't decode byte エラーが起きるのでsedで置換する
- name: replace mysql value
  shell: sed -i -e 's:/home/.*/public_html/:/home/{{ website.profile.user.name }}/public_html/:g' /tmp/{{ website.migration_src.mysql.dbname }}.sql
```

## 参考

[Ansible ファイルを書き換える方法 - Qiita](https://qiita.com/park-jh/items/8676ec76b8313357194f) [Ansibleでファイルを書き換える時の5パターン | TANKSUZUKI.COM](http://tanksuzuki.com/post/ansible-config-control/)
