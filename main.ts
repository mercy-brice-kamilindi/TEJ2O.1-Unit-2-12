/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by:Mercy
 * Created on: Oct 2025
 * This program grabs distance and turns on neopixels
*/

// variable
let distanceToObject: number = 0
let neopixelStrip: neopixel.Strip = null

// Clean
   basic.clearScreen()
   neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
   neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
   neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
   neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
   neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
   neopixelStrip.show()
   basic.showIcon(IconNames.Happy)


input.onButtonPressed(Button.A, function() {
    distanceToObject = sonar.ping(
        DigitalPin.P8,
        DigitalPin.P12,
        PingUnit.Centimeters)
        basic.showNumber(distanceToObject)
    
    // turn light on
        if (distanceToObject < 10) {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()
      }  else {
        neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
      }
})
