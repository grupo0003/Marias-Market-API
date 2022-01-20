const ProductRepository = require('../repository/ProductRepository')

class ProductService {
    async create(product) {
        const result = await ProductRepository.create(product);
        return result;
    }
}

module.exports = new ProductService();
