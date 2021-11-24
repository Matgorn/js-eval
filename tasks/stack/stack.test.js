import { Stack } from './stack';

let stack;
console.log = jest.fn();

describe('empty stack', () => {
  beforeEach(() => {
    stack = new Stack();
  });

  it('method pop returns undefined', () => {
    expect(stack.pop()).toBeUndefined();
  });

  it('method push is adding input to the stack and returns stack value', () => {
    expect(stack.push('a')).toEqual(['a']);
    expect(stack.value).toContain('a');
  });

  it('method push returns message "Provide only one argument!" if more than one argument is provided', () => {
    expect(stack.push('a', 'b')).toBe('Provide only one argument!');
  });

  it('method show returns message "Stack is empty"', () => {
    expect(stack.show).toBe('Stack is empty');
  });

  it('method isEmpty returns message "Stack is empty"', () => {
    expect(stack.isEmpty).toBe('Stack is empty');
  });

  it('method size returns message "Stack size is 0"', () => {
    expect(stack.size).toBe('Stack size is 0');
  });
});

describe('filled stack', () => {
  beforeEach(() => {
    stack = new Stack('a', 'b', 'c');
  });

  it('method pop returns last stack item and removes it from stack', () => {
    expect(stack.pop()).toBe('c');
    expect(stack.value).not.toContain('c');
  });

  it('method push is adding input as the last element of stack and returns stack value', () => {
    expect(stack.push('d')).toEqual(['a', 'b', 'c', 'd']);
  });

  it('method show is printing stack in the console in the right order', () => {
    expect(stack.show).toBeUndefined();
    expect(console.log).toHaveBeenCalledWith('a');
    expect(console.log).toHaveBeenCalledWith('b');
    expect(console.log).toHaveBeenCalledWith('c');
  });

  it('method isEmpty returns message "Stack is not empty"', () => {
    expect(stack.isEmpty).toBe('Stack is not empty');
  });

  it('method size returns message "Stack size is 3"', () => {
    expect(stack.size).toBe('Stack size is 3');
  });
});