---
title: "Linuxのユーザー一覧を確認する"
date: "2016-03-06"
tags: 
  - "linux"
  - "shell"
---

Linuxのユーザー一覧を確認するには、 `/etc/passwd` を開いて確認する。

```
cat /etc/passwd
```

パスワードは `/etc/shadow` に暗号化して記述されている

```
cat /etc/shadow
```
