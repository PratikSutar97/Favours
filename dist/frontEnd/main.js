(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pratik/A Pratik_Data/MSC/Angular Mini Project/Favours/src/main.ts */"zUnb");


/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request.service */ "F8sd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");






class RegisterComponent {
    constructor(fobj, service, router) {
        this.fobj = fobj;
        this.service = service;
        this.router = router;
        this.error = '';
        this.userform = this.fobj.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(('[a-zA-Z ]*'))]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(('[a-zA-Z ]*'))]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(('[a-zA-Z ]*'))]],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(('[0-9 ]*'))]],
        });
    }
    ngOnInit() {
    }
    signup() {
        this.error = " ";
        this.service.signup(this.userform.value)
            .subscribe(data => { console.log("Success", data); this.router.url["http://localhost:4200/viewPublic"]; }, error => alert("This email id/mobile number is already Registered"));
        alert("Successfully Signed Up");
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 18, vars: 2, consts: [[1, "form-signin", 2, "width", "25%", "margin-left", "30%", 3, "formGroup", "ngSubmit"], [2, "color", "red"], [1, "h3", "mb-3", "font-weight-normal"], ["type", "text", "formControlName", "name", "placeholder", "Full Name", "required", "", "autofocus", "", 1, "form-control"], ["type", "email", "formControlName", "email", "placeholder", "Email address", "required", "", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "password", "formControlName", "confirm-password", "placeholder", "Confirm Password", "required", "", 1, "form-control"], ["type", "text", "formControlName", "mobile", "placeholder", "Mobile Number", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.signup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Please Register Yourself !!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F8sd":
/*!************************************!*\
  !*** ./src/app/request.service.ts ***!
  \************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class RequestService {
    constructor(http) {
        this.http = http;
        this._requestsUrl = "http://localhost:3000/api/viewRequests";
        this._addRequestsUrl = "http://localhost:3000/api/addRequests";
        this._signUpUrl = "http://localhost:3000/api/signup";
        this._loginUpUrl = "http://localhost:3000/api/login";
    }
    viewRequests() {
        return this.http.get(this._requestsUrl);
    }
    addRequest(requestDetails) {
        return this.http.post(this._addRequestsUrl, requestDetails);
    }
    signup(userDetails) {
        return this.http.post(this._signUpUrl, userDetails);
    }
    login(loginDetails) {
        return this.http.post(this._loginUpUrl, loginDetails);
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "G6s5":
/*!****************************************************!*\
  !*** ./src/app/add-favour/add-favour.component.ts ***!
  \****************************************************/
/*! exports provided: AddFavourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFavourComponent", function() { return AddFavourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AddFavourComponent {
    constructor() { }
    ngOnInit() {
    }
}
AddFavourComponent.ɵfac = function AddFavourComponent_Factory(t) { return new (t || AddFavourComponent)(); };
AddFavourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddFavourComponent, selectors: [["app-add-favour"]], decls: 3, vars: 0, consts: [[1, "well", "main-content"], [2, "margin-left", "30%"]], template: function AddFavourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here Goes Add Favour Form....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".well.main-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #01b075;\n}\n.well[_ngcontent-%COMP%] {\n  background-color: #202125;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWZhdm91ci9hZGQtZmF2b3VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYWRkLWZhdm91ci9hZGQtZmF2b3VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsbC5tYWluLWNvbnRlbnQgaDEge1xuICBjb2xvcjogIzAxYjA3NTtcbn1cbi53ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNTtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddFavourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-favour',
                templateUrl: './add-favour.component.html',
                styleUrls: ['./add-favour.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "GfRi":
/*!********************************************************!*\
  !*** ./src/app/view-request/view-request.component.ts ***!
  \********************************************************/
/*! exports provided: ViewRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRequestComponent", function() { return ViewRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _accept_request_dialog_accept_request_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accept-request-dialog/accept-request-dialog.component */ "gcFe");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.service */ "F8sd");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function ViewRequestComponent_mat_expansion_panel_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Category : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Description : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Rewards : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-action-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewRequestComponent_mat_expansion_panel_11_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openAcceptRequestDialog(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Accept and Complete Request");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](card_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Request By -", card_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", card_r1.desc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", card_r1.reward, "");
} }
class ViewRequestComponent {
    constructor(service, dialog) {
        this.service = service;
        this.dialog = dialog;
        this.currentRequestID = null;
        this.viewData = [];
    }
    ngOnInit() {
        this.service.viewRequests()
            .subscribe(data => {
            if (data) {
                localStorage.setItem("activeRequests", data.length);
                hideloader();
            }
            this.viewData = data;
        });
        function hideloader() {
            // Setting display of spinner 
            // element to none 
            document.getElementById('loading')
                .style.display = 'none';
            document.getElementById('loadings')
                .style.display = 'none';
        }
        this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    }
    onResize(event) {
        this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
    }
    openAcceptRequestDialog() {
        const dialogRef = this.dialog.open(_accept_request_dialog_accept_request_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AcceptRequestDialogComponent"], {
            width: '450px',
            data: { name: this.id, animal: this.file }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
ViewRequestComponent.ɵfac = function ViewRequestComponent_Factory(t) { return new (t || ViewRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ViewRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewRequestComponent, selectors: [["app-view-request"]], viewQuery: function ViewRequestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.accordion = _t.first);
    } }, decls: 12, vars: 1, consts: [[1, "d-flex", "justify-content-center"], ["role", "status", 1, "spinner-border"], ["id", "loading"], ["id", "loadings"], [1, "example-headers-align"], [2, "margin-left", "20px", "font-size", "25px", "position", "sticky"], ["style", "width: 70%;margin-left: 70px;;box-shadow: 1px 1px 5px black;", "hideToggle", "", 4, "ngFor", "ngForOf"], ["hideToggle", "", 2, "width", "70%", "margin-left", "70px", ";box-shadow", "1px 1px 5px black"], [2, "height", "70px"], [2, "width", "0%"], [2, "color", "Grey", "font-size", "20px"], [2, "font-size", "20px", "margin-left", "20px"], [2, "font-size", "19px", "margin-left", "60%"], [2, "border", "2px solid black"], [2, "height", "auto"], ["mat-button", "", 1, "btn", "btn-primary", 3, "click"]], template: function ViewRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Loading ...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-accordion", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Public Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewRequestComponent_mat_expansion_panel_11_Template, 25, 4, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.viewData);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatExpansionPanelActionRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: ["@media screen and (max-width: 767px) {\n  .content[_ngcontent-%COMP%] {\n      height: auto;\n      }\n  }\n  \n  .content[_ngcontent-%COMP%]{\n    \n      display: inline;\n      padding: 5px;\n      flex-flow: column;\n      align-items: center;\n      display: flex;\n      margin: auto;\n      margin-bottom: 73px;\n  }\n  \n  .Cards[_ngcontent-%COMP%]{\n      min-width: 150px;\n      max-width: 1000px;\n      width: 100%;\n      box-shadow:1px 1px 1px 1px black;\n      flex-flow: column;\n      align-items: center;\n      margin-bottom:5px ;\n  }\n  \n  .Button[_ngcontent-%COMP%]{\n      float: right;\n  }\n  \n  .example-action-buttons[_ngcontent-%COMP%] {\n    padding-bottom: 20px;\n  }\n  \n  .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n    flex-basis: 0;\n  }\n  \n  .example-headers-align[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    align-items: center;\n  }\n  \n  .example-headers-align[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n    margin-left: 8px;\n  }\n  \n  #loading[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    z-index: 1;\n    width: 80px;\n    height: 80px;\n    margin: -75px 0 0 -75px;\n    border: 5px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 5px solid #3498db;\n    width: 80px;\n    height: 80px;\n    animation: spin 2s linear infinite;\n    }\n  \n  #loadings[_ngcontent-%COMP%]{\n      left: 45%;\n    top: 43%;\n    position: absolute;\n    }\n  \n  @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1yZXF1ZXN0L3ZpZXctcmVxdWVzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7TUFDSSxZQUFZO01BQ1o7RUFDSjs7RUFFQTs7TUFFSSxlQUFlO01BQ2YsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQixtQkFBbUI7TUFDbkIsYUFBYTtNQUNiLFlBQVk7TUFDWixtQkFBbUI7RUFDdkI7O0VBRUE7TUFDSSxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxnQ0FBZ0M7TUFDaEMsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQixrQkFBa0I7RUFDdEI7O0VBRUE7TUFDSSxZQUFZO0VBQ2hCOztFQUdBO0lBQ0Usb0JBQW9CO0VBQ3RCOztFQUVBOztJQUVFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDhCQUE4QjtJQUM5QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEM7O0VBQ0E7TUFDRSxTQUFTO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQjs7RUFFQTtNQUNFLEtBQUssdUJBQXVCLEVBQUU7TUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtJQUNwQyIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcmVxdWVzdC92aWV3LXJlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW50IHtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICAgIH1cbiAgfVxuICBcbiAgLmNvbnRlbnR7XG4gICAgXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNzNweDtcbiAgfVxuICBcbiAgLkNhcmRze1xuICAgICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICAgIG1heC13aWR0aDogMTAwMHB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OjFweCAxcHggMXB4IDFweCBibGFjaztcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206NXB4IDtcbiAgfVxuICBcbiAgLkJ1dHRvbntcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIFxuICAuZXhhbXBsZS1hY3Rpb24tYnV0dG9ucyB7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgZmxleC1iYXNpczogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgfVxuXG4gIFxuICAjbG9hZGluZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRvcDogNTAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1hcmdpbjogLTc1cHggMCAwIC03NXB4O1xuICAgIGJvcmRlcjogNXB4IHNvbGlkICNmM2YzZjM7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjMzQ5OGRiO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cbiAgICAjbG9hZGluZ3N7XG4gICAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0MyU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gICAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-request',
                templateUrl: './view-request.component.html',
                styleUrls: ['./view-request.component.css'],
            }]
    }], function () { return [{ type: _request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { accordion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_1__["MatAccordion"]]
        }] }); })();


