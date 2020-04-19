export default class Model {

    constructor(value) {
        this.value = value
    }
    
    set(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }

    has() {
        return (this.value !== undefined)
    }

}
