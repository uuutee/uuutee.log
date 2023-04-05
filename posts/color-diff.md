---
title: 'diffコマンドに色をつけてみやすくしたい'
date: '2017-07-18'
tags:
  - 'shell'
---

diff コマンドを `git diff` のように色分けして diff をみれるようにしたい

## colordiff を使う

mac なので homebrew でインストールする

```
# インストール
brew install colordiff
```

diff を取る

```
# -u: unifiedオプション (git diffライクな見た目)
diff -u hoge.txt fuga.txt
```

標準出力同士を比較する場合

```
diff -u <(some-cmd-1) <(some-cmd-2)
```

## vimdiff を使う

`vimdiff` も色分けされているので見やすい

```
vimdiff -u <(some-cmd-1) <(some-cmd-2)
```

## 参考

[diff コマンド見辛かった - Qiita](http://qiita.com/trapple/items/6657b903bf027464e70d)
