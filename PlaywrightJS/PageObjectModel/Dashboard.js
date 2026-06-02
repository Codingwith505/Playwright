
class Dashboard{
    constructor(page){
        this.page =page;
       this.cardbody =  page.locator(".card-body");
    }

    async AddtoCarttheProduct (productname){
    await this.page.waitForLoadState('networkidle');
        const count = await this.cardbody.count();
        for(let i = 0; i < count; i++){
           const itemName =  await this.cardbody.nth(i).locator("b").textContent();
           if(itemName === productname){
                await this.cardbody.nth(i).locator("text=' Add To Cart'").click();
                break;
           }
        }
    }

    async GotoCart(){
        await this.page.locator("[routerlink='/dashboard/cart']").click();
    }

}

module.exports = {Dashboard};
        

        
        