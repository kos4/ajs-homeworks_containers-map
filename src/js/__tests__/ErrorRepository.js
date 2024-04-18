import ErrorRepository from '../classes/ErrorRepository';

test('return error text from code', () => {
  const error = new ErrorRepository();
  expect(error.translate(404)).toBe('Not Found');
});

test('return error default text', () => {
  const error = new ErrorRepository();
  expect(error.translate(400)).toBe('Unknown error');
});
