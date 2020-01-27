import Model, { attr, hasMany } from '@ember-data/model';

export default class ProductModel extends Model {
  @attr('string') name;
  @attr('string') type;
  @attr('string') brand;
  @attr('number') price;
  @attr('string') image;
  @hasMany('selection') selections;
}
