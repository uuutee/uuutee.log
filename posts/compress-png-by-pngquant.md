---
title: "macのターミナルでpng画像を一括で圧縮する"
date: "2016-05-18"
tags: 
  - "macos"
  - "shell"
---

大量のpng画像を圧縮しなければならなかったのでメモ

## pngquantで圧縮する

`pngquant` というツールを使います。

`pngquant` をインストール

```
brew install pngquant
```

ディレクトリ内のpngファイルを圧縮して上書きする

```
cd dir/

# --ext: ファイル名のサフィックス。 .pngで同名ファイルになる。
pngquant --ext .png --speed 1 --force *.png
```

## pngを再帰的に検索して圧縮

ディレクトリが1階層だけなら`*`指定で一括で圧縮できたが、  
今回はサブディレクトリも存在したので、 `find` で見つかったファイルを圧縮するようにした。

```
find . -name "*.png" | xargs pngquant --ext .png --speed 1 --force
```

## 参考

- [pngquantでPNG圧縮 - unstable diary](http://nukesaq88.hatenablog.com/entry/2013/04/16/194251)
- [pngquantで一括圧縮する - Qiita](http://qiita.com/tusimarimo/items/0c0e666fecdda2ac927a)