/***/ }),

/***/ "Kicu":
/*!**********************************************************!*\
  !*** ./src/app/return-favour/return-favour.component.ts ***!
  \**********************************************************/
/*! exports provided: ReturnFavourComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnFavourComponent", function() { return ReturnFavourComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ReturnFavourComponent {
    constructor() { }
    ngOnInit() {
    }
}
ReturnFavourComponent.ɵfac = function ReturnFavourComponent_Factory(t) { return new (t || ReturnFavourComponent)(); };
ReturnFavourComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReturnFavourComponent, selectors: [["app-return-favour"]], decls: 3, vars: 0, consts: [[1, "well", "main-content"], [2, "margin-left", "30%"]], template: function ReturnFavourComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here Goes Return Favour Form....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".well.main-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #01b075;\n}\n.well[_ngcontent-%COMP%] {\n  background-color: #202125;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmV0dXJuLWZhdm91ci9yZXR1cm4tZmF2b3VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcmV0dXJuLWZhdm91ci9yZXR1cm4tZmF2b3VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsbC5tYWluLWNvbnRlbnQgaDEge1xuICBjb2xvcjogIzAxYjA3NTtcbn1cbi53ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNTtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReturnFavourComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-return-favour',
                templateUrl: './return-favour.component.html',
                styleUrls: ['./return-favour.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");












function AppComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome, ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Welcome, Guest \u00A0 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx_r2.username, " ");
} }
function AppComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
function AppComponent_a_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function AppComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Favours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favours you owe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Favors owed to you");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["/viewPublic"]; };
const _c2 = function (a0) { return { expanded: a0 }; };
const _c3 = function () { return ["/addRequest"]; };
class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.isLoggedIn = false;
        this.currentTheme = '';
        this.expandSubmenu = true;
        this.activeRequests = localStorage.getItem('activeRequests');
        this.username = localStorage.getItem('username');
        if (localStorage.getItem('username') == null) {
            this.isLoggedIn = false;
            localStorage.setItem('loggedIn', "false");
        }
        else {
            this.isLoggedIn = true;
            this.username = localStorage.getItem('username');
        }
    }
    ngOnInit() {
        this.currentTheme = localStorage.getItem('theme');
    }
    f(val, val2) {
        this.isLoggedIn = val;
        localStorage.setItem('username', val2);
        localStorage.setItem('loggedIn', val);
    }
    logout() {
        this.isLoggedIn = false;
        localStorage.removeItem('username');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 48, vars: 20, consts: [["color", "primary"], [2, "font-size", "30px", 3, "routerLink"], [1, "content-right"], [4, "ngIf"], ["class", "", "style", "font-size: 20px;", 4, "ngIf"], [1, "dropdown"], ["mat-icon-button", "", "class", "", "aria-label", "", 4, "ngIf"], [1, "dropdown-content"], [1, "btn"], ["class", "", "aria-label", "", 3, "routerLink", 4, "ngIf"], ["mat-icon-button", "", "class", "", "aria-label", "", 3, "click", 4, "ngIf"], ["autosize", "", 1, "side-menu-container"], ["mode", "side", "opened", "true", 1, "side-menu", 2, "background-color", "rgb(170, 170, 179)"], ["sidenav", ""], [1, "submenu", 3, "ngClass"], ["mat-list-item", "", "href", "#", "routerLinkActive", "router-link-active", 1, "well", 3, "routerLink"], [2, "border", "5px solid"], ["mat-list-item", "", "href", "#", "class", "well", 4, "ngIf"], [2, "float", "right"], [1, "card", 2, "text-align", "center"], [1, "", 2, "font-size", "20px", "color", "white", "text-shadow", "110px 1px 120px rgb(214, 35, 35), 0 0 5px rgb(245, 122, 7), 0 0 15px rgb(255, 102, 0)"], [1, "", 2, "font-size", "20px"], [1, "base"], [1, "thread"], [1, "card1"], ["mat-icon-button", "", "aria-label", "", 1, ""], [2, "width", "40px"], ["aria-label", "", 1, "", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "", 1, "", 3, "click"], ["mat-list-item", "", "href", "#", 1, "well"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Favoronix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AppComponent_span_5_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_span_6_Template, 2, 0, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_span_7_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_button_9_Template, 3, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Your Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_a_13_Template, 3, 2, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_button_14_Template, 3, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-sidenav-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-sidenav", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "View Public Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Public Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "hr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_a_27_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_a_28_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_a_29_Template, 2, 0, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-card", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Total Users till now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-card", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Active Requests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx.expandSubmenu));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeRequests * 310);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.activeRequests);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultClassDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"]], styles: ["@import url(\"https://fonts.google.com/specimen/Montserrat?query=mon\");\n\n\n.well[_ngcontent-%COMP%]:hover {\n  background-color: #9b96c9;\n  color: #fff;\n}\n\n\n.navbar-brand.brand-logo[_ngcontent-%COMP%] {\n  color: #01b075;\n  font-size: 60px;\n  margin-left: 2%;\n  margin-top: 10px;\n  letter-spacing: 3px;\n  font-family: \"Montserrat\";\n}\n\n\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-user-circle[_ngcontent-%COMP%] {\n  font-size: 30px;\n  padding-right: 10px;\n}\n\n\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n\n.navbar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.fa-sign-out-alt[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 10px;\n}\n\n\n\n\n\n.well.main-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #01b075;\n}\n\n\n.well[_ngcontent-%COMP%] {\n  background-color: #1c3ec5;\n  color: white;\n  margin-left: -10px;\n}\n\n\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\n\n\n.bg-primary[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #202125;\n}\n\n\nli[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n\ni[_ngcontent-%COMP%] {\n  padding: 2px;\n  color: #01b075;\n  font-size: 16px;\n}\n\n\n\n\n\n.dropbtn[_ngcontent-%COMP%] {\n  color: #01b075;\n  padding: 5px;\n  font-size: 15px;\n  border: none;\n  width: 100%;\n}\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: relative;\n  background-color: #202125;\n  min-width: 200px;\n  z-index: 1;\n}\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  padding: 5px 5px;\n  text-decoration: none;\n  display: block;\n}\n\n\n.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #01b075;\n}\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n.dropdown[_ngcontent-%COMP%]:hover {\n  background-color: #01b075;\n}\n\n\n\n\n\n.content-right[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n\n.side-menu-container[_ngcontent-%COMP%] {\n  height: calc(100vh - 64px);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n\n.side-menu-content[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 10px;\n  height: 100%;\n}\n\n\n.side-menu[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n\n.menu-button[_ngcontent-%COMP%] {\n  transition: 300ms ease-in-out;\n  transform: rotate(0deg);\n}\n\n\n.menu-button.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n\n\n.submenu[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  transition: transform 300ms ease;\n  transform: scaleY(0);\n  transform-origin: top;\n  padding-left: 30px;\n}\n\n\n.submenu.expanded[_ngcontent-%COMP%] {\n  transform: scaleY(1);\n}\n\n\n.card[_ngcontent-%COMP%]{\n  border-radius:50px 50px;\n  right:100px;\n  top: 20px;\n  width:70%;\n  color:white;\n  background-color: #6e7ec0;\n  height:auto;\n  float:right;\n}\n\n\n.card1[_ngcontent-%COMP%]{\n  border-radius:50px 50px;\n  right:-60px;\n  top: 30px;\n  text-align:center;\n  color:white;\n  background-color: #6e7ec0;\n  height:auto;\n  float:right;\n}\n\n\n.base[_ngcontent-%COMP%] {\n  width: 50px;\n  border-top: 5px solid gray;\n  margin-left: 2.5%;\n  margin-top:140px;\n  text-align: center;\n  position: relative;\n  padding: 0 0 30px;\n  \n}\n\n\n.thread[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 120px;\n  background: black;\n  border-radius: 5px;\n  position: relative;\n  transform-origin: 50% 0;\n  animation: moveIt 3.5s ease-in-out infinite;\n}\n\n\n@keyframes moveIt {\n  0%, 100% {\n    transform: rotate(25deg);\n  }\n  50% {\n    transform: rotate(-25deg);\n  }\n}\n\n\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n\n\n.dropdown-content[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  padding: 12px 16px;\n  z-index: 2;\n}\n\n\n.dropdown[_ngcontent-%COMP%]:hover   .dropdown-content[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: -120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQXFFOzs7QUFHckU7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOzs7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7OztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsYUFBYTtBQUNmOzs7QUFDQSwwQkFBMEI7OztBQUMxQjtFQUNFLGNBQWM7QUFDaEI7OztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUVBLGNBQWM7OztBQUVkO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7OztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7OztBQUVBLHFCQUFxQjs7O0FBQ3JCO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0NBQW9DO0FBQ3RDOzs7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsWUFBWTtBQUNkOzs7QUFDQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCOzs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOzs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBQ1QsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsV0FBVztBQUNiOzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsU0FBUztFQUNULGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7OztBQUdBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCOztBQUVuQjs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMkNBQTJDO0FBQzdDOzs7QUFHQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQiw0Q0FBNEM7RUFDNUMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlLmNvbS9zcGVjaW1lbi9Nb250c2VycmF0P3F1ZXJ5PW1vblwiKTtcblxuXG4ud2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Yjk2Yzk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubmF2YmFyLWJyYW5kLmJyYW5kLWxvZ28ge1xuICBjb2xvcjogIzAxYjA3NTtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIjtcbn1cbi5uYXZiYXIgbGkgaS5mYS11c2VyLWNpcmNsZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbi5uYXZiYXIgbGkgYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi5uYXZiYXIgbGkgaS5mYS1zaWduLW91dC1hbHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4vKiAubmF2YmFye21pbi1oZWlnaHQ6IH0gKi9cbi53ZWxsLm1haW4tY29udGVudCBoMyB7XG4gIGNvbG9yOiAjMDFiMDc1O1xufVxuLndlbGwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMzZWM1O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uYmctcHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTI1O1xufVxubGkge1xuICBjb2xvcjogI2ZmZjtcbn1cbmkge1xuICBwYWRkaW5nOiAycHg7XG4gIGNvbG9yOiAjMDFiMDc1O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi8qIERyb3AgRG93biAqL1xuXG4uZHJvcGJ0biB7XG4gIGNvbG9yOiAjMDFiMDc1O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMTI1O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiA1cHggNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxYjA3NTtcbn1cblxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMWIwNzU7XG59XG5cbi8qIGFuZ3VsYXIgbWF0ZXJpYWwgKi9cbi5jb250ZW50LXJpZ2h0IHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zaWRlLW1lbnUtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5zaWRlLW1lbnUtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zaWRlLW1lbnUge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ubWVudS1idXR0b24ge1xuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG59XG4ubWVudS1idXR0b24ucm90YXRlZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG4uc3VibWVudSB7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbi5zdWJtZW51LmV4cGFuZGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG5cbi5jYXJke1xuICBib3JkZXItcmFkaXVzOjUwcHggNTBweDtcbiAgcmlnaHQ6MTAwcHg7XG4gIHRvcDogMjBweDtcbiAgd2lkdGg6NzAlO1xuICBjb2xvcjp3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZlN2VjMDtcbiAgaGVpZ2h0OmF1dG87XG4gIGZsb2F0OnJpZ2h0O1xufVxuXG4uY2FyZDF7XG4gIGJvcmRlci1yYWRpdXM6NTBweCA1MHB4O1xuICByaWdodDotNjBweDtcbiAgdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgY29sb3I6d2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZTdlYzA7XG4gIGhlaWdodDphdXRvO1xuICBmbG9hdDpyaWdodDtcbn1cblxuXG4uYmFzZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgZ3JheTtcbiAgbWFyZ2luLWxlZnQ6IDIuNSU7XG4gIG1hcmdpbi10b3A6MTQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDAgMzBweDtcbiAgXG59XG5cbi50aHJlYWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XG4gIGFuaW1hdGlvbjogbW92ZUl0IDMuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cblxuQGtleWZyYW1lcyBtb3ZlSXQge1xuICAwJSwgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjVkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI1ZGVnKTtcbiAgfVxufVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogLTEyMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "qlzE");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _member_favours_member_favours_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./member-favours/member-favours.component */ "h9JC");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-request/add-request.component */ "g4Mi");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _add_favour_add_favour_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-favour/add-favour.component */ "G6s5");
