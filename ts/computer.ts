import { CPU } from './com-dep';
export class Computer {

    // cpuMy: CPU
    constructor(
        private cpu: CPU
    ) {
        // this.cpuMy = cpu
    }

    turnOn() {
    }
}

let cpu = new CPU() // DONT CREATE THE OBJECTS -> ANGULAR
let pc = new Computer(cpu)

let o: CPU = { ghz: 50, processing: () => 10 } // shapes are equal
cpu.ghz = 78

let ht: {} = 345346

function calProcessing(cur?: number, cpu?: number) { //optional params
    return cpu * cur
}

calProcessing(0.5, 2)
calProcessing()

function calGPU(ghz = 2) { // default params
    return ghz * ghz
}

calGPU()
calGPU(89)