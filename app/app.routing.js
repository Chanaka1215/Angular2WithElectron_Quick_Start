"use strict";
var router_1 = require("@angular/router");
var welcome_component_1 = require("./component/welcome/welcome.component");
var info_component_1 = require("./component/Info/info.component");
// add Route Configuration here
var appRoutes = [
    {
        path: '',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'info',
        component: info_component_1.InfoComponent
    },
];
exports.WebRouting = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map