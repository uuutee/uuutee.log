---
title: "shellでワイルドカードを指定した際にドットファイルを含めて処理したい"
date: "2016-09-06"
categories: 
  - "linux"
  - "shell"
---

## 問題

`rm *`, `mv *`, `find -name "*"` などのワイルドカード指定は `.` で始まるファイル を対象にできない。  
たとえば `.htaccess` が含まれるディレクトリで `rm -rf *` しても `.htaccess` は残ってしまう。

## 1\. shoptを使う

`shopt` でbashのオプションを変更できる。

ドットファイルも含める設定に変更

```
# 設定変更
shopt -s dotglob

# ドットファイルも含めて移動できるようになる
mv *
```

設定を解除する

```
shopt -u dotglob
```

設定を確認する

```
shopt -p
```

## 2\. .??\*で指定する

`.??*` と指定すると `.` ファイルを対象にできる

```
find . -name ".??*" -type f -maxdepth 1
.htaccess
```

## 結論

スクリプトで使うなら1の方法で 先頭で `dotblog` 設定、終了時に `dotglob` 解除するのがよさそう。  
マニュアルで作業する場合は、ドットファイル以外を処理したあとに、2の方法でドットファイルだけ処理するのがよい。

## 参考

- [ワイルドカード指定 "\*" ではドットファイルは対象にならない - THE BLUE NOWHERE](http://y-sumida.hatenablog.com/entry/20121001/1349078813)
- [ファイル名がドットから始まるファイルをまとめて cp や mv できないときの対処方法 - Qiita](http://qiita.com/suzuki86/items/5ac921a7b8d7eef23179)
