# Changes made in a visualization extension are not reflected



When developing visualization extensions and testing them in Qlik Sense Desktop it might happen that you don't immediately see the changes.
The reason for this behavior is that Qlik Sense Desktop is using the Chromium browser and because of current settings the Chromium browser is aggressively caching websites.

The best solution for this behavior:

- Open Qlik Sense Desktop (and keep it open)
- At the same time use any installed browser (e.g. Chrome) and load http://localhost:4848/hub

If you want to **completely disable browser caching** e.g. in Chrome you can configure Chrome as such:

- Open Chrome's DevTools (F12)
- Go to "Settings"
- Check "Disable cache (while DevTools is open)


![](../faq/images/changes-not-reflected_DevToolsSettings.png)  

---
**Qlik Sense Visualization Extension Tutorial**, Version 0.12.3<br/>


[Overview of all chapters](https://github.com/stefanwalther/qliksense-extension-tutorial/blob/master/tutorial/readme.md)