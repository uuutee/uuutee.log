---
title: 'nmapでサーバのポートや起動中のサービスを調べる'
date: '2014-06-28'
tags:
  - 'shell'
  - 'security'
---

nmap は指定したホストに対してポートスキャンを行うツール。  
外部に対してどのポートが開いているか確認したり、どんなサービスが立ち上がってるか調べることができる  
ssh できないときなど、デバッグする際に便利です。  
ポートスキャンは自分が管理しているサーバ等にのみ利用するようにしましょう

## 利用方法

mac なので homebrew でインストールする

```
brew install nmap
```

実行

```
nmap hostname
```

## 使ってみる

自身に対してスキャンしてみる

```
nmap 127.0.0.1

Nmap scan report for localhost (127.0.0.1)
Host is up (0.00055s latency).
Not shown: 960 closed ports, 36 filtered ports
PORT    STATE SERVICE
88/tcp  open  kerberos-sec
445/tcp open  microsoft-ds
548/tcp open  afp
631/tcp open  ipp
```

ファイルサーバやプリンタサーバなどのサービスを受け付けています

google をスキャンしてみる

```
nmap google.com

PORT    STATE  SERVICE
25/tcp  closed smtp
80/tcp  open   http
443/tcp open   https
```
