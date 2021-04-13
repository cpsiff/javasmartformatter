# Java Smart Formatter Extension for VS Code

## How to use
The extension adds a command, called "Smart format open file" to VS Code. You can invoke the command using `ctrl+shift+P` and searching for smart format. You can also bing it to a keyboard shortcut as you would any other command.

When invoked, the command searches through your open project (inlcuding subfolders) for `jsfExample.java`, which it uses as a formatting example to format each file that you are currently editing (can be more than one file if you're using a split editor).

## How it works
The extension is built off of CodeBuff, which it calls under the hood.

At the moment, the extension has to open a terminal instance to execute a command to call CodeBuff.

## TODO
- Package it up so you can run extension without dev kit
- Make jar file path configurable
- Try to improve the way it just opens a new terminal each time
    - If you try to kill the terminal after you run the command there's no way for it to wait for the command to finish executing - using a .then just waits for the command to finish being sent to the terminal, which is useless
- Add command to smart format every java file in project