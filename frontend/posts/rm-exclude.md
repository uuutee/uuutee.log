---
title: "rmで指定ファイルを除外して削除する"
date: "2017-03-06"
categories: 
  - "shell"
---

## やりたいこと

下記のようなファイル構成でdirectory1を除外して削除したい。

```
parent/
|_directory1
|_directory2
|_directory3
```

## grepを使う

`rm` のオプションにあっても良さそうだと思ったがないので、`ls` から `grep` で除外した結果を削除する

```
# 確認する
ls | grep -v -E "^directory1"

# 実行
ls | grep -v -E "^directory1" | xargs rm -rf
```

`.`(ドットファイル)を対象に含む場合は `.` や `..` を除外して削除する

```
ls -a | grep -v -E "^\.$|^\.\.$|^directory1" | xargs rm -rf
```
