export default function fetchWithServerError(url) {
    fetch(url)
    .then((response) => {
        // response.ok -> special function to check correct of response
        if (response.ok) {
            return response.json();
        } 
        throw new Error(`Error while fetching!`)
    });
}
