response = '...'

def on_start():
    turn_with_compass(90)
    pass    

def on_forever():
    pass

on_start()
basic.forever(on_forever)

def turn_with_compass(expected_degrees):
    start_degrees = input.compass_heading()
    end_degrees = input.compass_heading()
    #basic.show_number(start_degrees)
    #basic.show_icon(IconNames.HAPPY)
    while(True):
        if start_degrees <= 90:
            opposit = start_degrees + 180
            if end_degrees >= 270 and 360 - end_degrees + start_degrees >= expected_degrees:
                basic.show_string("L")
                break
            if end_degrees >= 0 and start_degrees - end_degrees >= expected_degrees:
                basic.show_string("L")
                break
            if end_degrees > opposit and end_degrees < 270:
                basic.show_string("L")
                break
            if end_degrees <= 180 and end_degrees - start_degrees >= expected_degrees:
                basic.show_string("R")
                break
            if end_degrees < opposit and end_degrees > 180:
                basic.show_string("R")
                break
        elif start_degrees <= 180:
            opposit = start_degrees + 180
            if start_degrees - end_degrees >= expected_degrees:
                basic.show_string("L")
                break
            if end_degrees - start_degrees >= expected_degrees:
                basic.show_string("R")
                break
        elif start_degrees <= 270:
            opposit = start_degrees - 180
            if start_degrees - end_degrees >= expected_degrees:
                basic.show_string("L")
                break
            if end_degrees - start_degrees >= expected_degrees:
                basic.show_string("R")
                break
            if end_degrees >= 0 and end_degrees <= 90 and end_degrees < opposit:
                basic.show_string("L")
                break
            if end_degrees >= 0 and end_degrees <= 90 and end_degrees > opposit:
                basic.show_string("R")
                break
        elif start_degrees <= 360:
            opposit = start_degrees - 180
            if end_degrees >= 180 and start_degrees - end_degrees >= expected_degrees:
                basic.show_string("L")
                break
            if end_degrees <= 90 and 360 - start_degrees + end_degrees >= expected_degrees:
                basic.show_string("R")
                break
            if end_degrees > opposit and end_degrees < 180:
                basic.show_string("L")
                break
            if end_degrees < opposit and end_degrees > 90:
                basic.show_string("R")
                break
        end_degrees = input.compass_heading()
        
    
def test_wifi():
    global response
    esp8266.init(SerialPin.P16, SerialPin.P15, BaudRate.BAUD_RATE115200)
    if esp8266.is_esp8266_initialized():
        basic.show_icon(IconNames.YES)
        basic.pause(200)
    else:
        basic.show_icon(IconNames.NO)
        return
    #esp8266.connect_wi_fi("Tom Luu", "Trung1997")
    esp8266.connect_wi_fi("Trung", "Trung1997")
    if esp8266.is_wifi_connected():
        basic.show_icon(IconNames.HAPPY)
        basic.pause(200)
    else:
        basic.show_icon(IconNames.SAD)
        return
    #response = esp8266.get_coffee_request(1)
    response = esp8266.pick_request()