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
    export function runMotor(
        motor: MotorType,
        direction: MotorDirection,
        speed: number) {
        if (motor === MotorType.left){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C16, 1500 + speed*10);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C16, 1500 - speed*10);
            }
        }
        else if (motor = MotorType.right){
            if (direction === MotorDirection.forward){
                pins.servoSetPulse(AnalogPin.C17, 1500 - speed*10);
            }
            else if (direction === MotorDirection.backward){
                pins.servoSetPulse(AnalogPin.C17, 1500 + speed*10);
            }
        }
    }

	
    /**
	 * Stoppt die Motoren
     */
    //% block="stop"
    //% group="Parallax Futuba Servo"
    export function stopMotor(): void {
        pins.analogWritePin(AnalogPin.C16, 1500);
        pins.analogWritePin(AnalogPin.C17, 1500);
    }
    
}
