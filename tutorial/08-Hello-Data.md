

OK, now we are done with the very, very basics. Let's move on to the interesting stuff, bringing data into our _visualization extension_.

## Getting data into visualization extension
In one of the previous chapters we have already learned how we can define re-use the built-in capability to let the user define dimensions and measures in a Qlilk Sense Visualization Extension:

```javascript
definition: {
	type: "items",
	component: "accordion",
	items: {
		dimensions: {
			uses: "dimensions"
		},
		measures: {
			uses: "measures"
		},
		sorting: {
			uses: "sorting"
		},
		appearance: {
			uses: "settings"
		}
	}
}
```

This results

## Initial properties

