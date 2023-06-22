const CONSTANT_URL = "http://localhost:8080/api/";

export const getBlogData = () => {
    const URL = CONSTANT_URL + 'blogs'
    const request = fetch(URL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
    return request;
}