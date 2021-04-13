# Java Smart Formatter Extension for VS Code

## How to use
The extension adds a command, called "Smart Format" to VS Code. You can invoke the command using `ctrl+shift+P` and searching for smart format. You can also bing it to a keyboard shortcut as you would any other command.

When invoked, the command searches through your open files (tabs across the top) for a file called `jsfExample.java`, which it uses as a formatting example to format each file that you are currently editing (can be more than one file if you're using a split editor).

## How it works
The extension is built off of CodeBuff, which it calls under the hood.

At the moment, the extension has to open a terminal instance to execute a command to call CodeBuff.