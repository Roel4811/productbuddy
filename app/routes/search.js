import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;
  model() {
    return RSVP.hash({
      products: this.store.findAll('product', {
        include: 'selections'
      }),
      selection: this.store.findRecord('selection', 1, {
        include: 'products'
      })
    })
  }
}
