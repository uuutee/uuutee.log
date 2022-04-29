---
title: "ターミナル(bash)で履歴を検索する"
date: "2014-07-22"
categories: 
  - "macos"
  - "shell"
---

ターミナル（bash）で過去のコマンドを検索したいときは、 `reverse-i-search` を使う

履歴を検索する(reverse-i-search)

```
ctrl + r  キーワード
```

2個以上前に戻りたい場合

```
戻りたい数だけ ctrl + r
```

戻し過ぎたら (i-search)

```
ctrl + s
```

## i-search で戻れない

履歴検索は`ctrs + s` で戻れるが、スクリーンロックに割り当てられていて効かないケースがある  
その場合は、`stty` で割当を解除する

```
# 割当を確認
stty -a

# stop に割り当てられている
cchars: ...
    stop = ^S; ...
```

```
# 割当解除
stty stop undef

# 再度確認すると、 undef になっている。
stty -a

cchars: ...
    stop = <undef>; ...
```

再度 `ctrl + s` で確認すると戻れた。

## profileに記述しておく

`stty stop undef` で解除しても再ログインするともとに戻るので、同じ内容をプロファイルに追記する。  
（シェルを起動するたびに行いたいので、`.bash_profile` より `.bashrc` に追記する）

```
# ctrl+s をリセット
stty stop undef
```
