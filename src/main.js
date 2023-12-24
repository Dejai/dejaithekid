// Once doc is ready
MyDom.ready( async () => {
    // Get the login details
    var loginDetails = await MyAuth.onGetLoginDetails();
    var isLoggedIn = loginDetails?.IsLoggedIn ?? false;
    var actionText = (loginDetails.IsLoggedIn) ? "Hi, " + loginDetails.FirstName : "Log in";
    var authAction = (loginDetails.IsLoggedIn) ? "logout" : "login";
    MyDom.setContent("#loginAction", { "innerHTML": actionText });
    MyDom.setContent("#loginAction", { "data-auth-action": authAction });
});