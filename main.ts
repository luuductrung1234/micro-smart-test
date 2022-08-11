let response = "..."
function on_start() {
    turn_with_compass(90)
    
}

on_start()
basic.forever(function on_forever() {
    
})
function turn_with_compass(expected_degrees: number) {
    let opposit: number;
    let start_degrees = input.compassHeading()
    let end_degrees = input.compassHeading()
    // basic.show_number(start_degrees)
    // basic.show_icon(IconNames.HAPPY)
    while (true) {
        if (start_degrees <= 90) {
            opposit = start_degrees + 180
            if (end_degrees >= 270 && 360 - end_degrees + start_degrees >= expected_degrees) {
                basic.showString("L")
                break
            }
            
            if (end_degrees >= 0 && start_degrees - end_degrees >= expected_degrees) {
                basic.showString("L")
                break
            }
            
            if (end_degrees > opposit && end_degrees < 270) {
                basic.showString("L")
                break
            }
            
            if (end_degrees <= 180 && end_degrees - start_degrees >= expected_degrees) {
                basic.showString("R")
                break
            }
            
            if (end_degrees < opposit && end_degrees > 180) {
                basic.showString("R")
                break
            }
            
        } else if (start_degrees <= 180) {
            opposit = start_degrees + 180
            if (start_degrees - end_degrees >= expected_degrees) {
                basic.showString("L")
                break
            }
            
            if (end_degrees - start_degrees >= expected_degrees) {
                basic.showString("R")
                break
            }
            
        } else if (start_degrees <= 270) {
            opposit = start_degrees - 180
            if (start_degrees - end_degrees >= expected_degrees) {
                basic.showString("L")
                break
            }
            
            if (end_degrees - start_degrees >= expected_degrees) {
                basic.showString("R")
                break
            }
            
            if (end_degrees >= 0 && end_degrees <= 90 && end_degrees < opposit) {
                basic.showString("L")
                break
            }
            
            if (end_degrees >= 0 && end_degrees <= 90 && end_degrees > opposit) {
                basic.showString("R")
                break
            }
            
        } else if (start_degrees <= 360) {
            opposit = start_degrees - 180
            if (end_degrees >= 180 && start_degrees - end_degrees >= expected_degrees) {
                basic.showString("L")
                break
            }
            
            if (end_degrees <= 90 && 360 - start_degrees + end_degrees >= expected_degrees) {
                basic.showString("R")
                break
            }
            
            if (end_degrees > opposit && end_degrees < 180) {
                basic.showString("L")
                break
            }
            
            if (end_degrees < opposit && end_degrees > 90) {
                basic.showString("R")
                break
            }
            
        }
        
        end_degrees = input.compassHeading()
    }
}

function test_wifi() {
    
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
    
    // response = esp8266.get_coffee_request(1)
    response = esp8266.pickRequest()
}

