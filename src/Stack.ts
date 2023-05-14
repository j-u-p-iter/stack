import { SinglyLinkedList } from "@j.u.p.iter/singly-linked-list";

/**
 * The Stack implementation is based on SinglyLinkedList.
 *   Adding to the top of the stack, we are actually adding the
 *     element to the beginning of the list.
 *
 *   Removing from the stack, we are removing the last added element
 *     to the list - the first element.
 *
 *   We don't remove element from the end of the list instead
 *     since it's more performant operation for the SinglyLinkedList. Removing from the end
 *     we have to iterate through the whole list, starting from the head.
 *
 *   We don't need to do this iteration, removing or adding element from/to the beginning of the list.
 *
 */

export class Stack {
  constructor(
    private singlyLinkedList: SinglyLinkedList = new SinglyLinkedList()
  ) {}

  /**
   * Clears the stack
   *
   */
  public clear() {
    this.singlyLinkedList.clear();
  }

  /**
   * Returns the number of elements
   *   in the stack
   *
   */
  public getSize() {
    return this.singlyLinkedList.getLength();
  }

  /**
   * Checks if the stack is empty.
   *
   */
  public isEmpty() {
    return this.singlyLinkedList.isEmpty();
  }

  /**
   * Returns element from the top of
   *   the stack.
   *
   */
  public peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.singlyLinkedList.getHead().getValue();
  }

  /**
   * Adds element to the top
   *   of the stack
   *
   */
  public push(element) {
    this.singlyLinkedList.unshift(element);

    return this;
  }

  /**
   * Removes and returns element from the top of the stack Removes and returns element
   *   from the top of the stack.
   *
   */
  public pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.singlyLinkedList.shift().getValue();
  }

  /**
   * Creates stack from an existing array.
   *
   */
  static fromArray(elements: any[]) {
    const singlyLinkedList = SinglyLinkedList.fromArray(elements.reverse());

    return new Stack(singlyLinkedList);
  }
}
