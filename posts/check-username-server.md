---
title: 'サーバでPHPやPerlを実行しているユーザ名を調べる'
date: '2015-11-02'
tags:
  - 'perl'
  - 'php'
---

レンタルサーバでアプリケーションを実行しているユーザ名を調べたかったのでメモ。

## php の場合

- 下記ファイルを作成して、ブラウザでアクセスする。
- php が動いて http でアクセスできるディレクトリならどこでもいい
  - /contents/whoami.php
- `system()` や `exec()` で　`whoami` コマンドを実行してもいいが、 バックスラッシュ(\`\`)でも同様に実行できる

```
<?php
echo `whoami`;
?>
```

## perl の場合

- /cgi-bin/ ディレクトリの中に作成する。（サーバの設定による）
  - /cgi-bin/whoami.cgi
- パーミッションは 755 にする

```
#!/usr/bin/perl -w
$iam = `whoami`;
chop($iam);

print "Content-type: text/htmln";
print "n";
print "<html>n";
print "<head>n</head>n";
print "n";
print "<body>n";
print "t<p>This CGI is execed by "<strong>$iam</strong>" user.</p>n";
print "</body>n";
print "n";
print "</html>n";
```
