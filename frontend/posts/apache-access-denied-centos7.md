---
title: "CentOS7でユーザディレクトリへのApacheのアクセスが拒否される"
date: "2017-09-25"
tags: 
  - "centos"
  - "linux"
---

ユーザディレクトリにファイルを作成して、apacheからアクセスすると  
パーミッションが正しいにもかかわらず、search パーミッションが無い旨のエラーが出る

```
access to /index.html denied (filesystem path '/home/username/public_html/domain/index.html') because search permissions are missing on a component of the path
```

SELinux の設定を確認

```
getenforce
Enforcing
```

オフにする

```
setenforce Permissive
```

問題なくアクセスできるようになった。 今回はSElinuxは利用しないが、本来は、きちんとSELinuxを利用した上でのアクセス制御をするのが望ましい

## 参考

[CentOS6.7 64bit SELinuxによるアクセス制御 | kakiro-web カキローウェブ](http://www.kakiro-web.com/linux/centos6-selinux.html)
