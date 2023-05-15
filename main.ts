input.onButtonPressed(Button.A, function () {
    Sending = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    Sending = false
    basic.showIcon(IconNames.No)
})
let Sending = false
basic.showString("GSEND")
radio.setGroup(4)
Sending = false
basic.forever(function () {
    if (Sending) {
        radio.sendValue("mg", input.acceleration(Dimension.Strength))
    }
})
