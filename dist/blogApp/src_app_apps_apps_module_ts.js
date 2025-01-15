"use strict";
(self["webpackChunkblogApp"] = self["webpackChunkblogApp"] || []).push([["src_app_apps_apps_module_ts"],{

/***/ 5970:
/*!****************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/relay-on/relay-on.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelayOnComponent": () => (/* binding */ RelayOnComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function RelayOnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const relay_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](relay_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](relay_r1.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", relay_r1.fieldText, " ");
} }
class RelayOnComponent {
    constructor() {
        this.relayOn = [
            {
                icon: 'sl-icon-target text-white',
                field: 'Focus on the Essence',
                fieldText: 'We focus on what really matters for your business: a digital presence that impacts.'
            },
            {
                icon: 'sl-icon-mouse text-white',
                field: 'Custom Design',
                fieldText: 'Each project is unique, and that is how we treat it, with personalized solutions to your needs.'
            },
            {
                icon: 'sl-icon-earphones-alt text-white',
                field: 'Personalized Attention',
                fieldText: 'We are at your side from the initial idea to implementation and beyond.'
            }
        ];
    }
    ngOnInit() {
    }
}
RelayOnComponent.ɵfac = function RelayOnComponent_Factory(t) { return new (t || RelayOnComponent)(); };
RelayOnComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RelayOnComponent, selectors: [["app-relay-on"]], decls: 2, vars: 1, consts: [[1, "row", "m-t-40"], ["class", "col-md-4 wrap-feature1-box", 4, "ngFor", "ngForOf"], [1, "col-md-4", "wrap-feature1-box"], ["data-aos", "fade-right", "data-aos-duration", "1200", 1, "card", "card-shadow", 2, "background-image", "url('assets/images/landingpage/banner-bg-old.jpg')"], [1, "card-body", "p-40", "text-center"], [1, "icon-space", "display-5"], [1, "font-medium", "text-white"], [1, "m-t-20", "text-white"]], template: function RelayOnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RelayOnComponent_div_1_Template, 9, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.relayOn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWxheS1vbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 7755:
/*!**********************************************************************************!*\
  !*** ./src/app/apps/about/About-Components/top-content/top-content.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopContentComponent": () => (/* binding */ TopContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TopContentComponent {
    constructor() {
        this.imagePath = '../assets/images/innerpage/about4.jpg';
    }
    ngOnInit() {
    }
}
TopContentComponent.ɵfac = function TopContentComponent_Factory(t) { return new (t || TopContentComponent)(); };
TopContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopContentComponent, selectors: [["app-top-content"]], decls: 9, vars: 1, consts: [[1, "row", "wrap-feature-22", 2, "background-color", "#EEEEEE"], ["data-aos", "flip-up", "data-aos-duration", "1200", 1, "col-lg-6"], ["alt", "wrapkit", 1, "rounded", "img-responsive", 2, "width", "65%", "margin-left", "20%", "padding", "2%", 3, "src"], [1, "col-lg-6", "no-trans"], [1, "text-box", 2, "margin-top", "15%", "margin-right", "20%"], [1, "font-light", 2, "position", "relative"], [2, "margin-top", "6%"]], template: function TopContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Who Are We? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We are a team of people passionate about technology and design. We specialize in creating websites that not only look good, but also meet your business goals. We focus on fast, effective and accessible solutions for entrepreneurs and companies seeking to stand out in the digital world. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3AtY29udGVudC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2063:
/*!***********************************************!*\
  !*** ./src/app/apps/about/about.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/blog-service.service */ 9552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About-Components/relay-on/relay-on.component */ 5970);
/* harmony import */ var _About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About-Components/top-content/top-content.component */ 7755);





const _c0 = function () { return ["active"]; };
class AboutComponent {
    constructor(service) {
        this.service = service;
        this.service.showEdit = false;
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceblogService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 28, vars: 2, consts: [[1, "banner-innerpage", 2, "background-image", "url(assets/images/landingpage/banner-bg2.jpg)"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title"], [1, "spacer", "feature22"], [1, "bg-light", "spacer", "feature1"], [1, "col-md-7", "text-center", "no-trans"], [1, "subtitle"], [1, "spacer"], [1, "row", "justify-content-center", "m-b-30"], [1, "col-md-7", "text-center", "no-trans", 3, "routerLinkActive"], ["data-toggle", "collapse", "routerLink", "/contact", 1, "btn", "btn-info-gradiant", "btn-md", "btn-arrow", "m-t-20"], [1, "ti-arrow-right"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "ABOUT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-top-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 1)(11, "div", 2)(12, "div", 7)(13, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Why choose us? Why us?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " We prioritize what truly matters: a digital presence that makes an impact. Every project is unique, and we craft custom solutions to fit your needs. From concept to launch and beyond, we're with you every step of the way. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-relay-on");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9)(19, "div", 1)(20, "div", 10)(21, "div", 11)(22, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " Are you happy with what we offer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "a", 12)(25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_1__.RelayOnComponent, _About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_2__.TopContentComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9188:
/*!*********************************************!*\
  !*** ./src/app/apps/apps-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsRoutingModule": () => (/* binding */ AppsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog/blog.component */ 7477);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ 2063);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ 4058);
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ 2325);
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/full/full.component */ 955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);








