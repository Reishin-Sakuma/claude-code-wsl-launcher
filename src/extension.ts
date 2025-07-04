import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    try {
        // 拡張機能がアクティブ化されたことを確認
        console.log('Claude Code WSL Launcher extension is now active!');
        vscode.window.showInformationMessage('Claude Code WSL Launcher activated!');
        
        // Claude Code WSL起動コマンドを登録
        console.log('Registering command: claudeCodeWSL.launch');
        let disposable = vscode.commands.registerCommand('claudeCodeWSL.launch', async () => {
            try {
                console.log('claudeCodeWSL.launch command executed!');
                
                // まずは簡単なテストメッセージ
                vscode.window.showInformationMessage('拡張機能が動作しています！');
                
                // WSLターミナルを開いてClaude Codeを起動
                await launchClaudeCodeInWSL();
                
                // 成功メッセージを表示
                vscode.window.showInformationMessage('Claude Code started in WSL terminal! 🚀');
            } catch (error) {
                // エラーが発生した場合の処理
                console.error('Error in command execution:', error);
                vscode.window.showErrorMessage(`Failed to launch Claude Code: ${error}`);
            }
        });

        context.subscriptions.push(disposable);
        console.log('Command registered successfully');
        
    } catch (error) {
        console.error('Error in activate function:', error);
        vscode.window.showErrorMessage(`Extension activation failed: ${error}`);
    }
}

async function launchClaudeCodeInWSL() {
    try {
        console.log('launchClaudeCodeInWSL function called');
        
        // VSCodeの統合ターミナルを取得または作成
        let terminal = vscode.window.terminals.find(t => t.name === 'Claude Code WSL');
        
        if (!terminal) {
            console.log('Creating new WSL terminal');
            // WSLターミナルを作成
            terminal = vscode.window.createTerminal({
                name: 'Claude Code WSL',
                shellPath: 'wsl.exe',
            });
        } else {
            console.log('Using existing WSL terminal');
        }

        // ターミナルを表示
        terminal.show();
        console.log('Terminal shown');

        // 少し待ってからClaude Codeコマンドを実行
        setTimeout(() => {
            if (terminal) {
                console.log('Sending claude-code command to terminal');
                // Claude Codeを起動
                terminal.sendText('claude');
            }
        }, 1000); // 1秒待機
        
    } catch (error) {
        console.error('Error in launchClaudeCodeInWSL:', error);
        throw error;
    }
}

// 拡張機能が無効化される時の処理
export function deactivate() {
    console.log('Claude Code WSL Launcher extension is deactivated');
}