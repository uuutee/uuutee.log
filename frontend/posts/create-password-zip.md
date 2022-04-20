---
title: "macのターミナルでパスワード付きzipを作成する"
date: "2016-09-07"
categories: 
  - "macos"
  - "shell"
---

macだとfinderの右クリックで簡単にzip圧縮ができるが、  
パスワード付きにする場合は別のアプリケーションが必要。  
調べたら `zip` コマンドで簡単にできたのでメモしておく

## zipコマンド

```
# -e 暗号化する
# -r ディレクトリをアーカイブ
zip -er dest.zip ./fromdir/
```

## ファイルをアーカイブする

```
# tarと同じでフルパスで指定するとzipにパスが含まれてしまうので一度cdする
cd ~/.ssh/

# -e 暗号化する
# -r ディレクトリをアーカイブ
zip -e secretkey.zip secretkey.pem
パスワードを2回入力
```
