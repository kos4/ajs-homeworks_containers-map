export default class ErrorRepository {
  constructor() {
    this.errors = new Map([[404, 'Not Found'], [403, 'Forbidden'], [500, 'Internal Server Error']]);
  }

  translate(code) {
    if (this.errors.has(code)) {
      return this.errors.get(code);
    }
    return 'Unknown error';
  }
}
