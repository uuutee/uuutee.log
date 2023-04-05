---
title: "Linux や mac で You have new mail in ... と表示される"
date: "2016-11-21"
tags: 
  - "linux"
---

メールアカウントとして利用しているわけでもないのに、ログイン時に `You have new mail in ...` と表示されるようになった。  
crontabの結果が、メールアカウントに送られているので、表示されていた。

## メール内容を確認

```
mail

# 内容に問題なければ終了
exit
```

## メールを削除する

メールディレクトリを確認

```
echo $MAIL

/var/spool/mail/root
```

削除する

```
cat /dev/null > /var/spool/mail/root
```

## 非表示にする場合

そもそもメールが来ないようにするにはcontabの環境変数に下記のように設定する

```
vim /etc/crontab

MAILTO=""
```
