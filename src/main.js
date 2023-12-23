// Once doc is ready
MyDom.ready( async () => {

    // Get the login details
    var loginDetails = await MyAuth.onGetLoginDetails();
    var isLoggedIn = loginDetails?.IsLoggedIn ?? false;
    var actionText = (loginDetails.IsLoggedIn) ? "Hi, " + loginDetails.FirstName : "Log in";
    var authAction = (loginDetails.IsLoggedIn) ? "logout" : "login";
    MyDom.setContent("#loginAction", { "innerHTML": actionText });
    // MyDom.setContent("#authLink", { "data-auth-action": authAction });

    var action = MyUrls.getSearchParam("action") ?? "";
    if(action == "register" && !isLoggedIn){
        MyAuth.onAuthAction("login");
    }
});