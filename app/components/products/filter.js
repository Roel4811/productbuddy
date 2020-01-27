import Component from '@glimmer/component';

export default class ProductsFilterComponent extends Component {
  get results() {
    let { products, query } = this.args;

    if (query) {
      products = products.filter(product => product.name.includes(query));
    }

    return products;
  }
}
