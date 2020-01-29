import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about', { path: '/over' });
  this.route('search', { path: '/zoek' });
  // this.route('selections', { path: '/selecties' }, () => {
  //   this.route('selection', { path: ':selection_id' })
  // });
  this.route('save', { path: '/opgeslagen' });
  this.route('select', { path: '/selecteren' });
  this.route('product', { path: '/producten/:product_id'})
});