const routes = [
    {
        path: '',
        component: _layout_full_full_component__WEBPACK_IMPORTED_MODULE_4__.FullComponent,
        children: [
            { path: '', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent },
            { path: 'blogDetail/:id', component: _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_3__.BlogDetailComponent },
            { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent },
            { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__.ContactComponent },
        ]
    }
];
class AppsRoutingModule {
}
AppsRoutingModule.ɵfac = function AppsRoutingModule_Factory(t) { return new (t || AppsRoutingModule)(); };
AppsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppsRoutingModule });
AppsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 8229:
/*!****************************************!*\
  !*** ./src/app/apps/apps.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsComponent": () => (/* binding */ AppsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AppsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AppsComponent.ɵfac = function AppsComponent_Factory(t) { return new (t || AppsComponent)(); };
AppsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppsComponent, selectors: [["app-apps"]], decls: 2, vars: 0, template: function AppsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "apps works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9269:
/*!*************************************!*\
  !*** ./src/app/apps/apps.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppsModule": () => (/* binding */ AppsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps-routing.module */ 9188);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps.component */ 8229);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog/blog.component */ 7477);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ 2063);
/* harmony import */ var _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blog/blog-detail/blog-detail.component */ 2325);
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog/blog-service.service */ 9552);
/* harmony import */ var _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/About-Components/relay-on/relay-on.component */ 5970);
/* harmony import */ var _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/About-Components/top-content/top-content.component */ 7755);
/* harmony import */ var _layout_full_full_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/full/full.component */ 955);
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/banner/banner.component */ 9964);
/* harmony import */ var _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/banner-navigation/banner-navigation.component */ 3757);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/footer/footer.component */ 9292);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ 4058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);


















class AppsModule {
}
AppsModule.ɵfac = function AppsModule_Factory(t) { return new (t || AppsModule)(); };
AppsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppsModule });
AppsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_5__.ServiceblogService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppsModule, { declarations: [_apps_component__WEBPACK_IMPORTED_MODULE_1__.AppsComponent,
        _blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent,
        _about_about_component__WEBPACK_IMPORTED_MODULE_3__.AboutComponent,
        _blog_blog_detail_blog_detail_component__WEBPACK_IMPORTED_MODULE_4__.BlogDetailComponent,
        _about_About_Components_relay_on_relay_on_component__WEBPACK_IMPORTED_MODULE_6__.RelayOnComponent,
        _about_About_Components_top_content_top_content_component__WEBPACK_IMPORTED_MODULE_7__.TopContentComponent,
        _layout_full_full_component__WEBPACK_IMPORTED_MODULE_8__.FullComponent,
        _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__.BannerComponent,
        // BannerContentComponent,
        _shared_banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_10__.BannerNavigationComponent,
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__.FooterComponent,
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__.ContactComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _apps_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppsRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule] }); })();


/***/ }),

/***/ 8469:
/*!****************************************!*\
  !*** ./src/app/apps/blog/blog-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blogs": () => (/* binding */ blogs)
