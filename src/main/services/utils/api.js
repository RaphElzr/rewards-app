import 'whatwg-fetch';

const headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
});

const generateOption = (method, headers, body) => {
    return {
        method,
        headers,
        body
    };
};

const _checkStatus = (res) => {
    if (res.ok) {
        return res;
    } else {
        throw res;
    }
};

const _fetch = (url, options) => {
    return fetch(url, options)
        .then(_checkStatus)
        .then((res) => res.json())
        .then((res) => Promise.resolve(res))
        .catch((err) => Promise.resolve(err));
};

const get = (url) => {
    const options = generateOption('GET', headers);

    return _fetch(url, options);
};

const API = {
    get
};

export default API;
