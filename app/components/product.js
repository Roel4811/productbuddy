import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

export default class ProductComponent extends Component {
  @tracked isSelected = false
  @tracked selectionIds = []

  @action addSelected() {
    this.isSelected = true
    this.selectionIds.push(this.id)
  }

  @action removeSelected() {
    this.isSelected = false
    this.selectionIds.splice(this.selectionIds.indexOf(self.id), 1)
  }
}
