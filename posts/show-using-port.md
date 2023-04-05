---
title: 'macやlinuxで使用中のポートとそのプロセスを調べる'
date: '2017-09-23'
tags:
  - 'linux'
  - 'macos'
  - 'shell'
---

`lsof` や `netstat` を使う。

## lsof

```
# -P: ポート番号をポート名に変換しない
sudo lsof -P | grep "LISTEN"

# -i: ポート番号を指定する
sudo lsof -P -i:80 | grep "LISTEN"
```

## netstat

amazon linux の netstat の場合

```
# -n, --numeric : 出力を数値のみに。DNS逆引きを行わない
# -p, --program: プロセスIDとプログラムを表示
# -l, --listening: listen状態のみ表示
# -t, --tcp: TCPのみ
# -u, --udp: UDPのみ
sudo netstat -npltu
```

## 使い分け

mac の場合は `netstat` の挙動が linux と違うため `lsof` を使う。 linux だと `lsof` が入ってないディストリビューションもあるので、その場合は `netstat` を使う

## 参考

- [mac で LISTEN として使用しているポートを調べる方法 - Qiita](http://qiita.com/yokozawa/items/dbcb3b31f9308e4dcefc)
