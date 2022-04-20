---
title: ターミナルでタブとスペースを相互に変換する (expand, unexpandコマンド)
date: '2017-12-18'
categories:
    - Linux
    - macOS
    - shell
---

タブをスペースに変換する

```shell
# -t: スペースの数を指定。デフォルトは8
$ expand -t 4 target.txt
```

スペースをタブに変換する

```shell
# -t: スペースの数を指定。デフォルトは8
$ unexpand -t 4 target.txt
```

現在のディレクトリの txt ファイルのタブを一括でスペースに変換する

```shell
for f in $(find . -name "*.txt"); do
    expand -t 2 ${f} | tee ${f} > /dev/null
done
```
