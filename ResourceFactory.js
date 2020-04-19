import Resource from "./Resource.js";

export default function ResourceFactory() {

    let loading = false;

    return {
        startLoading() {
            loading = true;
        },
        isLoading() {
            return loading;
        }
    }

}
