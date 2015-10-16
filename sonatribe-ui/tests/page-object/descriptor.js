import Property from './property';

/**
 * Represents a definition of a property
 */
export default class Descriptor {
  constructor(action, options) {
    this.action = action;
    this.options = options;
  }

  propertyFor(target, key) {
    return new Property(target, key, this.options, this.action);
  }
}
