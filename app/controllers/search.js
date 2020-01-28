import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SearchController extends Controller {

  productName

  @action
  selectProduct(selection_id, product) {
    console.log("product selected")
    console.log(selection_id, product)

    this.store.findRecord("selection", selection_id, {
      include: 'products'
    }).then(function(selection) {
      selection.products.pushObject(product)
    })
    // selection.save()

    // let selection = this.store.createRecord('selection', {
    //    product
    // })

    // selection.save()
  }
}