/* harmony import */ var _return_favour_return_favour_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./return-favour/return-favour.component */ "Kicu");
/* harmony import */ var _view_request_view_request_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./view-request/view-request.component */ "GfRi");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./request-details/request-details.component */ "s1fA");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./request.service */ "F8sd");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./login/login.component */ "vtpD");









/* Animations Material */






















//Api Services




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_request_service__WEBPACK_IMPORTED_MODULE_31__["RequestService"]], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"]
        ], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _member_favours_member_favours_component__WEBPACK_IMPORTED_MODULE_6__["MemberFavoursComponent"],
        _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_8__["AddRequestComponent"],
        _add_favour_add_favour_component__WEBPACK_IMPORTED_MODULE_11__["AddFavourComponent"],
        _return_favour_return_favour_component__WEBPACK_IMPORTED_MODULE_12__["ReturnFavourComponent"],
        _view_request_view_request_component__WEBPACK_IMPORTED_MODULE_13__["ViewRequestComponent"],
        _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_30__["RequestDetailsComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"]], imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
        _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"]], exports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                exports: [
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _member_favours_member_favours_component__WEBPACK_IMPORTED_MODULE_6__["MemberFavoursComponent"],
                    _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_8__["AddRequestComponent"],
                    _add_favour_add_favour_component__WEBPACK_IMPORTED_MODULE_11__["AddFavourComponent"],
                    _return_favour_return_favour_component__WEBPACK_IMPORTED_MODULE_12__["ReturnFavourComponent"],
                    _view_request_view_request_component__WEBPACK_IMPORTED_MODULE_13__["ViewRequestComponent"],
                    _request_details_request_details_component__WEBPACK_IMPORTED_MODULE_30__["RequestDetailsComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_32__["RegisterComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_33__["LoginComponent"],
                ],
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                    _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_19__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_21__["LayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_22__["ReactiveFormsModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggleModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_28__["FlexLayoutModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_29__["ScrollingModule"]
                ],
                providers: [_request_service__WEBPACK_IMPORTED_MODULE_31__["RequestService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "g4Mi":
/*!******************************************************!*\
  !*** ./src/app/add-request/add-request.component.ts ***!
  \******************************************************/
/*! exports provided: AddRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRequestComponent", function() { return AddRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _request_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request-details */ "m+s8");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request.service */ "F8sd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");











function AddRequestComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddRequestComponent {
    constructor(router, fobj, requestService) {
        this.router = router;
        this.fobj = fobj;
        this.requestService = requestService;
        this.isloggedin = false;
        this.AddRequestData = new _request_details__WEBPACK_IMPORTED_MODULE_1__["RequestDetails"]("", "", "", "");
        this.userform = this.fobj.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z ]*'))]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z ]*'))]],
            desc: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z ]*'))]],
            reward: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z0-9 ]*'))]],
        });
        this.error = "";
        this.isloggedinn = localStorage.getItem('loggedIn');
        if (this.isloggedinn == "false")
            this.isloggedin = false;
        else {
            this.isloggedin = true;
        }
    }
    ;
    ngOnInit() { }
    addRequest() {
        if (this.isloggedin == true) {
            var name = localStorage.getItem('username');
            var username = name.replace(/@.*$/, "");
            this.userform.value.name = username;
        }
        this.requestService.addRequest(this.userform.value)
            .subscribe(data => console.log("Success", data), error => console.log("ERRORRR !!!", error));
        this.router.navigate(['./viewPublic']);
    }
}
AddRequestComponent.ɵfac = function AddRequestComponent_Factory(t) { return new (t || AddRequestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"])); };
AddRequestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddRequestComponent, selectors: [["app-add-request"]], decls: 23, vars: 3, consts: [[1, "container"], [1, "example-form", 3, "formGroup", "ngSubmit"], [2, "color", "red", "float", "right"], ["class", "example-full-width", 4, "ngIf"], [1, "example-full-width"], ["type", "text", "matInput", "", "formControlName", "title", "placeholder", "Ex. Office Work or Home Work or Shop Work"], ["type", "text", "matInput", "", "formControlName", "desc", "placeholder", "Ex. Clean a Fridge"], ["type", "text", "matInput", "", "formControlName", "reward", "placeholder", "Ex. 3 Burgers or 1 Dinner or 2 Pizzas etc"], [2, "text-align", "center"], ["type", "submit", "mat-raised-button", "", 1, "btn", "btn-primary"], ["type", "text", "matInput", "", "formControlName", "name", "placeholder", "Ex.Pratik"]], template: function AddRequestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddRequestComponent_Template_form_ngSubmit_2_listener() { return ctx.addRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AddRequestComponent_mat_form_field_6_Template, 4, 0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Request Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Reward with Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isloggedin);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]], styles: [".example-form[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n    border: 1px solid;\n    padding: 10px 10px 10px 10px;\n    margin: 150px auto;\n\n  }\n  \n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  \n  .container[_ngcontent-%COMP%]{\n    margin: 0 auto;\n\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJlcXVlc3QvYWRkLXJlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjOztFQUVoQiIsImZpbGUiOiJzcmMvYXBwL2FkZC1yZXF1ZXN0L2FkZC1yZXF1ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIG1hcmdpbjogMTUwcHggYXV0bztcblxuICB9XG4gIFxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250YWluZXJ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRequestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add-request',
                templateUrl: './add-request.component.html',
                styleUrls: ['./add-request.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }]; }, null); })();


/***/ }),

