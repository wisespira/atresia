(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header >\n  <ion-toolbar >\n    <ion-title slot=\"start\">\n      Friends \n    </ion-title>\n   \n     <ion-icon name=\"search\" slot=\"end\" style=\"\n    font-size: 24px;\n\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n      <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content\n      pullingIcon=\"arrow-dropdown\"\n      pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\"\n     >\n    </ion-refresher-content>\n  </ion-refresher>\n    \n        <ion-card class=\"welcome-card\">\n      <ion-img src=\"https://svgsilh.com/svg/1312796.svg\"></ion-img>\n    </ion-card>\n    <ion-item>\n         <ion-thumbnail item-start tappable (tap)=\"openNewsItemFromFeed(item)\">\n                        <img style=\"\n    border-radius: 50%;\n\" src='https://metro.co.uk/wp-content/uploads/2014/10/ian-mc.png'>\n                    </ion-thumbnail>\n  <div style=\"\n    padding-left: 5px;\n\">\n<div>Georgo Roberto</div>\n<div style=\"\n    color: #a0a0a0;\n\">Sup dog</div>\n      </div>\n</ion-item>\n    \n        <ion-item>\n         <ion-thumbnail item-start tappable (tap)=\"openNewsItemFromFeed(item)\">\n                        <img style=\"\n    border-radius: 50%;\n\" src='https://purepng.com/public/uploads/large/purepng.com-brad-pittbradpittwilliam-bradley-pittamerican-actorproducer-1701528020145jcrri.png'>\n                    </ion-thumbnail>\n  <div style=\"\n    padding-left: 5px;\n\">\n<div>Brad Pitt</div>\n<div style=\"\n    color: #a0a0a0;\n\">yo yo</div>\n      </div>\n</ion-item>\n    \n        <ion-item>\n         <ion-thumbnail item-start tappable (tap)=\"openNewsItemFromFeed(item)\">\n                        <img style=\"\n    border-radius: 50%;\n\" src='data:image/jpeg;base64,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'>\n                    </ion-thumbnail>\n  <div style=\"\n    padding-left: 5px;\n\">\n<div>King Johno</div>\n<div style=\"\n    color: #a0a0a0;\n\">Message ...</div>\n      </div>\n</ion-item>\n    \n        <ion-item>\n         <ion-thumbnail item-start tappable (tap)=\"openNewsItemFromFeed(item)\">\n                        <img style=\"\n    border-radius: 50%;\n\" src='https://i.ytimg.com/vi/trG9tXAntys/hqdefault.jpg'>\n                    </ion-thumbnail>\n  <div style=\"\n    padding-left: 5px;\n\">\n<div>Izor the concorer </div>\n<div style=\"\n    color: #a0a0a0;\n\">Message ...</div>\n      </div>\n</ion-item>\n           <ion-item>\n         <ion-thumbnail item-start tappable (tap)=\"openNewsItemFromFeed(item)\">\n                        <img style=\"\n    border-radius: 50%;\n\" src='https://static.comicvine.com/uploads/square_medium/11132/111325030/5880119-spongebob%20squarepants%20gary%20the%20snail.jpg'>\n                    </ion-thumbnail>\n  <div style=\"\n    padding-left: 5px;\n\">\n<div>Hazza </div>\n<div style=\"\n    color: #a0a0a0;\n\">Message ...</div>\n      </div>\n</ion-item>\n    \n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\nion-searchbar input {\n  box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXG5pdzIyXFxVbmkgV29ya1xcYXRyZWVpYVxcYXRyZWVpYS9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0ksMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmlvbi1zZWFyY2hiYXIgaW5wdXR7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab1Page = /** @class */ (function () {
    function Tab1Page() {
    }
    Tab1Page.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        })
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map