import { cardNumberField, CVCField, dateField, emailField, payWithCardBtn, submitBtn, zipCodeField } from "./locators/checkout.locators";

export async function clickOnPayWith() {
    await $(payWithCardBtn).click()
    console.log("ASDFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF")
}

export async function fillCheckoutForm() {
    let frame = await $('iframe[name="stripe_checkout_app"]')
    browser.pause(5000)
    await browser.switchToFrame(frame)
    browser.setTimeout({ 'implicit': 10000 })
    let emailELe= await $(emailField)
    let cardEle = await $(cardNumberField)
    let dateEle = await $(dateField)
    let CVCEle = await $(CVCField)

    await emailELe.waitForExist()
    await emailELe.moveTo()
    await emailELe.setValue('abc@email.com')
    await cardEle.waitForExist()
    await cardEle.moveTo()
    await cardEle.setValue('5555')
    await cardEle.addValue('4444')
    await cardEle.addValue('4444')
    await cardEle.addValue('4444')
    await dateEle.waitForExist()
    await dateEle.moveTo()
    await dateEle.setValue("12")
    await dateEle.addValue("23")
    await CVCEle.waitForExist()
    await CVCEle.moveTo()
    await CVCEle.setValue("123")
    
    let zipCodeEle = await $(zipCodeField)
    await zipCodeEle.waitForClickable()
    await zipCodeEle.waitForExist()
    await zipCodeEle.moveTo()
    await zipCodeEle.setValue(2222)

    await $(submitBtn).click()
}

export async function verifySuccessPage(){
   let final= await $('div>h2')
   return final
}