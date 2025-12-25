// Once doc is ready
MyDom.ready( async () => {
    // Get the login details
    var loginDetails = await MyAuth.onGetLoginDetails();
    var isLoggedIn = loginDetails?.IsLoggedIn ?? false;
    if(isLoggedIn){
        MyUrls.navigateTo("/");
    } else { 
        MyDom.showContent(".showOnRegister");
    }
});