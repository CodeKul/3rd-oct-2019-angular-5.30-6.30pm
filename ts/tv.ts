import { Remote } from './remote';

export class TV {

    private remote: Remote

    constructor() {
        this.remote = new Remote()
    }
}

let tv = new TV()
// tv.remote.turnOn()