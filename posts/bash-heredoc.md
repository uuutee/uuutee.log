---
title: 'bashで複数行のテキスト（ヒアドキュメント）を入力する'
date: '2017-01-20'
tags:
  - 'shell'
---

bash でも`cat` と `>>`(リダイレクト) を使うことで複数行のテキスト（ヒアドキュメント）を入力できる。

## 使用例

1. ヒアドキュメントを発行
2. `cat` で標準出力に出力
3. 標準出力をファイルにリダイレクト

```
cat << EOF > /path/to/file
# ここに内容を
# 複数行で書ける
EOF
```

## cat と echo

なぜ `echo` ではなく `cat` を使用するかというと、`echo` は 単に引数の文字や変数を標準出力に出力する。 つまり**標準入力を使用しない** それに対し、`cat` は 標準入力やファイルを引数にとって、標準出力に出力する

```
echo << EOF
# 内容が出力されない
EOF

cat << EOF
# 内容が出力される
EOF
```

## エスケープ

`$` はエスケープする必要がある

## 参考

[bash のヒアドキュメントを活用する - Qiita](https://qiita.com/take4s5i/items/e207cee4fb04385a9952)
