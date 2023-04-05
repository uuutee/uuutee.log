---
title: "tarコマンドでパスを含めずにアーカイブする"
date: "2017-05-26"
tags: 
  - "shell"
---

## 問題

下記のようなファイル構造で target ディレクトリだけをアーカイブしたい。

```
- path
    - to
        - target
            - file1
            - file2
```

## オプション無しで使った場合

`zip` コマンドなどもそうだが cd してからでないと、アーカイブ自体にカレントディレクトリからのパスが含まれてしまう  
なので、下記のようにtargetにcdしてからアーカイブする

```
cd /path/to/
tar -czf target.tar.gz target
```

## \-C オプション

毎度cdするのも面倒だし、シェルスクリプトでの自動化もやりづらい。  
調べると、 `-C` オプションで、cdしてからtarで圧縮と同じことができた

```
tar -C /path/to/ -czf /path/to/target.tar.gz target
```

## 展開先を指定する

同様に展開する際も `-C` オプションで展開先を指定できる

```
tar -xzf /path/from/archive.tar.gz -C /path/to/dest/
```
