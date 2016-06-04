import assert from 'assert';
import * as data from '../src/index.js';

describe('Data', () => {
  it('#make', () => {
    const numbers = data.l(3, 4, 5);
    assert.equal(data.toString(numbers), '(3, 4, 5)');
  });

  it('#reverse', () => {
    const numbers = data.l(3, 4, 5);
    assert.equal(data.toString(data.reverse(numbers)), '(5, 4, 3)');
  });

  it('#map', () => {
    const numbers = data.l(3, 4, 5);
    const numbers2 = data.map(n => n + 2, numbers);
    assert.equal(data.toString(numbers2), '(5, 6, 7)');
  });

  it('#filter', () => {
    const numbers = data.l(3, 4, 5, 8);
    const numbers2 = data.filter(n => n % 2 === 0, numbers);
    assert.equal(data.toString(numbers2), '(4, 8)');
  });

  it('#reduce', () => {
    const numbers = data.l(3, 4, 5, 8);
    assert.equal(data.length(numbers), 4);
  });

  it('#reduce', () => {
    const numbers = data.l(3, 4, 5, 8);
    const count = data.reduce((n, acc) => acc + 1, 0, numbers);
    assert.equal(count, 4);
  });

  it('#append', () => {
    const numbers = data.l(3, 4, 5, 8);
    const numbers2 = data.l(3, 2, 9);
    assert.equal(data.toString(data.append(numbers, numbers2)), '(3, 4, 5, 8, 3, 2, 9)');
  });

  it('#isEqual', () => {
    const numbers = data.l(3, 4, 5, 8);
    const numbers2 = data.l(3, 4, 5, 8);
    const numbers3 = data.l(3, 2, 9);
    assert.ok(data.isEqual(numbers, numbers2));
    assert.ok(!data.isEqual(numbers2, numbers3));
  });

  it('#isContains', () => {
    const numbers = data.l(3, 4, 5, 8);
    assert.ok(data.isContains(numbers, 3));
    assert.ok(data.isContains(numbers, 8));
    assert.ok(!data.isContains(numbers, 0));
    assert.ok(!data.isContains(numbers, 7));
  });

  it('#s', () => {
    const numbers = data.s(3, 4, 3, 5, 5);
    assert.equal(data.toString(numbers), '(4, 3, 5)');
  });

  it('#conj', () => {
    const numbers = data.s(3, 4, 3, 5, 5);
    assert.ok(!data.isContains(numbers, 0));
    const numbers2 = data.conj(numbers, 0);
    assert.ok(data.isContains(numbers2, 0));
  });

  it('#disj', () => {
    const numbers = data.s(3, 4, 3, 5, 5);
    assert.ok(data.isContains(numbers, 4));
    const numbers2 = data.disj(numbers, 4);
    assert.ok(!data.isContains(numbers2, 4));
  });
});
