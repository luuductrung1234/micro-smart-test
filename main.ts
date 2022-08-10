let coffee_response = "..."
function on_start() {
    
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BaudRate115200)
    if (esp8266.isESP8266Initialized()) {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.No)
        return
    }
    
    // esp8266.connect_wi_fi("Tom Luu", "Trung1997")
    esp8266.connectWiFi("Trung", "Trung1997")
    if (esp8266.isWifiConnected()) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
    } else {
        basic.showIcon(IconNames.Sad)
        return
    }
    
    coffee_response = esp8266.getCoffeeRequest(1)
}

on_start()
basic.forever(function on_forever() {
    basic.showString(coffee_response)
    
})
