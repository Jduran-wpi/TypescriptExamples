//Numeric referenced Enum
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["NotStarted"] = 0] = "NotStarted";
    AppStatus[AppStatus["InDevelopment"] = 1] = "InDevelopment";
    AppStatus[AppStatus["Deployed"] = 2] = "Deployed";
})(AppStatus || (AppStatus = {}));
;
//String referenced Enum
var AppEnvironments;
(function (AppEnvironments) {
    AppEnvironments["Dev"] = "Development";
    AppEnvironments["Test"] = "Test";
    AppEnvironments["Prod"] = "Prod";
})(AppEnvironments || (AppEnvironments = {}));
;
//Object Literal
var currentApp = {
    Status: AppStatus[0],
    Environment: AppEnvironments.Test
};
console.log(currentApp);
