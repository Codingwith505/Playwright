class LoginPage{

    constructor(page){
        this.page =page;
       // login the page using credential
        this.loginUserName =  page.locator("#userEmail");
        this.loginPassword =  page.locator("#userPassword");
        this.submitLoginButton = page.locator("#login");
        this.logOut = page.locator("text=' Sign Out '");
    }

    async GotoUrl(){
       await this.page.goto("https://rahulshettyacademy.com/client/");
    }
   async Login(userName, password){
        await this.loginUserName.fill(userName);
        await this.loginPassword.fill(password);
        await this.submitLoginButton.click();
    }
    async Logout(){
        await this.logOut.click();
    }
}
module.exports = {LoginPage};


