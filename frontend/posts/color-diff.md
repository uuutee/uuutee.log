---
title: "diffコマンドに色をつけてみやすくしたい"
date: "2017-07-18"
categories: 
  - "shell"
---

diffコマンドを `git diff` のように色分けして diffをみれるようにしたい

## colordiffを使う

macなのでhomebrewでインストールする

```
# インストール
brew install colordiff
```

diffを取る

```
# -u: unifiedオプション (git diffライクな見た目)
diff -u hoge.txt fuga.txt
```

標準出力同士を比較する場合

```
diff -u <(some-cmd-1) <(some-cmd-2)
```

## vimdiffを使う

`vimdiff` も色分けされているので見やすい

```
vimdiff -u <(some-cmd-1) <(some-cmd-2)
```

## 参考

[diff コマンド見辛かった - Qiita](http://qiita.com/trapple/items/6657b903bf027464e70d)
