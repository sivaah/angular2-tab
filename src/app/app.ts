import {bootstrap, Component, provide} from "angular2/angular2";
import {RouteConfig, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {Tabs, Tab} from "./components/tabs/tabs"
import {Stabs, Stab} from "./components/stabs/stabs"

@Component({
	template: `
		<div> Tab 1 content goes here </div>
	`
})
class Tab1 {}

@Component({
	template: `
		<div> Tab 2 content goes here </div>
	`
})
class Tab2 {}

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.html',
	directives: [Tabs, Tab, Stabs, Stab]
})

@RouteConfig([
	{path:"/", component: Tab1, as:"Tab1"},
	{path:"/Tab1", component: Tab1, as:"Tab1"},
	{path:"/Tab2", component: Tab2, as:"Tab2"}
])

class AppComponent {}

bootstrap(AppComponent, [
	ROUTER_PROVIDERS,
	provide(LocationStrategy, {useClass: HashLocationStrategy})
]);