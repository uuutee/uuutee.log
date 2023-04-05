---
title: 'macのターミナルでグローバルIPからhost名を逆引きする（正引きも）'
date: '2017-10-18'
tags:
  - 'macos'
  - 'shell'
---

`host` コマンドで調べる。

正引き

```
host google.com

google.com has address 172.217.27.78
google.com has IPv6 address 2404:6800:4004:807::200e
google.com mail is handled by 40 alt3.aspmx.l.google.com.
google.com mail is handled by 50 alt4.aspmx.l.google.com.
google.com mail is handled by 10 aspmx.l.google.com.
google.com mail is handled by 30 alt2.aspmx.l.google.com.
google.com mail is handled by 20 alt1.aspmx.l.google.com.
```

逆引き

```
host 172.217.27.78

78.27.217.172.in-addr.arpa domain name pointer nrt12s15-in-f78.1e100.net.
78.27.217.172.in-addr.arpa domain name pointer nrt12s15-in-f14.1e100.net.
```
