---
title: "EC2 (Amazon Linux)にjenkinsをインストールする手順"
date: "2017-08-01"
categories: 
  - "aws"
  - "linux"
---

## jenkinsをインストール

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

http://ec2-host:8080/ にアクセスするとjenkinsの初期設定画面が表示される。

### javaのバージョン変更

EC2内のjavaバージョンがjenkinsの要求バージョンとマッチしない場合、javaのバージョンを 1.8に変更する

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

- [CentOS7.0にJenkinsをインストールする - Qiita](http://qiita.com/inakadegaebal/items/b526ffbdbe7ff2b443f1)
- [AWSのEC2インスタンス（Amazon Linux）にJenkinsをインストールする - Qiita](http://qiita.com/thirota/items/1242767e40f233c65f7f)
- [20121019-jenkins-akiko\_pusu.pdf](https://www.slideshare.net/akiko_pusu/ss-14797776?ref=http://forza.cocolog-nifty.com/blog/2012/10/jenkins-73f2.html)
- [JenkinsでGitHubのプッシュ時に自動デプロイする - sometimes I laugh](http://sil.hatenablog.com/entry/jenkins-github-auto-deploy)
- [Jenkinsの自動デプロイにAnsibleを使ってみた - sometimes I laugh](http://sil.hatenablog.com/entry/jenkins-ansible-deploy)
