import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class SelectionComponent extends Component {
  @tracked productIds = [5,2,1,8]

  @action
  addProduct() {
    this.productIds.addObject(7)
  }

  @action
  removeProduct(id) {
    this.productIds.removeObject(id)
  }
}
