---
title: 'nkfで文字コードを調べて一括で変換する'
date: '2014-04-15'
tags:
  - 'shell'
---

文字コードを調べる

```
# -g: 使われている文字コードを調べる(guess)
nkf -g hoge.txt
```

文字コードを UTF8 に改行コードを LF に変換する

```
#-w: UTF-8 BOM無しに変換
#-Lu: 改行をunix形式(LF)に変換
#--overwrite: ファイルを上書き
nkf -w -Lu --overwrite hoge.txt
```

## UTF-8 にならない

```
# UTF-8で上書き
nkf -w --overwrite file
# ASCIIのままになる。。
nkf -g file
```

g は `guess` なので、あくまで推測。 英数字だけのファイルは `ASCII` 扱いになるので、日本語を入れることで、きちんと UTF-8 で認識された。

## 一括変更

```
files=(`find . -name "*.html"`)

for file in ${files[@]}; do
    charset=`nkf -g ${file}`
    if [[ ${charset} != 'UTF-8' && ${charset} != 'ASCII' ]]; then
        echo ${charset}: ${file}
    fi
done
```
