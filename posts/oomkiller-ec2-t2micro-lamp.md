---
title: 'EC2に立てたWordPress (Apache+MySQL)が落ちる'
date: '2017-07-07'
tags:
  - 'aws'
  - 'linux'
---

EC2 の `t2.micro` に立てた WordPress (Apache+MySQL)がいつのまにか落ちていた。  
CloudWatch から `StatusCheckFailed_Instace` フラグを確認するとインスタンス自体が落ちているわけではない。  
とりあえずコンソールから再起動して、ログを見てみるとメモリ不足で fork できない旨のエラーが発生していた。

```
less /var/log/message
/var/log/messages:Jul  3 19:35:00 ip-xxxx dhclient[2111]: fork: Cannot allocate memory
/var/log/messages:Jul  3 19:57:25 ip-xxxx dhclient[2111]: fork: Cannot allocate memory
```

kill されたログは見つからなかったが、おそらく OOM Killer の仕業。。  
(`OOM Killer` はメモリ不足の際に、OS 側でプロセスを強制終了する仕組み)

## 対策

OOM Killer 対策として、スワップ領域を作成する  
`/etc/rc.local` に OS 起動時のスクリプトを記述することができる。  
ここに下記のように、スワップ領域を作成するスクリプトを追記する。

```
# create swap
SWAPFILENAME=/swap.img
MEMSIZE=`cat /proc/meminfo | grep MemTotal | awk '{print $2}'`

if [ $MEMSIZE -lt 2097152 ]; then
    SIZE=$[${MEMSIZE} * 2]k
elif [ $MEMSIZE -lt 8388608 ]; then
    SIZE=${MEMSIZE}k
elif [ $MEMSIZE -lt 67108864 ]; then
    SIZE=$[${MEMSIZE} / 2]k
else
    SIZE=4194304k
fi

fallocate -l $SIZE $SWAPFILENAME && mkswap $SWAPFILENAME && swapon $SWAPFILENAME
```

追記後、再起動する。

```
reboot
```

数週間経過を見ているが今のとこ問題なさそう。  
本来はスワップをさせないよう構成を組むのがベストですが、個人で使っている環境で費用を抑えたいのでこれで OK。

## 参考

[Amazon EC2(Linux)の swap 領域ベストプラクティス ｜ Developers.IO](http://dev.classmethod.jp/cloud/ec2linux-swap-bestpractice/)
