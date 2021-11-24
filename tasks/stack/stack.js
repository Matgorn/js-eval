export class Stack {
  constructor(...elements) {
    this.value = [...elements];
    this.count = elements.length;
  }

  push(element, ...rest) {
    if (rest.length) return 'Provide only one argument!';
    this.value[this.count] = element;
    this.count++;

    return this.value;
  }

  pop() {
    if (this.count <= 0) return undefined;
    this.count--;
    const deletedElement = this.value[this.count];
    this.value.length = this.count;

    return deletedElement;
  }

  get isEmpty() {
    return `Stack is ${this.count === 0 ? '' : 'not '}empty`;
  }

  get size() {
    return `Stack size is ${this.count}`;
  }

  get show() {
    if (this.count === 0) return 'Stack is empty';

    for (let i = this.count - 1; i >= 0; i--) {
      console.log(this.value[i]);
    }
  }
};
