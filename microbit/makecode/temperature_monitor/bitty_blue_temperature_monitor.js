bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
control.onEvent(9001, EventBusValue.MICROBIT_EVT_ANY, function () {
    lower = control.eventValue()
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("D")
})
control.onEvent(9002, EventBusValue.MICROBIT_EVT_ANY, function () {
    upper = control.eventValue()
})
let temp = 0
let upper = 0
let lower = 0
basic.showString("Monitor")
lower = 20
upper = 27
let alarm_event = 9000
let just_right = 0
let too_cold = 1
let too_hot = 2
basic.forever(function () {
    temp = input.temperature()
    basic.showNumber(temp)
    // basic.showNumber(temp)
    if (temp < lower) {
        control.raiseEvent(
        alarm_event,
        too_cold
        )
    } else {
        if (temp > upper) {
            control.raiseEvent(
            alarm_event,
            too_hot
            )
        } else {
            control.raiseEvent(
            alarm_event,
            just_right
            )
        }
    }
    basic.pause(2000)
})
