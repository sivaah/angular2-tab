import {Component, Directive, NgFor} from "angular2/angular2";
import {RouterOutlet, RouterLink, Location} from "angular2/router";

@Component({
	selector: 'tabs',
	templateUrl: 'app/components/tabs/tabs.html',
	directives: [NgFor, RouterLink, RouterOutlet]
})

export class Tabs {
	tabs: Tab[];
	path: string;
	
	constructor(location: Location) {
		this.tabs = [];
		this.path = location.path();	
	}
	
	addTab(tab: Tab) {
		tab.active = this.path == "" && this.tabs.length === 0;
		this.tabs.push(tab);
	}
	
	selectTab(tab: Tab) {
		this.path = "";
		this.tabs.forEach((tab) => tab.active = false);
		tab.active = true;
	}		
}

@Directive({
	selector: 'tab',
	inputs: [
		'tabTitle: tab-title',
		'path: path',
		'active'
	]
})

export class Tab {
	active = this.active || false;
	
	constructor(tabs: Tabs) {
		tabs.addTab(this);	
	}
}