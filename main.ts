bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.SmallSquare)
    connected = 1
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Square)
    connected = 0
})
input.onButtonPressed(Button.A, function () {
    bluetooth.setTransmitPower(3)
    basic.showString("HIGH")
    if (connected == 0) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.SmallSquare)
    }
})
input.onButtonPressed(Button.B, function () {
    bluetooth.setTransmitPower(0.5)
    basic.showString("LOW")
    if (connected == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Square)
    }
})
let connected = 0
bluetooth.startUartService()
basic.showString("HIGH")
basic.showString("ON")
bluetooth.setTransmitPower(3)
basic.showIcon(IconNames.Square)
