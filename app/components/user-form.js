import Component from '@glimmer/component';
import { computed } from '@ember/object';
import { Changeset } from 'ember-changeset';

export default class UserFormComponent extends Component {
  changeset;
  model = { firstName: 'Tom', lastName: 'Cruise' };
  constructor(owner, args) {
    super(owner, args);
    this.changeset = Changeset(this.model);
  }
  @computed('changeset.isDirty')
  get isDirty() {
    return this.changeset.isDirty;
  }

  @computed('changeset.isPristine')
  get isPristine() {
    return this.changeset.isPristine;
  }

  @computed('changeset.firstName')
  get firstName() {
    return this.changeset.firstName;
  }


}
