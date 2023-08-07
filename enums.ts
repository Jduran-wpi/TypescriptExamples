//All Enum values are immutable !!!
//Numeric referenced Enum
enum AppStatus {
    NotStarted,
    InDevelopment,
    Deployed
};

//String referenced Enum
enum AppEnvironments {
    Dev = 'Development',
    Test = 'Test',
    Prod = 'Prod'
};

//Object Literal
let currentApp = {
    Status: AppStatus[0],
    Environment: AppEnvironments.Test
};

console.log(currentApp);