import Model, { hasMany } from '@ember-data/model';

export default class SelectionModel extends Model {
  @hasMany('product') products;
}