/***/ "gcFe":
/*!***************************************************************************************!*\
  !*** ./src/app/view-request/accept-request-dialog/accept-request-dialog.component.ts ***!
  \***************************************************************************************/
/*! exports provided: AcceptRequestDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptRequestDialogComponent", function() { return AcceptRequestDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




class AcceptRequestDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.errorMsg = '';
        this.confirmationMsg = '';
    }
    ngOnInit() {
    }
    complete() {
        console.log(this.files);
    }
    onFileChanged(event) {
        this.files = event.target.files[0];
    }
}
AcceptRequestDialogComponent.ɵfac = function AcceptRequestDialogComponent_Factory(t) { return new (t || AcceptRequestDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AcceptRequestDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AcceptRequestDialogComponent, selectors: [["app-accept-request-dialog"]], decls: 16, vars: 0, consts: [[2, "display", "inline-flex", "width", "100%"], ["type", "file", "src", "img_submit.gif", "alt", "Submit", "width", "48", "height", "48", "required", ""], ["mat-raised-button", "", 1, "btn", "btn-primary", 2, "float", "right", 3, "click"]], template: function AcceptRequestDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Complete Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please upload a photo as proof After Completing The Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Only jpg/jpeg *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AcceptRequestDialogComponent_Template_button_click_14_listener() { return ctx.complete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctcmVxdWVzdC9hY2NlcHQtcmVxdWVzdC1kaWFsb2cvYWNjZXB0LXJlcXVlc3QtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AcceptRequestDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-accept-request-dialog',
                templateUrl: './accept-request-dialog.component.html',
                styleUrls: ['./accept-request-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "h9JC":
/*!************************************************************!*\
  !*** ./src/app/member-favours/member-favours.component.ts ***!
  \************************************************************/