/* harmony export */ });
const blogs = [
    {
        id: 1,
        image: 'assets/images/blog/101.jpg',
        heading: 'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
        subHeading: 'Labore irure irure laborum quis tempor aliqua. Dude',
        blogDate: 'Feb 19, 2020',
        blogDetail: 'Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.',
    },
    {
        id: 2,
        image: 'assets/images/blog/202.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 3,
        image: 'assets/images/blog/303.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
    {
        id: 4,
        image: 'assets/images/blog/404.jpg',
        heading: 'Magna nostrud incididunt cupidatat cillum incididunt et nisi in ut minim reprehenderit.',
        subHeading: 'Labore irure irure laborum quis tempor aliqua. Dude',
        blogDate: 'Feb 19, 2020',
        blogDetail: 'Est ipsum sint officia quis nulla nisi cupidatat aliquip nisi laboris eiusmod eiusmod aliquip do. Commodo elit excepteur occaecat irure Lorem sit nulla nulla sint duis incididunt. Nostrud ut do mollit et amet velit aute excepteur et culpa culpa velit. Cillum veniam officia anim cupidatat.',
    },
    {
        id: 5,
        image: 'assets/images/blog/505.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 6,
        image: 'assets/images/blog/707.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
    {
        id: 7,
        image: 'assets/images/blog/808.jpg',
        heading: 'Dolore pariatur amet ullamco aliquip mollit aliqua qui.',
        subHeading: 'Eiusmod ipsum do dolore fugiat consequat quis non qui velit consectetur velit.',
        blogDate: 'Feb 17, 2020',
        blogDetail: 'Tempor sint cupidatat cillum do ut. Ipsum exercitation est ex id. Sunt ut labore ad nulla.',
    },
    {
        id: 8,
        image: 'assets/images/blog/909.jpg',
        heading: 'Velit esse dolor dolor qui cillum velit in quis exercitation occaecat.',
        subHeading: 'Adipisicing sit minim occaecat nulla proident exercitation do laboris.',
        blogDate: 'Feb 15, 2020',
        blogDetail: 'Laboris culpa ea est et aliqua amet ullamco Lorem non enim laborum incididunt ex Lorem. Minim sint cupidatat magna esse labore id. Do qui incididunt consectetur nulla aliquip consequat nostrud incididunt occaecat ad. Excepteur nulla adipisicing enim ea occaecat fugiat dolore sunt est et. Eu veniam nostrud sit aute consectetur dolore ipsum fugiat anim duis.',
    },
];


/***/ }),

/***/ 2325:
/*!****************************************************************!*\
  !*** ./src/app/apps/blog/blog-detail/blog-detail.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogDetailComponent": () => (/* binding */ BlogDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog-service.service */ 9552);



