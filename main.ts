input.onButtonPressed(Button.A, function () {
    y = changeCoordinate(y)
})
input.onButtonPressed(Button.B, function () {
    x = changeCoordinate(x)
})
function checkLongPress () {
    while (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        if (control.millis() - time >= pressTime) {
            if (input.buttonIsPressed(Button.A)) {
                y = changeCoordinate(y, 4)
            }
            if (input.buttonIsPressed(Button.B)) {
                x = changeCoordinate(x, 4)
            }
            break;
        }
    }
}
function changeCoordinate (c = 0, d = 1) {
    return (c + d) % 5
}
input.onGesture(Gesture.Shake, reset)
function reset () {
    x = randint(0, 4)
    y = randint(0, 4)
}
let x = 0
let time = 0
let y = 0
let c = 0
let pressTime = 750
soundExpression.hello.play()
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . . . .
    . . . . .
    `)
basic.pause(1000)
reset()
basic.forever(function () {
    basic.clearScreen()
    led.plotBrightness(x, y, 255)
    time = control.millis()
    checkLongPress()
})
