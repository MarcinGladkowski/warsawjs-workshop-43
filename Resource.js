import Model from './Model.js'

export default class Resource extends Model {
    
    constructor() {
        super()

        this.update({
            loading: false,
            data: null, 
            error: null
        })
    }

    startLoading() {
        this.update({loading: true})
    }

    isLoading() {
        return this.get('loading');
    }

    stopLoading(data) {
        this.update({loading: false, data})
    }

    handleError(error) {
        this.set('error', error);
        this.set('loading', false);
    }

    getData() {
        return this.get('data');
    }

    getError() {
        return this.get('error');
    }

}