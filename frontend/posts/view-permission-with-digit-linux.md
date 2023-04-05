---
title: "Linuxでパーミッションを数値で表示する"
date: "2016-05-18"
tags: 
  - "linux"
  - "shell"
---

`ls -al` で確認できるLinuxのパーミッションは、`drwx--x--x` のように ユーザ, グループ, その他の順で、権限が並んでいる。

```
-rw------- 1 ec2-user ec2-user 26244  3月  9 16:19 .bash_history
-rw-r--r-- 1 ec2-user ec2-user    18  2月 20  2016 .bash_logout
```

これを `644` など数字でパーミッションを取得したい場合は下記のコードで取得できる

```
# %a: パーミッション
# %U: ユーザ名
# %G: グループ
stat --format='%a %U:%G' /path/to/file
```

結果

```
644 ユーザ名:ユーザ名
```
