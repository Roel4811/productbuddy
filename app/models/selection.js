import Model, { attr, hasMany } from '@ember-data/model';

export default class SelectionModel extends Model {
  @attr('string') name;
  @hasMany('product') products;
}
