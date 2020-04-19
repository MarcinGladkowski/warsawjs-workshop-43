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
        const keys = Object.keys(obj);
        const values = Object.values(obj);

        for(let i = 0; i < keys.length; i++) {
            this[keys[i]] = values[i]
        }
    }

    has(key) {
        return (this[key] !== undefined);
    }

}
