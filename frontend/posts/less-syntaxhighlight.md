---
title: "less でシンタックスハイライトする"
date: "2017-03-29"
categories: 
  - "shell"
---

テキストファイルを閲覧するのに `less` は便利だが、標準だとシンタックスハイライトがされない  
このままだとソースコードを閲覧する際に不便なので `vim` のようにソースコードをハイライトして閲覧できるようにしたい。

## source-highlight をインストール

今回は、macで設定するのでhomebrewでインストールする。

```
brew install source-highlight
```

インストールしたディレクトリから、less用のスクリプトを検索

```
find /usr/local/ -name "src-hilite-lesspipe.sh"
```

`.bash_profile` に見つかったスクリプトと設定を記述

```
# source-highlight で lessをハイライトする
export LESS='-R'
export LESSOPEN='| /usr/local//Cellar/source-highlight/3.1.8_4/bin/src-hilite-lesspipe.sh %s'
```

## 参考

[漢(オトコ)のコンピュータ道: lessでソースコードに色をつける](http://nippondanji.blogspot.jp/2011/11/less.html)
