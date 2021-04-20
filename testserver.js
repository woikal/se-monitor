const http = require('http');
const fs = require('fs').promises;

const host = '213.202.230.45';
const port = 8000;

const requestListener = (req, res) => {
    let json = null;
    switch (req.url) {
        case '/config':
            fs.readFile(__dirname + '/data/config.json')
                .then(content => respondJson(rescontent))
                .catch(ex => respondError(res, 500, ex));
            break;
        default:
            respondJson(JSON.stringify({ error: "Resource not found" }));

    }
}

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}...`);
});


function importData() {
    console.log('extracting xml data')
    // fs.readFile(__dirname + "/data/config.json")
    //     .then(content => {json = JSON.parse(content);})
    //     .catch(json = extractData());
    return {};
}

const respondJson = (res, json) => {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(json);
}
const respondHtml = (res, html) => {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(html);
}
const respondError = (res, no = 500, info = '') => {
    console.log(info);
    res.writeHead(no);
    res.end(info);
}