/*! exports provided: MemberFavoursComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberFavoursComponent", function() { return MemberFavoursComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MemberFavoursComponent {
    constructor() { }
    ngOnInit() {
    }
}
MemberFavoursComponent.ɵfac = function MemberFavoursComponent_Factory(t) { return new (t || MemberFavoursComponent)(); };
MemberFavoursComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberFavoursComponent, selectors: [["app-member-favours"]], decls: 22, vars: 0, consts: [[1, "row"], [1, "col-sm-4"], [1, "well"], ["href", "#section5"], ["href", "#section6"], ["href", "#section7"]], template: function MemberFavoursComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Favours you owe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "8,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Favours owed to you");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Favours Returned");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "2,000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".well[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n}\n.well[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #fff;\n}\n\n.well[_ngcontent-%COMP%] {\n  background-color: #202125;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyLWZhdm91cnMvbWVtYmVyLWZhdm91cnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBRUEsMEJBQTBCO0FBRTFCO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21lbWJlci1mYXZvdXJzL21lbWJlci1mYXZvdXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsbCBoNCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cbi53ZWxsIHAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogLm5hdmJhcnttaW4taGVpZ2h0OiB9ICovXG5cbi53ZWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjEyNTtcbiAgYm9yZGVyOiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberFavoursComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-member-favours',
                templateUrl: './member-favours.component.html',
                styleUrls: ['./member-favours.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m+s8":
/*!************************************!*\
  !*** ./src/app/request-details.ts ***!
  \************************************/
