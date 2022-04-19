---
title: 'macでLAN上のデバイスのIPを調べる'
date: '2018-01-24'
---

ARP(Address Resolution Protocol) 呼ばれるプロトコルにより、OS上でIPアドレスとMACアドレスの対応状況をデータベース化している(ARPテーブル)がある。  
このARPテーブルを調べることでmacでLAN上のデバイスのIPを調べることができる。

```sh
arp -a
```

```
# 出力例
? (192.168.10.104) at ac:d5:64:1f:2f:bb on en0 ifscope [ethernet]
? (192.168.10.105) at b0:f7:c4:d7:fe:aa on en0 ifscope [ethernet]
? (192.168.10.106) at e2:aa:42:55:bf:c2 on en0 ifscope [ethernet]
...
```

## arp-scan
`arp-scan` というツールでより詳細な情報を確認できる

## インストール
```sh
brew install arp-scan
```

## ネットワークインターフェイスカード(NIC)を調べる
NIC を指定しないとIPが見つからない旨のエラーが出るので  
あらかじめ、指定する NIC を調べておく必要がある

```sh
# エラーの例
ERROR: Could not obtain interface IP address and netmask
ERROR: pcap_lookupnet: en0: no IPv4 address assigned
```

`ifconfig` で調べる

```sh
ifconfig
```

```
# status active のものをメモする
en0: flags=8863<UP,BROADCAST,SMART,RUNNING,SIMPLEX,MULTICAST> mtu 1500
	options=400<CHANNEL_IO>
	ether 8c:85:90:92:ee:5b
	inet6 fe80::18b2:fbbd:b70b:9d4a%en0 prefixlen 64 secured scopeid 0x5
	inet 192.168.10.107 netmask 0xffffff00 broadcast 192.168.10.255
	inet6 2001:f72:1420:5700:8d1:cf4d:7ac:bcf2 prefixlen 64 autoconf secured
	inet6 2001:f72:1420:5700:e03b:2f77:89f8:a12e prefixlen 64 deprecated autoconf temporary
	inet6 2001:f72:1420:5700:408c:1bc2:2331:300c prefixlen 64 autoconf temporary
	nd6 options=201<PERFORMNUD,DAD>
	media: autoselect
	status: active
```

## ネットワークインターフェイスを指定して調べる

```sh
# l: local only
# I: network interface を指定
sudo arp-scan -l -I en0
```
```
Interface: en0, datalink type: EN10MB (Ethernet)
Starting arp-scan 1.9 with 256 hosts (http://www.nta-monitor.com/tools/arp-scan/)
192.168.10.1	80:22:a7:b8:f4:96	(Unknown)
192.168.10.11	10:6f:3f:cb:69:69	Buffalo Inc.

515 packets received by filter, 0 packets dropped by kernel
Ending arp-scan 1.9: 256 hosts scanned in 1.843 seconds (138.90 hosts/sec). 2 responded
```
