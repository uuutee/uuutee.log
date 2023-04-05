---
title: "shellで自分のグローバルIPを確認する"
date: "2016-09-06"
tags: 
  - "linux"
  - "shell"
---

アクセス制限設定をする際などに自分のIPを確認するが、これを手っ取り早く確認したい

## 確認サービスを使う方法

下記のようなサービスにアクセスするのが簡単。

[アクセス情報【使用中のIPアドレス確認】](https://www.cman.jp/network/support/go_access.cgi)

## curlで取得する方法

ブラウザで開くのも面倒なのでshellで確認したい。  
`curl` で下記からIPを取得できる。

```
# jsonで返ってくる
curl httpbin.org/ip
```

下記のようなエイリアスを作っておくと便利。

```
# 自身のグローバルIP
alias myip='curl -s httpbin.org/ip | jq -r .origin'
```

また、この方法なら、sshログインした先でも利用可能。

## 参考

[Linux コマンドでグローバルIPを調べる方法 - weblog of key\_amb](http://keyamb.hatenablog.com/entry/2014/01/17/195038)
