export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  get location() {
    return this._location;
  }

  set location(newLocal) {
    this._location = newLocal;
  }

  valueOf() {
    return this.size;
  }

  toString() {
    return this.location;
  }
}
