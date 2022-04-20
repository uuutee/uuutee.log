---
title: "ターミナル(bash)でファイル名を一括置換するスクリプト"
date: "2013-11-14"
categories: 
  - "shell"
---

- 正規表現内の\[\]はバックスラッシュでエスケープする
- 空白を含んだ変数は""でくくってやる
- ""でくくった正規表現は空白もエスケープしなくて良い

e.g. \[label\] hoge.mp3 を hoge.mp3 に置換する

```
for F in \[label\]\ *.mp3; do mv "$F" "${F/\[label\] /}"; done
```

e.g. JPGをjpgに置換する

```
for F in *.JPG; do mv "$F" "${F/JPG/jpg}"; done
```
