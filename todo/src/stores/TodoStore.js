import { makeAutoObservable } from "mobx";

class TodoStore {
    todos = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodoItem(todo) {
        this.todos.push({ text: todo, completed: false });
    }

    removeTodoItem(index) {
        this.todos.splice(index, 1);
    }

    completeTodoItem(index) {
        const todo = this.todos[index];
        todo.completed = true;
        this.todos.push(todo);
        this.removeTodoItem(index);
    }

    updateTodoItem(index, newText) {
        this.todos[index].text = newText;
    }

    removeFirstItem() {
        if (this.todos.length > 0) {
            this.removeTodoItem(0);
        }
    }

    removeLastItem() {
        if (this.todos.length > 0) {
            this.removeTodoItem(this.todos.length - 1);
        }
    }
}

const todoStore = new TodoStore();
export default todoStore;