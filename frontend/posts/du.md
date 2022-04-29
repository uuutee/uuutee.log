---
title: "duでディレクトリの容量を調べる"
date: "2015-11-02"
categories: 
  - "shell"
---

ディレクトリの容量を調べるには `du` コマンドを使う。

指定したディレクトリとその配下を調べる（指定がなければカレント）

```
du /path/to/dir
```

指定したディレクトリのみ調べる

```
# -h: メガバイト表記で出力する
# --max-depth: 1階層に制限
du -h --max-depth=1 /path/to/dir
```

容量順でソートする

```
du | sort -nr
```

容量の大きい順にソートする

```
du /path/to/dir --max-depth=1 | sort -nr
```

100MB以上のディレクトリを表示

```
du -h /path/to/dir | grep [0-9][0-9][0-9]M
```
