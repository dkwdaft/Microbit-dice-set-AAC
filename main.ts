function print_currently_selected_option () {
    // Displays "D" followed by the selected dice value (e.g., "D6", "D20")
    basic.showString("D" + ("" + options[choice]))
}
bluetooth.onBluetoothConnected(function () {
    basic.showString("Connected")
})
function d8 () {
    result = randint(1, 8)
    resultSTR = "" + result
    output()
}
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("disconnected")
})
input.onButtonPressed(Button.A, function () {
    // Cycle positively through the options.
    // The % operator works similarly for wrapping around the array.
    choice = (choice + 1) % options.length
    print_currently_selected_option()
})
function d100 () {
    result = randint(1, 100)
    resultSTR = "" + result
    output()
}
function d6 () {
    result = randint(1, 6)
    resultSTR = "" + result
    output()
}
function d4 () {
    result = randint(1, 4)
    resultSTR = "" + result
    output()
}
input.onButtonPressed(Button.B, function () {
    // Cycle negatively through the options.
    // Adding options.length before % ensures a positive result for negative numbers.
    choice = (choice - 1 + options.length) % options.length
    print_currently_selected_option()
})
function output () {
    basic.showString(resultSTR)
    keyboard.sendString(resultSTR)
}
function d10 () {
    result = randint(1, 10)
    resultSTR = "" + result
    output()
}
input.onGesture(Gesture.Shake, function () {
    currentDiceValue = options[choice]
    // Get the value from the array
    if (currentDiceValue == 4) {
        d4()
    } else if (currentDiceValue == 6) {
        d6()
    } else if (currentDiceValue == 8) {
        d8()
    } else if (currentDiceValue == 10) {
        d10()
    } else if (currentDiceValue == 12) {
        d12()
    } else if (currentDiceValue == 20) {
        d20()
    } else if (currentDiceValue == 100) {
        d100()
    }
})
function d20 () {
    result = randint(1, 20)
    resultSTR = "" + result
    output()
}
function d12 () {
    result = randint(1, 12)
    resultSTR = "" + result
    output()
}
let currentDiceValue = 0
let result = 0
let choice = 0
let options: number[] = []
let resultSTR = ""
resultSTR = ""
// Initial setup when the Micro:bit starts
options = [
4,
6,
8,
10,
12,
20,
100
]
print_currently_selected_option()
keyboard.startKeyboardService()
