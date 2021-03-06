export default class Model {

    set(key, value) {
        this[key] = value;
        return this;
    }
    get(key) {

        if (!this.has(key)) {
            throw new Error(`No field in model for key: ${key}`);
        }

        return this[key];
    }
    
    update(obj) {
        Object.entries(obj).forEach(([key, value]) => this.set(key, value));
    }

    has(key) {
        return (this[key] !== undefined);
    }

}