class BlogDetailComponent {
    constructor(activatedRouter, service, router) {
        this.service = service;
        this.router = router;
        this.blogDetail = null;
        this.id = activatedRouter.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.blogDetail = this.service.Blogs.filter(x => x.id === +this.id)[0];
    }
    loginClick() {
        this.router.navigate([('/login')]);
    }
    newPost() {
        this.service.showEdit = false;
        this.router.navigate([('/post')]);
    }
    editPost() {
        this.service.showEdit = false;
        this.router.navigate([('/editPost'), this.blogDetail?.id]);
    }
}
BlogDetailComponent.ɵfac = function BlogDetailComponent_Factory(t) { return new (t || BlogDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceblogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
BlogDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogDetailComponent, selectors: [["app-blog-detail"]], decls: 32, vars: 5, consts: [[1, "banner-innerpage", 2, "background-image", "url(assets/images/landingpage/banner-bg2.jpg)"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center"], [1, "title"], [1, "subtitle", "op-5"], [1, "col-md-8", "no-trans"], [1, "mini-spacer"], ["alt", "wrapkit", 1, "img-fluid", 3, "src"], [1, "d-flex", "align-items-center", "text-uppercase", "m-t-40", "font-13", "font-medium"], ["routerLink", "", 1, "link"], [1, "ml-auto"], [1, "title", "font-light"], [1, "m-t-30", "m-b-30"], [1, "m-t-30"], ["type", "button", 1, "btn", "bg-facebook", "btn-rounded", "mr-3"], [1, "fa", "fa-facebook"], ["type", "button", 1, "btn", "bg-twitter", "btn-rounded"], [1, "fa", "fa-twitter"]], template: function BlogDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "BLOG DETAIL PAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " We are Small Team of Creative People working together ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "div", 2)(10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9)(14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "John Deo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11)(17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14)(26, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Facebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Twitter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.blogDetail == null ? null : ctx.blogDetail.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.blogDetail == null ? null : ctx.blogDetail.blogDate, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.heading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.subHeading, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.blogDetail == null ? null : ctx.blogDetail.blogDetail, " ");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 9552:
/*!***************************************************!*\
  !*** ./src/app/apps/blog/blog-service.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServiceblogService": () => (/* binding */ ServiceblogService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var _blog_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-data */ 8469);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ServiceblogService {
    constructor(http) {
        this.http = http;
        this.Blogs = [];
        this.loginStatusService = false;
        this.detailId = -1;
        this.showEdit = false;
    }
    getBlog() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_blog_data__WEBPACK_IMPORTED_MODULE_0__.blogs);
    }
    addPost(bl) {
        this.Blogs.splice(0, 0, bl);
    }
    deletePost(id) {
        this.Blogs = this.Blogs.filter(b => b.id !== id);
    }
}
ServiceblogService.ɵfac = function ServiceblogService_Factory(t) { return new (t || ServiceblogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ServiceblogService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ServiceblogService, factory: ServiceblogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7477:
/*!*********************************************!*\
  !*** ./src/app/apps/blog/blog.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _blog_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blog-service.service */ 9552);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




const _c0 = function () { return ["active"]; };
class BlogComponent {
    constructor(service, router, http) {
        this.service = service;
        this.router = router;
        this.http = http;
        this.blogsDetail = [];
        this.service.showEdit = false;
    }
    ngOnInit() {
        if (this.service.Blogs.length === 0)
            this.service.getBlog().subscribe((d) => (this.service.Blogs = d));
    }
    loginClick() {
        this.router.navigate(['/login']);
    }
    newPost() {
        this.router.navigate(['/post']);
    }
    viewDetail(id) {
        this.service.detailId = id;
        if (this.service.loginStatusService)
            this.service.showEdit = true;
        this.router.navigate(['/blogDetail', id]);
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_blog_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceblogService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 80, vars: 2, consts: [[1, "static-slider-head", 2, "background-image", "url(assets/images/landingpage/banner-bg2.jpg)"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "align-self-center", "text-center", "no-trans"], [1, "title"], [1, "subtitle", "op-5"], [1, "who-we-are", "mt-5"], [1, "overlay", 2, "background-image", "url('assets/images/landingpage/about9.jpg')", "background-size", "cover", "background-position", "center"], [2, "color", "white", "font-size", "200%"], [2, "color", "white"], ["routerLink", "/about", 1, "btn", "btn-light"], [1, "demostrar"], [1, "flex", "justify-content-center", "mt-5"], [1, "flip"], [1, "front", 2, "background-image", "url(assets/images/landingpage/about33.jpg)"], [1, "blanco2"], [1, "back"], [2, "color", "white", "font-size", "150%"], [1, "front", 2, "background-image", "url(assets/images/landingpage/about1.jpg)"], [1, "blanco"], [1, "front", 2, "background-image", "url(assets/images/landingpage/about2.jpg)"], [1, "grid", "justify-content-center", "grid-template-columns-1", "mt-5"], [1, "container2", "line1", "justify-content-center"], [1, "content-wrapper"], [1, "text-white"], [1, "container2", "line2", "justify-content-center"], [1, "container2", "line3", "justify-content-center"], [1, "container2", "line4", "justify-content-center"], [1, "spacer"], [1, "row", "justify-content-center", "m-b-30"], [1, "col-md-7", "text-center", "no-trans", 3, "routerLinkActive"], ["data-toggle", "collapse", "routerLink", "/contact", 1, "btn", "btn-info-gradiant", "btn-md", "btn-arrow", "m-t-20"], [1, "ti-arrow-right"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "AGUARA GUAZU");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Web Designers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " We transform your digital presence with web pages that highlight your business. Specialists in elegant, modern and effective presentation sites so that your clients find you and get to know the best of you. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 6)(11, "div", 7)(12, "div", 1)(13, "h2", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ABOUT US?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Discover the passionate team behind our exceptional digital solutions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "More Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "section", 12)(22, "div", 13)(23, "div", 14)(24, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Custom Web Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16)(27, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\"We transform your ideas into web pages that reflect the essence of your brand.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13)(30, "div", 18)(31, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Mobile Optimization");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 16)(34, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\"Every site we create is 100% responsive, ensuring a seamless experience on any device.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 13)(37, "div", 20)(38, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Maintenance and Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 16)(41, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "\"We accompany you after launch with updates and continuous technical support.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "This is how we work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "section", 21)(46, "div", 22)(47, "div", 23)(48, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Exploration and Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "We meet with you to understand your needs and define objectives.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 25)(53, "div", 23)(54, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Prototype and Design");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "We present you with an initial design to receive your feedback and ensure we are aligned.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 26)(59, "div", 23)(60, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Development and Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "We code and fine-tune your site until you're 100% satisfied.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 27)(65, "div", 23)(66, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Launch and Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "We bring your site online and offer ongoing support to keep it up to date.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 28)(71, "div", 1)(72, "div", 29)(73, "div", 30)(74, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " Are you happy with what we offer? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "a", 31)(77, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Contact Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  font-weight: normal;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n  color: #555;\r\n  background: #222;\r\n  text-align: center;\r\n  font-family: 'Roboto Mono';\r\n  padding: 1em;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-size: 2.2em;\r\n}\r\n\r\n\r\n\r\n.flip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    >.front,\r\n    >.back {\r\n        display: block;\r\n        transition-timing-function: cubic-bezier(.175, .885, .32, 1.275);\r\n        transition-duration: .5s;\r\n        transition-property: transform, opacity;\r\n    }\r\n    >.front {\r\n        transform: rotateY(0deg);\r\n    }\r\n    >.back {\r\n        position: absolute;\r\n        opacity: 0;\r\n        top: 0px;\r\n        left: 0px;\r\n        width: 100%;\r\n        height: 100%;\r\n        transform: rotateY(-180deg);\r\n    }\r\n    &:hover {\r\n        >.front {\r\n            transform: rotateY(180deg);\r\n        }\r\n        >.back {\r\n            opacity: 1;\r\n            transform: rotateY(0deg);\r\n        }\r\n    }\r\n    &.flip-vertical {\r\n        >.back {\r\n            transform: rotateX(-180deg);\r\n        }\r\n        &:hover {\r\n            >.front {\r\n                transform: rotateX(180deg);\r\n            }\r\n            >.back {\r\n                transform: rotateX(0deg);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n.flip[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    margin-right: 2px;\r\n    margin-bottom: 1em;\r\n    width: 400px;\r\n    >.front,\r\n    >.back {\r\n      display: block;\r\n      color: white;\r\n      width: inherit;\r\n      background-size: cover!important;\r\n      background-position: center!important;\r\n      height: 220px;\r\n      padding: 1em 2em;\r\n      background: #313131;\r\n      border-radius: 10px;\r\n      p {\r\n        font-size: 0.9125rem;\r\n        line-height: 160%;\r\n        color: #999;\r\n      }\r\n    }\r\n}\r\n\r\n.text-shadow[_ngcontent-%COMP%] {\r\ntext-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04), 3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04), 0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04), 7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04), 9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04), 11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04), 13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04), 0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04), 17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04), 19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);\r\n}\r\n\r\n.blanco[_ngcontent-%COMP%]{\r\n    text-shadow: whitesmoke;\r\n    color: white;\r\n    margin-left: 40%;\r\n    margin-top: 1%;\r\n    font-size: 200%;   \r\n}\r\n\r\n.blanco2[_ngcontent-%COMP%]{\r\n    text-shadow: whitesmoke;\r\n    color: white;\r\n    margin-left: 2%;\r\n    margin-top: 35%;\r\n    font-size: 200%;   \r\n}\r\n\r\nsection[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center; \r\n    align-items: center; \r\n    flex-wrap: wrap; \r\n    gap: 20px; \r\n}\r\n\r\n.demostrar[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top: 5%;\r\n}\r\n\r\n.who-we-are[_ngcontent-%COMP%] {\r\n    padding: 20px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    color: white;\r\n  }\r\n\r\n.who-we-are[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\r\n    background: #EEEEEE;\r\n    \r\n    padding: 40px;\r\n    border-radius: 10px;\r\n  }\r\n\r\n.who-we-are[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n    text-align: center;\r\n  }\r\n\r\n.who-we-are[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    font-size: 2.5em;\r\n    margin-bottom: 15px;\r\n  }\r\n\r\n.who-we-are[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    font-size: 1.2em;\r\n    margin-bottom: 25px;\r\n  }\r\n\r\n.btn-light[_ngcontent-%COMP%] {\r\n    padding: 12px 24px;\r\n    background-color: white;\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    border-radius: 5px;\r\n    font-size: 1em;\r\n  }\r\n\r\n.btn-light[_ngcontent-%COMP%]:hover {\r\n    background-color: #f1f1f1;\r\n  }\r\n\r\n.container2[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-inline-size: 1300px;\r\n    \r\n    margin: 0 auto;\r\n    display: flex;\r\n    padding-left: 15%;\r\n    padding-right: 15%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n  }\r\n\r\n.line1[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to left, #2c3e50, #000000);\r\n  }\r\n\r\n.line2[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to right, #2b5876, #4e4376);\r\n  }\r\n\r\n.line3[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to right, #1a2980, #26d0ce);\r\n  }\r\n\r\n.line4[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to left, #0f2027, #2c5364);\r\n  }\r\n\r\n.content-wrapper[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center; \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrRUFBa0U7O0FBRWxFO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVzs7QUFDWDtJQUNJLGtCQUFrQjtJQUNsQjs7UUFFSSxjQUFjO1FBQ2QsZ0VBQWdFO1FBQ2hFLHdCQUF3QjtRQUN4Qix1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixRQUFRO1FBQ1IsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSTtZQUNJLDBCQUEwQjtRQUM5QjtRQUNBO1lBQ0ksVUFBVTtZQUNWLHdCQUF3QjtRQUM1QjtJQUNKO0lBQ0E7UUFDSTtZQUNJLDJCQUEyQjtRQUMvQjtRQUNBO1lBQ0k7Z0JBQ0ksMEJBQTBCO1lBQzlCO1lBQ0E7Z0JBQ0ksd0JBQXdCO1lBQzVCO1FBQ0o7SUFDSjtBQUNKOztBQUVBLGNBQWM7O0FBQ2Q7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaOztNQUVFLGNBQWM7TUFDZCxZQUFZO01BQ1osY0FBYztNQUNkLGdDQUFnQztNQUNoQyxxQ0FBcUM7TUFDckMsYUFBYTtNQUNiLGdCQUFnQjtNQUNoQixtQkFBbUI7TUFDbkIsbUJBQW1CO01BQ25CO1FBQ0Usb0JBQW9CO1FBQ3BCLGlCQUFpQjtRQUNqQixXQUFXO01BQ2I7SUFDRjtBQUNKOztBQUVBO0FBQ0EsdW9CQUF1b0I7QUFDdm9COztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUIsRUFBRSwyQkFBMkI7SUFDcEQsbUJBQW1CLEVBQUUsMkNBQTJDO0lBQ2hFLGVBQWUsRUFBRSwyREFBMkQ7SUFDNUUsU0FBUyxFQUFFLCtCQUErQjtBQUM5Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7RUFDZDs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixzRUFBc0U7SUFDdEUsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsdUJBQXVCOztJQUV2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7QUFFQTtJQUNFLHVEQUF1RDtFQUN6RDs7QUFFQTtJQUNFLHVEQUF1RDtFQUN6RDs7QUFFQTtJQUNFLHNEQUFzRDtFQUN4RDs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBRSxvQkFBb0I7RUFDMUMiLCJmaWxlIjoiYmxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rTW9ubycpO1xyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBjb2xvcjogIzU1NTtcclxuICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcclxuICBwYWRkaW5nOiAxZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDIuMmVtO1xyXG59XHJcblxyXG4vKiAvL2Jhc2UgKi9cclxuLmZsaXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgPi5mcm9udCxcclxuICAgID4uYmFjayB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMTc1LCAuODg1LCAuMzIsIDEuMjc1KTtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5O1xyXG4gICAgfVxyXG4gICAgPi5mcm9udCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgPi5iYWNrIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgtMTgwZGVnKTtcclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgID4uZnJvbnQge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgPi5iYWNrIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICYuZmxpcC12ZXJ0aWNhbCB7XHJcbiAgICAgICAgPi5iYWNrIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKC0xODBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgPi5mcm9udCB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMTgwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+LmJhY2sge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiAvLyBjdXN0b20gKi9cclxuLmZsaXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgID4uZnJvbnQsXHJcbiAgICA+LmJhY2sge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMTMxMzE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45MTI1cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNjAlO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0LXNoYWRvdyB7XHJcbnRleHQtc2hhZG93OiAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAuMTI1cmVtIDAuMTI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNCksIDZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgN3B4IDdweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDlweCA5cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMC4zMTI1cmVtIDAuMzEyNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxMXB4IDExcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMTJweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDEzcHggMTNweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxNHB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMC42MjVyZW0gMC42MjVyZW0gcmdiYSgwLCAwLCAwLCAwLjA0KSwgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDE3cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAxOHB4IDE4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMTlweCAxOXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDEuMjVyZW0gMS4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcblxyXG4uYmxhbmNve1xyXG4gICAgdGV4dC1zaGFkb3c6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBmb250LXNpemU6IDIwMCU7ICAgXHJcbn1cclxuXHJcbi5ibGFuY28ye1xyXG4gICAgdGV4dC1zaGFkb3c6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tdG9wOiAzNSU7XHJcbiAgICBmb250LXNpemU6IDIwMCU7ICAgXHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmEgaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmEgdmVydGljYWxtZW50ZSAoc2kgZXMgbmVjZXNhcmlvKSAqL1xyXG4gICAgZmxleC13cmFwOiB3cmFwOyAvKiBQZXJtaXRlIHF1ZSBsYXMgdGFyamV0YXMgc2UgYWp1c3RlbiBlbiBtw7psdGlwbGVzIGZpbGFzICovXHJcbiAgICBnYXA6IDIwcHg7IC8qIEVzcGFjaW8gZW50cmUgbGFzIHRhcmpldGFzICovXHJcbn1cclxuXHJcbi5kZW1vc3RyYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG5cclxuLndoby13ZS1hcmUge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC53aG8td2UtYXJlIC5vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6ICNFRUVFRUU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvbGFuZGluZ3BhZ2UvYmFubmVyLWJnLmpwZycpOyAqL1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC53aG8td2UtYXJlIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAud2hvLXdlLWFyZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLndoby13ZS1hcmUgcCB7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1saWdodCB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tbGlnaHQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWlubGluZS1zaXplOiAxMzAwcHg7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctbGVmdDogMTUlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUxe1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMyYzNlNTAsICMwMDAwMDApO1xyXG4gIH1cclxuXHJcbiAgLmxpbmUye1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmI1ODc2LCAjNGU0Mzc2KTtcclxuICB9XHJcblxyXG4gIC5saW5lM3tcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzFhMjk4MCwgIzI2ZDBjZSk7XHJcbiAgfVxyXG5cclxuICAubGluZTR7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzBmMjAyNywgIzJjNTM2NCk7XHJcbiAgfVxyXG5cclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgZWwgdGV4dG8gKi9cclxuICB9Il19 */"] });


/***/ }),

