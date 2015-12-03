var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var router_1 = require("angular2/router");
var Tabs = (function () {
    function Tabs(location) {
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
    Tabs = __decorate([
        angular2_1.Component({
            selector: 'tabs',
            templateUrl: 'app/components/tabs/tabs.html',
            directives: [angular2_1.NgFor, router_1.RouterLink, router_1.RouterOutlet]
        }), 
        __metadata('design:paramtypes', [router_1.Location])
    ], Tabs);
    return Tabs;
})();
exports.Tabs = Tabs;
var Tab = (function () {
    function Tab(tabs) {
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Tab = __decorate([
        angular2_1.Directive({
            selector: 'tab',
            inputs: [
                'tabTitle: tab-title',
                'path: path',
                'active'
            ]
        }), 
        __metadata('design:paramtypes', [Tabs])
    ], Tab);
    return Tab;
})();
exports.Tab = Tab;
//# sourceMappingURL=tabs.js.map