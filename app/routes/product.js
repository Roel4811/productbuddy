import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ProductRoute extends Route {
  @service store;
  async model(params) {
    return this.store.findRecord('product', params.product_id);
  }
}