/***/ 4058:
/*!***************************************************!*\
  !*** ./src/app/apps/contact/contact.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactComponent": () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _blog_blog_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blog/blog-service.service */ 9552);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);



class ContactComponent {
    constructor(service) {
        this.service = service;
        this.name = '';
        this.email = '';
        this.message = '';
        this.service.showEdit = false;
    }
    onSubmit() {
        if (this.name && this.email && this.message) {
            console.log('Name:', this.name);
            console.log('Email:', this.email);
            console.log('Message:', this.message);
            // Aquí podrías agregar la lógica para enviar los datos a un backend o servicio
        }
        else {
            alert('Please fill in all fields');
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_blog_blog_service_service__WEBPACK_IMPORTED_MODULE_0__.ServiceblogService)); };
ContactComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 27, vars: 0, consts: [[1, "banner-innerpage", 2, "background-image", "url(assets/images/landingpage/banner-bg2.jpg)", "background-size", "cover", "background-position", "center", "padding-left", "0", "padding-right", "0"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-9", "col-md-6", "no-trans", "align-self-center", "text-center"], [1, "title"], [1, "contact-form-container", 2, "margin-top", "5%"], [1, "contact-form"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "placeholder", "Your name", "required", ""], ["for", "email"], ["type", "email", "id", "email", "name", "email", "placeholder", "Your email", "required", ""], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", "placeholder", "email subject", "required", ""], ["for", "message"], ["id", "message", "name", "message", "rows", "5", "placeholder", "Write your message", "required", ""], ["type", "submit"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "CONTACT US");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "form", 6)(8, "div", 7)(9, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7)(13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7)(17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Email subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7)(21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "textarea", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7)(25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], styles: [".columnasdefi[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    gap: 20px; \r\n  }\r\n  \r\n  .columnasdefi[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    flex: 1; \r\n  }\r\n  \r\n  .contact-form-container[_ngcontent-%COMP%] {\r\n    max-width: 600px;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 8px;\r\n    background-color: #f9f9f9;\r\n  }\r\n  \r\n  .contact-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n    display: block;\r\n    font-weight: bold;\r\n    margin-bottom: 5px;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    background-color: #007bff;\r\n    color: white;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .form-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\r\n    background-color: #0056b3;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWEsRUFBRSxtQkFBbUI7SUFDbEMsU0FBUyxFQUFFLDJCQUEyQjtFQUN4Qzs7RUFFQTtJQUNFLE9BQU8sRUFBRSxnREFBZ0Q7RUFDM0Q7O0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImNvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2x1bW5hc2RlZmkge1xyXG4gICAgZGlzcGxheTogZmxleDsgLyogQWN0aXZhIEZsZXhib3ggKi9cclxuICAgIGdhcDogMjBweDsgLyogRXNwYWNpbyBlbnRyZSBjb2x1bW5hcyAqL1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uYXNkZWZpID4gZGl2IHtcclxuICAgIGZsZXg6IDE7IC8qIEhhY2UgcXVlIGNhZGEgY29sdW1uYSB0b21lIGVsIG1pc21vIGVzcGFjaW8gKi9cclxuICB9XHJcblxyXG5cclxuICAuY29udGFjdC1mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdC1mb3JtIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIGlucHV0LFxyXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWdyb3VwIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ 955:
/*!****************************************************!*\
  !*** ./src/app/apps/layout/full/full.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/banner/banner.component */ 9964);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 9292);




