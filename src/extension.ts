// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "javasmartformatter" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('javasmartformatter.helloWorld', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from JavaSmartFormatter!');

		// Run a terminal command
		// vscode.commands.executeCommand(
		// 	'workbench.action.terminal.sendSequence',
		// 	{"text": "mkdir test\n"}
		// );
		// java -jar /home/carter/repos/codebuff/target/codebuff-1.5.1.jar -g org.antlr.codebuff.Java -rule compilationUnit -corpus "/home/carter/Desktop/extension testing/Example.java" -files java -comment LINE_COMMENT  -o "/home/carter/Desktop/extension testing/Output.java" "/home/carter/Desktop/extension testing/Output.java"

		vscode.commands.executeCommand(
			'workbench.action.terminal.sendSequence',
			{"text": 'java -jar /home/carter/repos/codebuff/target/codebuff-1.5.1.jar -g org.antlr.codebuff.Java -rule compilationUnit -corpus "/home/carter/Desktop/extension testing/Example.java" -files java -comment LINE_COMMENT  -o "/home/carter/Desktop/extension testing/Output.java" "/home/carter/Desktop/extension testing/Output.java"\n'}
		);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
