const ProductRepository = require('../repository/ProductRepository')

class ProductRepository {
    async create(product) {
        const result = await ProductRepository.create(product);
        return result;
    }
}

module.exports = new ProductRepository();
