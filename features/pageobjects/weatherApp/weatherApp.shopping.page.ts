import {  addMoisturizersBtn, addSunscreenBtn, cartButton, moisturizersPrices, sunscreenPrices } from "./locators/shoppingPage.locators";

export async function addCheapestSunscreensToCart (SPFValue:string) {
    let prices =[]
    let pricesOfSPF50Ele = await $$(sunscreenPrices(SPFValue))
    for(let i=0;i<pricesOfSPF50Ele.length;i++){
        let priceString = await pricesOfSPF50Ele[i].getText()
        let numb = priceString.match(/(\d+)/)[0];
        prices.push(numb)
    }
    prices = prices.sort((a,b)=>a-b)
    console.log(prices)
    await $(addSunscreenBtn(prices[0],SPFValue)).click()
}


export async function addCheapestMoisturizersToCart (type:string) {
    let prices =[]
    let pricesOfMosturizerEle = await $$(moisturizersPrices(type))
    for(let i=0;i<pricesOfMosturizerEle.length;i++){
        let priceString = await pricesOfMosturizerEle[i].getText()
        let numb = priceString.match(/(\d+)/)[0];
        prices.push(numb)
    }
    prices = prices.sort((a,b)=>a-b)
    console.log(prices)
    await $(addMoisturizersBtn(prices[0],type)).click()

}

export async function openCart(){
    await $(cartButton).click()
}



