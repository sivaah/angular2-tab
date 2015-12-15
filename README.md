# angular2-tab
Angular 2 Tab directive using Router and bootstrap CSS

Based on Angular2 Quickstart
https://angular.io/docs/ts/latest/quickstart.html

##Prerequisites
The generated project has dependencies that require Node 4 or greater.

##Dependent npm modules
1. angular2 2.0.0-alpha.53
2. systemjs 0.19.6
3. bootstrap

##Installation
Download the files and from the root run

```
npm install

npm run lite
```
## Usage
1. Copy the component to your project components directory.
2. Import the directives to your component.
3. Use the directives in your component view to create tabs.

### Tab using Router
```
<tabs>
	<tab tab-title="Tab 1" path="/Tab1"></tab>
	<tab tab-title="Tab 2" path="/Tab2"></tab>
</tabs>
```

### Static Tab
```
<stabs>
	<stab tab-title="Tab 1">
		Static Tab 1 content goes here
	</stab>
	<stab tab-title="Tab 2">
		Static Tab 2 content goes here
	</stab>
</stabs>
```


##Features
1. Creates tab for each component configured.
2. Automatically changes the route when clicking on the tab.
3. Sets the selected tab based on the route url.
