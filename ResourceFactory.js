export default function ResourceFactory() {

    let loading = false;
    let data = null;
    let error = null;

    return {
        startLoading() {
            loading = true;
        },
        isLoading() {
            return loading;
        },
        stopLoading(newData) {
            data = newData
        },
        getData() {
            return data;
        },
        handleError(newError) {
            error = newError;
        },
        getError() {
            return error;
        }
    }

}
