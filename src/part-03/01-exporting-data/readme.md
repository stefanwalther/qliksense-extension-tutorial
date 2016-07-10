---
title: "Enable/Disable support to export underlying data"
draft: true
---

Qlik Sense 3.0 introduces the possibility to enable/disable the functionality to export the underlying data of a visualization extension.


```js

	definition: {
		...
	},
	support: {
		exportData: true
	},
	initialProperties: {
		...
	},
	...
			

```

## Conditional enablement of `exportData`

`exportData` can also return a function instead of a boolean value:

```js

	support: {
		return ...
	}

```
