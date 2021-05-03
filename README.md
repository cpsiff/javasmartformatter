# Java Smart Formatter Extension for VS Code

## How to use
The extension adds a command, called "Smart format open file" to VS Code. You can invoke the command using `ctrl+shift+P` and searching for smart format. You can also bind it to a keyboard shortcut as you would any other command.

When invoked, the command searches through your open project (inlcuding subfolders) for `jsfExample.java`, which it uses as a formatting example to format each file that you are currently editing (can be more than one file if you're using a split editor).

## How it works
The extension is built off of CodeBuff, which it calls under the hood.

At the moment, the extension has to open a terminal instance to execute a command to call CodeBuff.

## Starter example files
Here are some example files which seem to produce decent accuracy for their size. Larger examples almost always leader to better results, assuming they are suffeciently diverse files (e.g. not just a bunch of abstract classes).

This one is recommended for just messing around with the extension:
```
public class jsfExample{
    public static void main(String [] args){
        for(int i = 0; i<100; i++){
            System.out.println("i: " + i);
        }
        System.out.println( "done!" );
    }
}
```

A longer option:
```
import java.util.*;

public class ExampleStyleGoogle {

    public static void main(String[] args) {
        arithmeticDemo();
    }

    public static printElseThree(int numTimes) {
        if (numTimes < 3 && numTimes > -100) {
            System.out.println("it's less");
        } else if (numTimes == 3) {
            System.out.println("it's three");
        } else {
            System.out.println("it's more, probably");
        }
    }

    public String stringWhile() {
        String var = "";
        while (var.length < 100) {
            switch (var.length) {
                case 10:
                    var += "ten";
                    break;
                default:
                    var += "asdfj";
            }
        }
    }

    public void arithmeticDemo() {
        int j = 0;
        while (j == 0) {
            j += 4;
            j -= 5;
            j *= 20;
            for (int i = 0; i <= 5; i++) {
                j /= 2;
            }
            if (j <= j % 1 || j < j % 2) {
                j = j - 1;
                j = j + 1;
                j = j * 4;
                j = j / 2;
            } else if (j != 0 && j >= j * 1) {
                j = j--;
            } else {
                System.out.println(j);
            }
        }
    }
}

```

## TODO
- Package it up so you can run extension without dev kit
- Try to improve the way it just opens a new terminal each time
    - If you try to kill the terminal after you run the command there's no way for it to wait for the command to finish executing - using a .then just waits for the command to finish being sent to the terminal, which is useless
- Add command to smart format every java file in project