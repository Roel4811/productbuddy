import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class SelectionComponent extends Component {
  @tracked productIds = [5,2,1,8]

  @action
  addProduct() {
    this.productIds.push(2)
    console.log(this.productIds)
  }

  @action
  removeProduct(id) {
    this.productIds.splice(this.productIds.indexOf(id), 1)
    console.log(this.productIds)
  }
}
