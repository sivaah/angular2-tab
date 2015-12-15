System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "./components/tabs/tabs", "./components/stabs/stabs"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, router_1, tabs_1, stabs_1;
    var Tab1, Tab2, AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (stabs_1_1) {
                stabs_1 = stabs_1_1;
            }],
        execute: function() {
            Tab1 = (function () {
                function Tab1() {
                }
                Tab1 = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div> Tab 1 content goes here </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tab1);
                return Tab1;
            })();
            Tab2 = (function () {
                function Tab2() {
                }
                Tab2 = __decorate([
                    core_1.Component({
                        template: "\n\t\t<div> Tab 2 content goes here </div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Tab2);
                return Tab2;
            })();
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html',
                        directives: [tabs_1.Tabs, tabs_1.Tab, stabs_1.Stabs, stabs_1.Stab]
                    }),
                    router_1.RouteConfig([
                        { path: "/", component: Tab1, as: "Tab1" },
                        { path: "/Tab1", component: Tab1, as: "Tab1" },
                        { path: "/Tab2", component: Tab2, as: "Tab2" }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            browser_1.bootstrap(AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=app.js.map