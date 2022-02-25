export function sunscreenPrices(SPFValue){
    return `//p[contains(text(),('SPF-${SPFValue}')) or contains(text(),('spf-${SPFValue}')) ]//following-sibling::p`
}

export function addSunscreenBtn(Price,SPFValue){
    return `//p[contains(text(),('SPF-${SPFValue}')) or contains(text(),('spf-${SPFValue}'))]/following-sibling::*[contains(text(),'${Price}')]/following-sibling::button`
}
export function addMoisturizersBtn(Price,type){
    return `//p[contains(text(),('${type}')) or contains(text(),('${type}'))]/following-sibling::*[contains(text(),'${Price}')]/following-sibling::button`
}
//
export function  moisturizersPrices(type){
    if(type=='Aloe'){
    return `//p[contains(text(),('Aloe')) or contains(text(),('aloe')) ]//following-sibling::p`}
    else{
        return `//p[contains(text(),('Almond')) or contains(text(),('almond')) ]//following-sibling::p`
    }
}

export let cartButton = `button[onclick="goToCart()"]`