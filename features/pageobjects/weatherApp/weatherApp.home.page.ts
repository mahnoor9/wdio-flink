import { buyMosturizerBtn ,buySunscreenBtn,currentTemp} from "./locators/landingPage.locators";

    /**
     * defining actions
     */
    export async function clickMosturizersBtn() {
        await $(buyMosturizerBtn).click();
    }

    export async function clickSunscreenBtn() {
        await $(buySunscreenBtn).click();
    }

    export async function getTemperature() {
        let t=await $(currentTemp).getText();
        t = t.split(/\s+/)[0]
        return Number(t)
    }

    /**
     *defining Tasks
     */
     export async function selectWhatToShop () {
         let currentTemperatre=await getTemperature()
      if(currentTemperatre < 19){
         await clickMosturizersBtn();
          return `Moisturizers`
      }
      else if(currentTemperatre > 34)
       {
           await clickSunscreenBtn()
           return `Sunscreens`
       }
    }

   
 

