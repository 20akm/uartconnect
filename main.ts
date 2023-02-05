bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallSquare)
    connected = 1
    while (connected == 1) {
        uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.SemiColon))
        basic.showString(uartData)
    }
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("Hi")
    music.playTone(262, music.beat(BeatFraction.Half))
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    basic.showIcon(IconNames.Heart)
})
let uartData = ""
let connected = 0
bluetooth.startUartService()
basic.showString("ON")
basic.showIcon(IconNames.Square)
bluetooth.uartWriteNumber(0)
