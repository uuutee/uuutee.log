---
title: 'macのターミナルでpng画像を一括で圧縮する'
date: '2016-05-18'
tags:
  - 'macos'
  - 'shell'
---

大量の png 画像を圧縮しなければならなかったのでメモ

## pngquant で圧縮する

`pngquant` というツールを使います。

`pngquant` をインストール

```
brew install pngquant
```

ディレクトリ内の png ファイルを圧縮して上書きする

```
cd dir/

# --ext: ファイル名のサフィックス。 .pngで同名ファイルになる。
pngquant --ext .png --speed 1 --force *.png
```

## png を再帰的に検索して圧縮

ディレクトリが 1 階層だけなら`*`指定で一括で圧縮できたが、  
今回はサブディレクトリも存在したので、 `find` で見つかったファイルを圧縮するようにした。

```
find . -name "*.png" | xargs pngquant --ext .png --speed 1 --force
```

## 参考

- [pngquant で PNG 圧縮 - unstable diary](http://nukesaq88.hatenablog.com/entry/2013/04/16/194251)
- [pngquant で一括圧縮する - Qiita](http://qiita.com/tusimarimo/items/0c0e666fecdda2ac927a)
