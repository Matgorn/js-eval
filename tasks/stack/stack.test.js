import { Stack } from './stack';

let stack;
console.log = jest.fn();

describe('Stack', () => {
  it('allows to add new value to the stack', () => {
    const stack = new Stack('a', 'b', 'c');
    stack.push('d');

    expect(stack.value).toEqual(['a', 'b', 'c', 'd']);
  });

  it('allows to remove last value from stack', () => {
    const stack = new Stack('a', 'b', 'c');
    expect(stack.count).toBe(3);

    stack.pop();

    expect(stack.count).toBe(2);
    expect(stack.value).not.toContain('c');
  });

  it('logs the values in order', () => {
    const stack = new Stack('a', 'b', 'c');

    stack.show;
    expect(console.log).toHaveBeenCalledWith('a');
    expect(console.log).toHaveBeenCalledWith('b');
    expect(console.log).toHaveBeenCalledWith('c');
  });

  it('returns a message when stack if empty or not', () => {
    const emptyStack = new Stack();
    expect(emptyStack.isEmpty).toBe('Stack is empty');

    const filledStack = new Stack('a', 'b', 'c');
    expect(filledStack.size).toBe('Stack size is 3');
  });

  it('displays the stack size', () => {
    const stack = new Stack('a', 'b', 'c');
    expect(stack.size).toBe('Stack size is 3');
  });
});

describe('when stack is created without initial values', () => {
  it('returns class validation error message', () => {
    const stack = new Stack();

    expect(stack.pop()).toBeUndefined();
    expect(stack.push('a', 'b')).toBe('Provide only one argument!');
    expect(stack.show).toBe('Stack is empty');
    expect(stack.isEmpty).toBe('Stack is empty');
    expect(stack.size).toBe('Stack size is 0');
  });
});