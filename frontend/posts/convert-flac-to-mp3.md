---
title: "macのターミナルで flac を一括で mp3 に変換する"
date: "2017-09-11"
tags: 
  - "macos"
  - "shell"
---

`flac` ファイルは `ffmpeg` で変換可能

```
for a in ./*.flac; do
  ffmpeg -i "$a" -qscale:a 0 "${a[@]/%flac/mp3}"
done
```

## 参考

[Flac を Mp3 に変換 - ArchWiki](https://wiki.archlinuxjp.org/index.php/Flac_%E3%82%92_Mp3_%E3%81%AB%E5%A4%89%E6%8F%9B)
