export default class Model {

    set(key, value) {
        this[key] = value;
        return this;
    }
    get(key) {
        return this[key];
    }

    has(key) {
        return (this[key] !== undefined)
    }

}
