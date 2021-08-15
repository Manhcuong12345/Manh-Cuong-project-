const tempWeather = 80
const isRanning = false
const isWindy = false
if (tempWeather < 50 || tempWeather > 90 || isRanning || isWindy) {
    let myMessage = "Go to outsise"
    if (tempWeather < 50) {
        myMessage += `The weather is cold`
    }
    if (tempWeather > 90) {
        myMessage += "The weather is hot"
    }
    if (isWindy) {
        myMessage += "The weather is windy"
    }
    if (isRanning) {
        myMessage += "The weather is isRanning"
    }
    console.log(myMessage)
}     
////////////////////////////////////////////////////////////////////////