/*! exports provided: RequestDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetails", function() { return RequestDetails; });
class RequestDetails {
    constructor(title, name, desc, reward) {
        this.title = title;
        this.name = name;
        this.desc = desc;
        this.reward = reward;
    }
}


/***/ }),

/***/ "s1fA":
/*!**************************************************************!*\
  !*** ./src/app/request-details/request-details.component.ts ***!
  \**************************************************************/
/*! exports provided: RequestDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestDetailsComponent", function() { return RequestDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RequestDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RequestDetailsComponent.ɵfac = function RequestDetailsComponent_Factory(t) { return new (t || RequestDetailsComponent)(); };
RequestDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RequestDetailsComponent, selectors: [["app-request-details"]], decls: 2, vars: 0, template: function RequestDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "request-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QtZGV0YWlscy9yZXF1ZXN0LWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RequestDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-request-details',
                templateUrl: './request-details.component.html',
                styleUrls: ['./request-details.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-request/add-request.component */ "g4Mi");
/* harmony import */ var _add_favour_add_favour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-favour/add-favour.component */ "G6s5");
/* harmony import */ var _return_favour_return_favour_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./return-favour/return-favour.component */ "Kicu");
/* harmony import */ var _view_request_view_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view-request/view-request.component */ "GfRi");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "1W4x");











