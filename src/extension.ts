// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Extension "javasmartformatter" is now active');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('javasmartformatter.formatOpen', () => {
		// The code you place here will be executed every time your command is executed

		// Get jarPath from user configuration file
		let jarPath = vscode.workspace.getConfiguration('javasmartformatter').get('codebuff.jarLocation');

		// let jarPath = "/home/carter/repos/codebuff/target/codebuff-1.5.1.jar";
		// let corpusPath = "/home/carter/Desktop/extension testing/Example.java";
		// let outputPath = "/home/carter/Desktop/extension testing/Output.java";

		let visibleTextEditors = vscode.window.visibleTextEditors;

		vscode.workspace.findFiles('**/jsfExample.java').then((files) =>
		{
			if(files.length === 1){
				let examplePath = files[0].path;
				visibleTextEditors.forEach((editor) =>
				{
					if(!editor.document.fileName.endsWith("jsfExample.java")){
						let outputPath = editor.document.fileName;

						let terminalCommand = 'java -jar "' +
						jarPath +
						'" -g org.antlr.codebuff.Java -rule compilationUnit -corpus "' +
						examplePath +
						'" -files java -comment LINE_COMMENT -o "' +
						outputPath +
						'" "' +
						outputPath +
						'"\n';
			
						vscode.commands.executeCommand('workbench.action.terminal.new').then(() =>
						vscode.commands.executeCommand(
							'workbench.action.terminal.sendSequence',
							{"text": terminalCommand}
						).then(() =>{
							vscode.commands.executeCommand('workbench.action.terminal.focusPrevious');
						}));
			
						// Display a message box to the user
						vscode.window.showInformationMessage("reformatted " + outputPath);
					}
				});
			}
			else if (files.length === 0){
				vscode.window.showInformationMessage("no file called jsfExample.java found");
			}
			else {
				vscode.window.showInformationMessage("more than one jsfExample.java file found in project");
			}
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
	console.log('Extension "javasmartformatter" is now unactive');
}
