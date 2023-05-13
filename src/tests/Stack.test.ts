import { Stack } from '../Stack';

describe('Stack', () => {
  it('creates empty stack', () => {
    const stack = new Stack();

    expect(stack.getSize()).toBe(0);
    expect(stack.peek()).toBeNull();
  });

  describe('peek method', () => {
    describe('when the stack is empty', () => {
      it('returns null', () => {
        const stack = new Stack();

        expect(stack.peek()).toBe(null);
      });
    });

    describe('when the stack is not empty', () => {
      it('returns top element in the stack', () => {
        const stack = Stack.fromArray([
          'Some element',
          'One more element',
        ]);

        expect(stack.peek()).toBe('One more element');
        expect(stack.getSize()).toBe(2);
      });
    });
  });

  describe('push method', () => {
    it('adds element to the top of the stack', () => {
      const stack = new Stack();

      stack.push('Some element');
      expect(stack.peek()).toBe('Some element');

      stack.push('One more element');
      expect(stack.peek()).toBe('One more element');
    });
  });

  describe('pop method', () => {
    describe('when the stack is empty', () => {
      it('returns null', () => {
        const stack = new Stack();

        expect(stack.pop()).toBe(null);
      });
    });

    describe('when the stack is not empty', () => {
      it('removes and returns element from the top of the stack', () => {
        const stack = Stack.fromArray(['Some element', 'One more element']);

        expect(stack.pop()).toBe('One more element');
        expect(stack.getSize()).toBe(1);

        expect(stack.pop()).toBe('Some element');
        expect(stack.getSize()).toBe(0);
      });
    });
  });

  describe('clear method', () => {
    it('clears the stack', () => {
      const stack = Stack.fromArray(['Some element', 'One more element']);

      expect(stack.getSize()).toBe(2);

      stack.clear();

      expect(stack.getSize()).toBe(0);
    });
  });
});
