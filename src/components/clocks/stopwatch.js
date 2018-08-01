import BasicClock from "./basic-clock";

export default class Stopwatch extends BasicClock {
    constructor() {
        super();
        this._limit = -1;
    }

    connectedCallback() {
        super.connectedCallback();
    }

    _pad(num) {
        return ('0' + num).slice(-2);
    }

    _update(){
        super._update();
        if(this._limit >= 0 && this._time >= this._limit){
            this.run = false;
            this.dispatchEvent(new Event("limit"));
        }
    }

    format(timecode){




        var seconds         = parseInt((timecode / 1000) % 60),
            minutes         = parseInt((timecode / (1000 * 60)));

        return this._pad(minutes) + ":" + this._pad(seconds);
    }


    get to(){
        return this._limit;
    }

    set to(value){
        this._limit = value;
    }

    expose(){
        var exposed = super.expose();
        // exposed.inharit = "inharit";
        exposed.To = "to";
        return exposed;
    }


}
