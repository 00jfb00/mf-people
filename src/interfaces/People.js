import { type, validate } from "../helpers/InterfaceValidators";

class People {
  constructor(properties = {}) {
    this.id = validate(type("number"), properties.id);
    this.name = validate(type("string"), properties.street);
  }
}
export default People;
