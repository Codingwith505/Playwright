const {LoginPage} =require ('./LoginPage')
const {Dashboard} = require ('./Dashboard')
const {VerifyProduct} = require ('./VerifyProduct')
const {Details} = require('./Details');
const { OrderDetails } = require('./OrderDetails');



class AllObjectPOM{

    constructor(page){
        this.page =page;
        this.loginpage = new LoginPage(this.page);
        this.dashboard = new Dashboard(this.page);
        this.verifyproduct = new VerifyProduct(this.page);
        this.details = new Details(this.page);
        this.orderDetails = new OrderDetails(this.page);
    }

    getLoginPage(){
        return this.loginpage;
    }
    GotoDashboard(){
        return this.dashboard;
    }

    goToVerifyProduct(){
        return this.verifyproduct;
    }

    fillTheDetails(){
        return this.details;
    }

    getOrderDetails(){
        return this.orderDetails;
    }

    
}

module.exports = {AllObjectPOM};