const routes = [
    { path: 'viewPublic', component: _view_request_view_request_component__WEBPACK_IMPORTED_MODULE_6__["ViewRequestComponent"] },
    { path: 'addRequest', component: _add_request_add_request_component__WEBPACK_IMPORTED_MODULE_3__["AddRequestComponent"] },
    { path: 'addFavour', component: _add_favour_add_favour_component__WEBPACK_IMPORTED_MODULE_4__["AddFavourComponent"] },
    { path: 'returnFavour', component: _return_favour_return_favour_component__WEBPACK_IMPORTED_MODULE_5__["ReturnFavourComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
    { path: '', redirectTo: 'viewPublic', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../register/register.component */ "1W4x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../request.service */ "F8sd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.error_msg);
} }
const _c0 = function () { return ["/register"]; };
const _c1 = function () { return ["/viewPublic"]; };
class LoginComponent {
    constructor(fobj, dialog, service, router, app) {
        this.fobj = fobj;
        this.dialog = dialog;
        this.service = service;
        this.router = router;
        this.app = app;
        this.error_msg = "";
        this.loggedIn = true;
        this.data = [];
        this.userform = this.fobj.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z ]*'))]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(('[a-zA-Z ]*'))]],
        });
    }
    ngOnInit() { }
    f() {
        return this.userform.value.email;
    }
    openRegisterComponent() {
        const dialogRef = this.dialog.open(_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"], {
            width: '450px',
            height: '500px',
            data: { name: this.username, animal: this.password }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    login() {
        this.service.login(this.userform.value)
            .subscribe(data => {
            console.log("Data - :- " + data);
        }, err => {
            this.error = err.status;
            this.error_msg = "Invalid Email or Password !! Try Again";
        });
        if (this.error != 401) {
            this.loggedIn = false;
        }
        else {
            this.loggedIn = true;
        }
        if (this.loggedIn == true) {
            this.app.f(this.loggedIn, this.userform.value.email);
            this.router.navigate(['/viewPublic']);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 6, consts: [[1, "form-signin", 2, "width", "25%", "margin-left", "30%", "margin-top", "100px", 3, "formGroup", "ngSubmit"], [1, "h3", "mb-3", "font-weight-normal"], ["type", "email", "formControlName", "email", "placeholder", "Email address", "required", "", "autofocus", "", 1, "form-control"], ["type", "password", "formControlName", "password", "placeholder", "Password", "required", "", 1, "form-control"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", "btn-block"], ["style", "color: red;", 4, "ngIf"], ["aria-label", "", 1, "link", 2, "color", "blue", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-lg", "btn-danger", "btn-block", 2, "width", "140px", "float", "right", 3, "routerLink"], [2, "color", "red"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " login In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_span_11_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " New Here ?? Click Me To Register ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.userform);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map