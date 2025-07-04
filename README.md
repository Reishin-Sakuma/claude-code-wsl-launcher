# Claude Code WSL Launcher

VSCodeでワンクリックでWSLターミナルを開いてClaude Codeを起動する拡張機能です。

## 機能

- 🚀 ワンクリックでWSLターミナルを開く
- 🤖 自動的にClaudeコマンドを実行
- ⚙️ 設定でコマンドをカスタマイズ可能
- 📋 コマンドパレット、右クリックメニュー、エディターボタンに対応

## 使用方法

### 方法1: コマンドパレット
1. `Ctrl+Shift+P` でコマンドパレットを開く
2. 「🤖 Launch Claude Code (WSL)」を選択

### 方法2: 右クリックメニュー
- エディタ内で右クリック → 「🤖 Launch Claude Code (WSL)」
- ファイルエクスプローラーで右クリック → 「🤖 Launch Claude Code (WSL)」

### 方法3: エディターボタン
- エディター右上のボタンをクリック → 「🤖 Launch Claude Code (WSL)」

## 設定

設定でコマンドをカスタマイズできます：

- `claudeCodeWSL.command`: 実行するコマンド（デフォルト: `claude`）
- `claudeCodeWSL.wslDistribution`: 使用するWSLディストリビューション（空白の場合はデフォルト）

### 設定例

```json
{
    "claudeCodeWSL.command": "claude-code",
    "claudeCodeWSL.wslDistribution": "Ubuntu-20.04"
}
```

## 必要な環境

- Windows 10/11
- WSL (Windows Subsystem for Linux)
- Claude CodeがWSLにインストール済み

## インストール方法

1. `.vsix`ファイルをダウンロード
2. VSCodeで `Ctrl+Shift+P` → 「Extensions: Install from VSIX...」
3. ダウンロードした`.vsix`ファイルを選択

## ライセンス

MIT

## 更新履歴

### 0.0.1
- 初回リリース
- WSLターミナルでClaude Code起動機能
- 設定によるカスタマイズ機能