---
title: 'EC2 (Amazon Linux)にjenkinsをインストールする手順'
date: '2017-08-01'
tags:
  - 'aws'
  - 'linux'
---

## jenkins をインストール

```
# レポジトリを追加
wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo

# jenkinsのパッケージを検証するためのキーをインポート
rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key

# jenkinsをインストール
yum install jenkins

# 起動設定を確認
chkconfig --list jenkins

# jenkinsを確認
service jenkins start

# jenkinsを開始
service jenkins start

# 初期パスワードを確認
cat /var/lib/jenkins/secrets/initialAdminPassword
```

http://ec2-host:8080/ にアクセスすると jenkins の初期設定画面が表示される。

### java のバージョン変更

EC2 内の java バージョンが jenkins の要求バージョンとマッチしない場合、java のバージョンを 1.8 に変更する

```
# 現在のバージョンを確認
java -version

# open jdk1.8.0をインストール
yum install java-1.8.0-openjdk

# javaのバージョンを変更
update-alternatives --config java

# 変更されたかを確認
java -version
```

## 参考

- [CentOS7.0 に Jenkins をインストールする - Qiita](http://qiita.com/inakadegaebal/items/b526ffbdbe7ff2b443f1)
- [AWS の EC2 インスタンス（Amazon Linux）に Jenkins をインストールする - Qiita](http://qiita.com/thirota/items/1242767e40f233c65f7f)
- [20121019-jenkins-akiko_pusu.pdf](https://www.slideshare.net/akiko_pusu/ss-14797776?ref=http://forza.cocolog-nifty.com/blog/2012/10/jenkins-73f2.html)
- [Jenkins で GitHub のプッシュ時に自動デプロイする - sometimes I laugh](http://sil.hatenablog.com/entry/jenkins-github-auto-deploy)
- [Jenkins の自動デプロイに Ansible を使ってみた - sometimes I laugh](http://sil.hatenablog.com/entry/jenkins-ansible-deploy)
