import { clickOnPayWith, fillCheckoutForm, verifySuccessPage } from "../pageobjects/weatherApp/weatherApp.checkout.page";
import { selectWhatToShop } from "../pageobjects/weatherApp/weatherApp.home.page";
import { addCheapestMoisturizersToCart, addCheapestSunscreensToCart, openCart } from "../pageobjects/weatherApp/weatherApp.shopping.page";

const { Given, When, Then } = require('@wdio/cucumber-framework');

let whatToShop:string

Given(`User is on the weather app`, async function ()  {
    browser.url(`https://weathershopper.pythonanywhere.com/`)
});

When(`User reads the temperature and decides what to shop`, async () => {
    whatToShop = await selectWhatToShop()
});
When(`User adds cheapest products into the cart`, async () => {
 
    if(whatToShop == 'Sunscreens'){
        await addCheapestSunscreensToCart("30");
        await addCheapestSunscreensToCart("50")
    }
    else{

        await addCheapestMoisturizersToCart("Aloe")
        await addCheapestMoisturizersToCart("Almond")
    }
});


Then(`Checkout should be successful`, async () => {
    await openCart()
    browser.pause(20000)
    await clickOnPayWith()
    await fillCheckoutForm()
   let header = await verifySuccessPage()
   expect(header).toBeExisting()


});


