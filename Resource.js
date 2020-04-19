import Model from './Model.js'

export default class Resource extends Model {

    startLoading() {
        this.update({loading: true, data: null, errors: null})
    }

    isLoading() {
        return this.get('loading');
    }

    stopLoading(data) {
        this.update({loading: false, data: data})
    }

    getData() {
        return this.get('data');
    }

    handleError(error) {
        return this.set('error', error);
    }

    getError() {
        return this.get('error');
    }

}