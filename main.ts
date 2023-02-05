bluetooth.onBluetoothConnected(function on_bluetooth_connected() {
    
    basic.showIcon(IconNames.SmallSquare)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
        basic.showString(bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine)))
        basic.showString(uartData)
    }
})
bluetooth.onBluetoothDisconnected(function on_bluetooth_disconnected() {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    bluetooth.uartWriteString("Hi")
    music.playTone(262, music.beat(BeatFraction.Half))
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function on_uart_data_received() {
    basic.showIcon(IconNames.Heart)
})
let uartData = ""
let connected = 0
bluetooth.startUartService()
basic.showString("ON")
basic.showIcon(IconNames.Square)
bluetooth.advertiseIBeacon("E95D7B77251D470AA062FA1922DFA9A8", 12, 5, -56)
