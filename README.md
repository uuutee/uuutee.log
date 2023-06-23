# uuutee.log

## Development

```shell
npm run dev
```

## Deployment

- `git push -u origin HEAD`
- Pull request 作成
- マージすると自動的にデプロイされる

## Format

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
