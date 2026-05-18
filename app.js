import http from 'http';
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);


    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (url.pathname === '/search') {
        const keyword = url.searchParams.get('keyword');
        res.end(`<h1>Search Results for "${keyword}"</h1>`);
    } else {
        res.end('<h1>Welcome to the Home Page</h1>');
    }

});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});