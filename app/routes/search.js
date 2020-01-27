import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  @service store;
  async model() {
    return RSVP.hash({
      products: this.store.findAll('product'),
      selection: this.store.findRecord('selection', 1)
    })
  }
}
