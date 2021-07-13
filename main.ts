enum MotorDirection {
    //% block="vorwärts"
    forward,
    //% block="rückwärts"
    backward
}
enum MotorType {
    //% block="links"
    left,
    //% block="rechts"
    right
}
namespace Calino {

	
    /*some parameters used for controlling the turn and length */
    const microSecInASecond = 1000000
    let distancePerSec = 100
    let numberOfDegreesPerSec = 200

    /**
     * Dreht einen Motor in die angegebene Richtung
     * mit einer Geschwindigkeit zwischen 0 und 100%
     */
    //% block="Drehe Motor %motor in Richtung %direction mit Geschwindigkeit %speed "
    //% duration.shadow=timePicker
    //% expandableArgumentMode="toggle"
    //% group="Parallax Futuba Servo"
    export function runMotorParallax(
        motor: MotorType,
        direction: MotorDirection,
        speed: number) {
        if (motor === MotorType.left){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C16, 1500 + speed*2);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C16, 1500 - speed*2);
            }
        }
        else if (motor = MotorType.right){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C17, 1500 - speed*2);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C17, 1500 + speed*2);
            }
        }
    }

	
    /**
	 * Stoppt die Motoren
     */
    //% block="stop"
    //% group="Parallax Futuba Servo"
    export function stopMotorParallax(): void {
        pins.analogWritePin(AnalogPin.C16, 0);
        pins.analogWritePin(AnalogPin.C17, 0);
    }

    /**
     * Dreht einen Motor in die angegebene Richtung
     * mit einer Geschwindigkeit zwischen 0 und 100%
     */
    //% block="Drehe Motor %motor in Richtung %direction mit Geschwindigkeit %speed "
    //% duration.shadow=timePicker
    //% expandableArgumentMode="toggle"
    //% group="EZRobot Servo"
    export function runMotorEZRobot(
        motor: MotorType,
        direction: MotorDirection,
        speed: number) {
        if (motor === MotorType.left){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C16, 1345 + speed*4);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C16, 1345 - speed*4);
            }
        }
        else if (motor = MotorType.right){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C17, 1345 - speed*4);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C17, 1345 + speed*4);
            }
        }
    }

	
    /**
	 * Stoppt die Motoren
     */
    //% block="stop"
    //% group="EZRobot Servo"
    export function stopMotorEZRobot(): void {
        pins.analogWritePin(AnalogPin.C16, 0);
        pins.analogWritePin(AnalogPin.C17, 0);
    }
    
}
