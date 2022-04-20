---
title: "su と su - の違い"
date: "2017-07-08"
categories: 
  - "linux"
  - "shell"
---

`su` と `su -` の違いは下記の通り。

```
# ホームディレクトリと環境変数は切り替え前のユーザの値になる
su root

# ホームディレクトリと環境変数が切り替え後(root)の値になる
su - root
```

## 環境変数を比較

それぞれ `printenv` した結果を確認。  
(amazon linux の ec2-user で検証)

`su root`

```
SUDO_USER=ec2-user
SUDO_UID=500
USERNAME=root
PATH=/sbin:/bin:/usr/sbin:/usr/bin:/opt/aws/bin
MAIL=/var/spool/mail/ec2-user
PWD=/home/ec2-user
SUDO_COMMAND=/bin/su
SUDO_GID=500
```

`su - root`

```
MAIL=/var/spool/mail/root
PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin:/opt/aws/bin:/root/bin
PWD=/root
```

## どちらを使うか

ユーザをスイッチするという意味では、環境変数が切り替えユーザと同じになる `su -` を使用するほうがよい。  
`su` を使う場合、`MAIL`, `PATH`, `PWD` がもとのユーザのまま、  
その他、`export` で設定した変数も `su` の場合は引き継がれるので気をつける。

## 参考

[suコマンドでユーザーを切り替える](http://kazmax.zpp.jp/linux_beginner/su.html#ah_4)
