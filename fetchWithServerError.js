export default function fetchWithServerError(url) {
    fetch(url)
    .then((response) => {
        if (response.status !== 200 || response.status !== 300) {
            throw new Error(`Invalid response status code ${response.status}`)
        }
    })
    .then((response) => {
        return response.json();
    });
}
