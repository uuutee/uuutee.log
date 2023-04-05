---
title: "mac で md5sum コマンドを使いたい"
date: "2017-08-01"
tags: 
  - "macos"
  - "shell"
---

mac で `md5sum` コマンドを使いたかったのでメモ

## インストール

```
brew install md5sha1sum
```

## 使い方

```
# 標準入力から生成
echo text | md5sum

# ファイルから生成
md5sum path/to/file
```
