response = '...'

def on_start():
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

def on_forever():
    basic.show_string(response)
    pass

on_start()
basic.forever(on_forever)
