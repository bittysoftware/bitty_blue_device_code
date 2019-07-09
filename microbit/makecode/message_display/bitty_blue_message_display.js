bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("hello")
})
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("goodbye")
})
bluetooth.startUartService()