class FullComponent {
    constructor() { }
    ngOnInit() {
    }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full"]], decls: 10, vars: 0, consts: [["id", "main-wrapper"], [1, "page-wrapper"], [1, "container-fluid"], [1, "blog-home2"], ["href", "#top", 1, "bt-top", "btn", "btn-circle", "btn-lg", "btn-info"], [1, "ti-arrow-up"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1)(3, "div", 2)(4, "div", 3)(5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmdWxsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3757:
/*!******************************************************************************!*\
  !*** ./src/app/apps/shared/banner-navigation/banner-navigation.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerNavigationComponent": () => (/* binding */ BannerNavigationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


const _c0 = function () { return ["active"]; };
class BannerNavigationComponent {
    constructor() {
        this.logoutStatus = false;
    }
    ngOnInit() {
    }
}
BannerNavigationComponent.ɵfac = function BannerNavigationComponent_Factory(t) { return new (t || BannerNavigationComponent)(); };
BannerNavigationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerNavigationComponent, selectors: [["app-banner-navigation"]], decls: 11, vars: 6, consts: [["id", "h6-info", 1, "collapse", "navbar-collapse", "hover-dropdown", "font-14", "ml-auto"], [1, "navbar-nav", "ml-auto", "align-items-center"], [1, "nav-item", 3, "routerLinkActive"], ["routerLink", "/", 1, "nav-link"], ["routerLink", "/about", 1, "nav-link"], [1, "nav-item", "ml-2", 3, "routerLinkActive"], ["routerLink", "/contact", 1, "btn", "btn-info-gradiant", "font-14"]], template: function BannerNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ul", 1)(2, "li", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Home Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " About Us ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 5)(9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".active[_ngcontent-%COMP%] {\r\n    color: yellow;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2YiLCJmaWxlIjoiYmFubmVyLW5hdmlnYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9Il19 */"] });


