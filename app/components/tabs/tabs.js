System.register(["angular2/core", "angular2/common", "angular2/router"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var Tabs, Tab;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            Tabs = (function () {
                function Tabs(location, router) {
                    this.router = router;
                    this.tabs = [];
                    this.path = location.path();
                }
                Tabs.prototype.addTab = function (tab) {
                    tab.active = this.path == "" && this.tabs.length === 0;
                    this.tabs.push(tab);
                };
                Tabs.prototype.selectTab = function (tab) {
                    this.path = "";
                    this.tabs.forEach(function (tab) { return tab.active = false; });
                    tab.active = true;
                };
                Tabs.prototype.selectTabByPath = function (path) {
                    this.tabs.forEach(function (tab) { return tab.active = tab.path === path; });
                    this.router.navigateByUrl(path);
                };
                Tabs = __decorate([
                    core_1.Component({
                        selector: 'tabs',
                        templateUrl: 'app/components/tabs/tabs.html',
                        directives: [common_1.NgFor, router_1.RouterLink, router_1.RouterOutlet]
                    }), 
                    __metadata('design:paramtypes', [router_1.Location, router_1.Router])
                ], Tabs);
                return Tabs;
            })();
            exports_1("Tabs", Tabs);
            Tab = (function () {
                function Tab(tabs, location) {
                    this.active = this.active || false;
                    this._requestPath = location.path();
                    tabs.addTab(this);
                }
                Tab.prototype.ngOnInit = function () {
                    if (this._requestPath !== "") {
                        this.active = this._requestPath === this.path;
                    }
                };
                Tab = __decorate([
                    core_1.Directive({
                        selector: 'tab',
                        inputs: [
                            'tabTitle: tab-title',
                            'path: path',
                            'active'
                        ]
                    }), 
                    __metadata('design:paramtypes', [Tabs, router_1.Location])
                ], Tab);
                return Tab;
            })();
            exports_1("Tab", Tab);
        }
    }
});
//# sourceMappingURL=tabs.js.map