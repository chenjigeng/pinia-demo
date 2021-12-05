import { defineStore } from 'pinia'

interface Item {
  value: string;
  finished: boolean;
}

interface TodoStore {
  items: Item[];
}

export const useTodoStore = defineStore('todo', {
  state: () => {
    return {
      items: [],
      count: 1,
    } as TodoStore
  },
  getters: {
    finishedItems(store) {
      return store.items.filter(item => item.finished);
    },
    unfinishedItems(store) {
      return store.items.filter(item => !item.finished);
    }
  },
  actions: {
    addTodo(item: Item) {
      this.items.push(item);
    },
    removeTodoItem(item: Item) {
      if (this.items.includes(item)) {
        this.items.splice(this.items.indexOf(item), 1);
      }
    },
    toggleFinished(item: Item) {
      item.finished = !item.finished;
    }
  }
  // other options...
})