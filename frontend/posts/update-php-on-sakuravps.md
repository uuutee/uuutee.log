---
title: "さくらVPSのPHPを 5.3 から 5.6 にアップデートする"
date: "2016-06-25"
categories: 
  - "さくらのvps"
  - "linux"
  - "php"
---

デフォルトで入っているphpのバージョンが古くアップデートの必要があったので手順をメモ  
さくらのVPSのOSは centos 6。

## アップデート手順

php5.6のパッケージを検索する

```
# 標準リポジトリではインストール出来ないので、リポジトリを指定して検索
yum info php --enablerepo=epel,remi,remi-php56

# remi-php56でインストールできることが確認できる
利用可能なパッケージ
名前                : php
アーキテクチャ      : x86_64
バージョン          : 5.6.23
リリース            : 1.el6.remi
容量                : 2.7 M
リポジトリー        : remi-php56
```

インストールする

```
# php5.6をインストールする
yum install php --enablerepo=remi,remi-php56
```

依存解決でこける

```
エラー: パッケージ: php-mysql-5.4.45-10.el6.remi.x86_64 (remi)
             要求: php-pdo(x86-64) = 5.4.45-10.el6.remi
エラー: パッケージ: gd-last-2.2.2-1.el6.remi.x86_64 (remi)
             要求: libwebp.so.5()(64bit)
```

## 依存解決する

`libwebp.so` を `epel` リポジトリからインストール

```
# 確認
yum info libwebp --enablerepo=epel

# インストール
yum install libwebp --enablerepo=epel
```

`php-pdo` を `remi-php56` リポジトリからインストール

```
# 確認
yum info php-pdo --enablerepo=remi-php56
# インストール
yum install php-pdo --enablerepo=remi-php56

# GPC署名のキーをインポートするか聞かれるので y
警告: rpmts_HdrFromFdno: ヘッダ V4 DSA/SHA1 Signature, key ID 00f97f56: NOKEY
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-remi
Importing GPG key 0x00F97F56:
 Userid : Remi Collet <RPMS@FamilleCollet.com>
 Package: remi-release-6.6-2.el6.remi.noarch (installed)
 From   : /etc/pki/rpm-gpg/RPM-GPG-KEY-remi
```

バージョンを確認

```
php -v
```

5.6になっていればOK

```
PHP 5.6.23 (cli) (built: Jun 22 2016 09:05:27)
Copyright (c) 1997-2016 The PHP Group
Zend Engine v2.6.0, Copyright (c) 1998-2016 Zend Technologies
```

## webからも確認する

Apacheを再起動

```
service httpd restart
```

phpinfoのファイルを作って、webアクセスできるところにおいて確認  
5.6になっていればOK

```
<?php phpinfo(); ?>
```

## 参考

- [CentOS6.4(6.5)のPHPを5.6にアップデートする方法 - Qiita](http://qiita.com/zaburo/items/fd67b294c610d54c3aee)
- [CentOS6.7 64bitのyumリポジトリにRemiを追加 | kakiro-web カキローウェブ](http://www.kakiro-web.com/linux/centos6-remi-install.html)
