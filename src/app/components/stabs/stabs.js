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
var Stabs = (function () {
    function Stabs() {
        this.tabs = [];
    }
    Stabs.prototype.addTab = function (tab) {
        tab.active = this.tabs.length === 0;
        this.tabs.push(tab);
    };
    Stabs.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) { return tab.active = false; });
        tab.active = true;
    };
    Stabs = __decorate([
        angular2_1.Component({
            selector: 'stabs',
            templateUrl: 'app/components/stabs/stabs.html',
            directives: [angular2_1.NgFor]
        }), 
        __metadata('design:paramtypes', [])
    ], Stabs);
    return Stabs;
})();
exports.Stabs = Stabs;
var Stab = (function () {
    function Stab(tabs) {
        this.active = this.active || false;
        tabs.addTab(this);
    }
    Stab = __decorate([
        angular2_1.Component({
            selector: 'stab',
            inputs: [
                'tabTitle: tab-title',
                'active'
            ],
            template: "\n\t\t<div [hidden]=\"!active\">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [Stabs])
    ], Stab);
    return Stab;
})();
exports.Stab = Stab;
//# sourceMappingURL=stabs.js.map