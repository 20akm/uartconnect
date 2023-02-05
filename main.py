def on_bluetooth_connected():
    global connected, uartData
    basic.show_icon(IconNames.SMALL_SQUARE)
    connected = 1
    while connected == 1:
        uartData = bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE))
        basic.show_string(bluetooth.uart_read_until(serial.delimiters(Delimiters.NEW_LINE)))
        basic.show_string(uartData)
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    basic.show_icon(IconNames.SQUARE)
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    bluetooth.uart_write_string("Hi")
    music.play_tone(262, music.beat(BeatFraction.HALF))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_uart_data_received():
    basic.show_icon(IconNames.HEART)
bluetooth.on_uart_data_received(serial.delimiters(Delimiters.NEW_LINE),
    on_uart_data_received)

uartData = ""
connected = 0
bluetooth.start_uart_service()
basic.show_string("ON")
basic.show_icon(IconNames.SQUARE)
bluetooth.advertise_ibeacon("E95D7B77251D470AA062FA1922DFA9A8", 12, 5, -56)