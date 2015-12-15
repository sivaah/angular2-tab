import {Component, Directive, OnInit} from "angular2/core";
import {NgFor} from "angular2/common"
import {RouterOutlet, RouterLink, Location, Router} from "angular2/router";

@Component({
	selector: 'tabs',
	templateUrl: 'app/components/tabs/tabs.html',
	directives: [NgFor, RouterLink, RouterOutlet]
})

export class Tabs {
	tabs: Tab[];
	path: string;
	
	constructor(location: Location, private router: Router) {
		this.tabs = [];
		this.path = location.path();	
	}
	
	addTab(tab: Tab) {
		tab.active = this.path == "" && this.tabs.length === 0;
		this.tabs.push(tab);
	}
	
	private selectTab(tab: Tab) {
		this.path = "";
		this.tabs.forEach((tab) => tab.active = false);
		tab.active = true;
	}
	
	selectTabByPath(path) {
		this.tabs.forEach((tab) => tab.active = tab.path === path);
		this.router.navigateByUrl(path);	
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

export class Tab implements OnInit {
	active = this.active || false;
	path: string;
	private _requestPath: string;
	
	constructor(tabs: Tabs, location: Location) {
		this._requestPath = location.path();
		tabs.addTab(this);	
	}
	
	ngOnInit() {
		if(this._requestPath !== "") {
			this.active = this._requestPath === this.path;				
		}

	}
}