/***/ }),

/***/ 9964:
/*!********************************************************!*\
  !*** ./src/app/apps/shared/banner/banner.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../banner-navigation/banner-navigation.component */ 3757);




class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 9, vars: 0, consts: [["id", "top", 1, "topbar"], [1, "header6"], [1, "container", "po-relative"], [1, "navbar", "navbar-expand-lg", "h6-nav-bar"], ["routerLink", "", 1, "navbar-brand"], ["src", "assets/images/logos/yes.png", "alt", "wrapkit"], ["type", "button", "data-toggle", "collapse", "data-target", "#h6-info", "aria-controls", "h6-info", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "ti-menu"], [1, "ml-auto"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-banner-navigation", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavbar, _banner_navigation_banner_navigation_component__WEBPACK_IMPORTED_MODULE_0__.BannerNavigationComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9292:
/*!********************************************************!*\
  !*** ./src/app/apps/shared/footer/footer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 0, consts: [[1, "footer4", "b-t", "spacer"], [1, "container", "text-center"], [1, "round-social", "light"], ["routerLink", "#", 1, "link"], [1, "fa", "fa-whatsapp"], ["href", "https://www.instagram.com/aguara.guazu.py?igsh=MWU2Y2kxamxoNnJyYQ==", "target", "_blank", "rel", "noopener noreferrer"], [1, "fa", "fa-instagram"], ["href", "https://wa.me/5211234567890", "target", "_blank", 1, "whatsapp-float"], ["viewBox", "0 0 256 259", "width", "60", "height", "60", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid"], ["d", "m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z", "fill", "#00E676"], ["d", "M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z", "fill", "#FFF"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9)(10, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".whatsapp-float[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    width: 5%;\r\n    height: 10%;\r\n    bottom: 20px;\r\n    right: 20px;\r\n    background-color: #25d366;\r\n    color: #fff;\r\n    border-radius: 50px;\r\n    text-align: center;\r\n    font-size: 30px;\r\n    box-shadow: 2px 2px 3px #999;\r\n    z-index: 100;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n.whatsapp-float[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n    height: 60%;\r\n  }\r\n.whatsapp-float[_ngcontent-%COMP%]:hover {\r\n    transform: scale(1.1);\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLCtCQUErQjtBQUMvQjtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztFQUNiO0FBRUE7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCb3TDs24gZmxvdGFudGUgZGUgV2hhdHNBcHAgKi9cclxuLndoYXRzYXBwLWZsb2F0IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA1JTtcclxuICAgIGhlaWdodDogMTAlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjVkMzY2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAzcHggIzk5OTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC53aGF0c2FwcC1mbG9hdCBzdmcge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gIH1cclxuICBcclxuICAud2hhdHNhcHAtZmxvYXQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxuICBcclxuICAiXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_apps_apps_module_ts.js.map