---
title: "bashで引数に連番や複数のファイル名を指定する方法"
date: "2017-11-30"
categories: 
  - "shell"
---

bashのブレース展開を使うことで面倒な連番指定や複数ファイル指定が簡単にかけるようになります。

## 連番指定

`seq` を使う場合　　

```
for i in $(seq 1 10); do
    mv ${i}.png dest/
done
```

これを `{start..end}` で簡単に連番指定ができます

```
mv {1..10}.png dest/
```

## 複数指定

通常 mkdir等で引数を複数指定する場合、下記のようにスペース区切りで羅列する形になります。

```
mkdir test/dir1 test/dir2 test/dir3
```

これをカンマ区切りの `{value1,value2}` で書くと簡潔に書くことができます

```
# 特定パス以下に複数作成
mkdir test/{dir1,dir2,dir3}
```
