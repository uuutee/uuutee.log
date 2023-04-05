# uuutee.net

## Format

### Prettier とは

Prettier（プリティア）は、一貫したコーディングスタイルを自動的に適用することができるコードフォーマッターです。主に JavaScript、TypeScript、CSS、HTML、Markdown、GraphQL などの言語に対応しており、コードを整形して読みやすくし、開発者間でのスタイルの統一を容易にします。

### 手順

`prettier` をインストールする

```shell
npm install -g prettier
```

設定ファイルを編集

```shell
vim .prettierrc
```

現在のディレクトリ以下のファイルをフォーマットする

```shell
prettier --write .
```

エディタの保存時にフォーマットするには拡張機能をインストールする

[Prettier - Code formatter - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
