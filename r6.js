//16. Write a JavaScript function to parse an URL.
function parseURL(url) {
    const parsedURL = new URL(url);

    return {
        protocol: parsedURL.protocol,
        hostname: parsedURL.hostname,
        port: parsedURL.port,
        pathname: parsedURL.pathname,
        search: parsedURL.search,
        hash: parsedURL.hash,
        host: parsedURL.host
    };
}

var url = 'https://www.example.com:8080/path/to/page?query=string#hash';
var parsedURL = parseURL(url);
console.log(parsedURL);