---
title: "Ansibleを使ってみる"
date: "2017-02-09"
tags: 
  - "ansible"
---

## インストール

macをクライアントとして実行する

```
brew install ansible
```

## ansibleを実行

基本

```
# -i: デフォルトのhostsを使用しない場合、インベントリの指定が必要
# -a: コマンドを実行
ansible -i hosts hostname -a "uname -r"
```

## playbook実行方法

playbookを実行

```
ansible-playbook -i hosts playbook.yml
```

実行されるタスクを確認

```
ansible-playbook -i hosts --list-tasks playbook.yml
```

dry-run する

```
ansible-playbook -i hosts --check playbook.yml
```

デバッグする

```
ansible-playbook -i hosts -vvv playbook.yml
```

## インベントリの書き方

インベントリは対象ホストが記述されたファイルのこと  
iniファイルの形式で記述する。

```
[web-servers]
host1
host2
```

## playbookの書き方

### yaml の書き方

yamlで記述する

```
# イコールで値を書く
parent: key1=value1 key2=value2 key3=value3

# 配列
- value
- value

# 配列をネスト
- tasks: 
  - value
  - value

# オブジェクト
key: value

# オブジェクトをネスト
key: 
  key: value
  key: value

# 改行1
key: | 
改行
改行

# 改行2
key: > 
改行
改行
```

### 例

タスクを実行する

```
---
- hosts: all
  become: yes
  tasks: 
    - name: debug
      debug: 
        msg: hello
```

roleを実行するplaybook

```
---
- hosts: all
  become: yes
  roles: 
    - httpd
    - mysql
```

## モジュール

処理を実行する。name でtaskに名前をつけることができる

デバッグ

```
- name: debug
  debug: 
    msg: hello
```

### インクルードする

```
- include: playbook.yml
```

### ファイルを作成する

```
- name: ファイルを作成する
  file: 
    path: /etc/httpd/vhosts.d/conf.d 
    state: file 
    owner: root 
    group: root 
    mode: 0755

- name: ディレクトリを作成する
  file: 
    path: /etc/httpd/vhosts.d/ 
    state: directory 
    owner: root 
    group: root 
    mode: 0755

- name: ファイルを削除する
  file: 
    path: /etc/httpd/vhosts.d/ 
    state: absent
```

### yum

```
- name: httpd2.4をインストール
  yum: 
    name: httpd24
    state: installed

- name: httpd2.4を削除
  yum: 
    name: httpd24
    state: absent
```

すべてのパッケージをアップデート

```
- name: yum update
  yum: 
    state: latest
    name: "*"
```

### service

service コマンドと同等の作業を行う

```
- name: httpdを起動する
  service: 
    name: httpd
    state: started

- name: httpdをリロード
  service: 
    name: httpd
    state: reloaded
```

OS起動時にserviceを起動する (chkconfig)

```
- name: httpdをリロード
  service: 
    name: httpd
    enabled: yes
```

## 変数

```
  # vars に変数を指定できる
  vars: 

  # 別ファイルに切り出すことも可能
  vars_files:
    - vars.yml
```

## 定義済み変数

実行中のhostを取得

```
{{ ansible_hostname }}
or
{{ ansible_nodename }}
```

## rolesのディレクトリ構造

ディレクトリを下記の構造で作成する

```
/roles/
/roles/role_name/
/roles/role_name/tasks/
/roles/role_name/tasks/main.yml
```

## rolesの変数ディレクトリ

```
/roles/role_name/defaults/ : 変数の初期値を書く
/roles/role_name/vars/ : 変数の設定値を書く
```
