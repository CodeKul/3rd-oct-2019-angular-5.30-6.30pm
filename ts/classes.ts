class Car {

    speed: number = 10

    speedUp() {
        this.speed++
    }
}

class Bmw extends Car {

}

let cr: Car = new Car()

interface GpsListener {
    locate()
}

class Device implements GpsListener {

    locate() {

    }
}

let dv = new Device()
dv.locate()
