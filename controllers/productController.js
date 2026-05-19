//getAllProducts
//getProductById
//searchProducts

export function getAllProducts(req, res) {
    res.send('<h1>All Products</h1>');
}

export function getProductById(req, res) {
    const productId = req.params.id;
    res.send(`<h1>Product Details for ID: ${productId}</h1>`);
}
export function searchProducts(req, res) {
    const keyword = req.query.keyword;
    res.send(`<h1>Search Results for: ${keyword}</h1>`);
}
