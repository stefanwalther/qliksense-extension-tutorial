# Chapter 04 - Debugging an Web Developer Tools





Before we continue improving our Hello World example I think it's now the right moment to talk a little bit about debugging.

In old days JavaScript developers often used [`alert()`](http://www.w3schools.com/jsref/met_win_alert.asp) to bring some debug messages to the front. Certainly you can still use this approach, but it becomes very soon more than annoying ... 
So there is a much better way: Using `console.log()` to send data to the **browser console**.

## Web Developer Tools

All modern browser offer some kind of a _Developer Tool_, Chrome is probably one step ahead their competitors, so I'll introduce some basic concepts here based on Chrome.

First of all you'll find a very good introduction to Chrome's [_Web DevTools_](https://developer.chrome.com/devtools) here.

### Developing using Qlik Sense Desktop & Chrome?
It is not in contradiction to using Qlik Sense Desktop to develop your visualization extensions and using the browser's developer tools at the same time.

#### Using your favorite browser
Even when developing using Qlik Sense Desktop you can use your favorite browser for debugging purposes at the same time:

1. Open Qlik Sense Desktop (and leave it opened)
2. Open your favorite browser and open `http://localhost:4848`

You'll see Qlik Sense' Hub and can open your browser's developer tools (most of the time by pressing `F12`).

![](images/04/04_Chromes_Web_DevTools.png)

#### Using developer tools within Qlik Sense Desktop
Since Qlik Sense Desktop is using Chromium as an embedded browser, you can also open Chrome's Web DevTools within Qlik Sense Desktop:

By using `Ctrl`+`Shift` and right mouse click you'll get the following dialog to activate _DevTools_:

![](images/04/04_DevTools_in_QlikSenseDesktop.png)

## Chrome Web DevTools
There are a bunch of websites out there introducing the capabilities of developer tools, I just want to highlight three areas which are highly relevant when developing visualization extensions in Qlik Sense:

* Using the console
* Inspect elements
* Debugging

### Using the console

As mentioned before, instead of triggering alerts, it's much more efficient and convenient to use the console of _Web DevTools_:

Just use `console.info` or `console.log` to push something to the console:

```javascript
paint: function ( $element, layout ) {

	var err = {
		message: 'Something went wrong',
		errCode: 'bla'
	};

	console.info( 'We are re-painting the extension' );
	console.error( 'Oops, we haven an error', err );
	console.log( 'We are here' );
	console.log( 'layout', layout );

}
```
results into

![](images/04/04_Console_Sample.png)

The console is very powerful, I highly recommend that you spend some time with more "advanced" concepts of the console like:

```javascript
console.assert()
console.group()
console.groupCollapsed()
console.groupEnd()
console.table()
```

Further readings:

* https://developer.chrome.com/devtools/docs/console
* http://anti-code.com/devtools-cheatsheet/

#### But ...
Unfortunately not all browsers support ```console.xxx()``` so we'll definitely have to ensure that in a production environment there are no ```console.xxx()``` left in the code.

There are several strategies for achieving that:

1. Remove all ```console.xxx()``` manually  
Not really a nice solution, but certainly fine for the beginning
2. Wrap all your calls to `console` that they are only executed if the current browser supports `console` ([here's a Gist](https://gist.github.com/stefanwalther/1b5ba150815e3f9a1bcb) you can use)
3. Use tools like [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/) to create a deployment process where all console statements will be removed automatically.

I personally prefer option 3 because it keeps the deployed code clean (I'll talk about the approach I have chosen and developed over time in one of the later chapters).


### Inspect Elements
Probably even more important than the console output is the possibility to review how you have manipulated the DOM, so HTML and CSS.

If it is unclear for you what "DOM manipulation" is, here are some good articles:

* [Short description on stackoverflow](http://stackoverflow.com/questions/3934826/what-do-people-mean-when-they-say-dom-manipulation)
* [Good short tutorial](https://dom-tutorials.appspot.com/static/2.html)

Having an inspector is a common capability of all Web Developer Tools. In Chrome WebDev Tools just click on the lens:

Have a look at the following [short video](https://www.youtube.com/watch?v=GHaneFM0QXU):

[![](images/04/04_ChromeWebDevTools_Inspect_Change_Elements.png)](https://www.youtube.com/watch?v=GHaneFM0QXU)

More detailed information: https://developer.chrome.com/devtools/docs/dom-and-styles

### Debugging
Finally you can use Developer Tools for live debugging:

Read more on:

* [Debugging with Chrome DevTools site](https://developer.chrome.com/devtools/docs/javascript-debugging)
* [Debugging with Firebug](http://www.developerfusion.com/article/139949/debugging-javascript-with-firebug/)
* [Debugging with Internet Explorer Developer Tools](https://msdn.microsoft.com/en-us/library/ie/gg589507%28v=vs.85%29.aspx)

<br/>
>**Hint**  
>Very similar to the advice above regarding `console.x()`, do not forget to remove `debugger;` statements if you move your visualization extension to production environment.
  
<br/>

---
Qlik Sense Extension Tutorial, Version 0.3.0

[Table of Contents](00-TOC.md)