import { LitElement, customElement, html } from "@polymer/lit-element";

class AddTodo extends LitElement {

    static get properties() {
        return {
            task: { type: String }
        }
    }

    constructor() {
        super();

        this.task = '';
    }

    render() {
        return html`
        <vaadin-text-field
            placeholder="Task"
            value="${this.task}"
            @keyup="${this.onKeyUp}"
            @change="${this.updateTask}">
        </vaadin-text-field>
        
        <todo-button 
            @on-click="${this.emitTodo}">
            Add Todo
        </todo-button>
      `
    }

    /**
     * Emits the todo on press of enter key
     * @param {*} e 
     */
    onKeyUp(e) {
        if (e.key === "Enter") {
            this.emitTodo();
        }
    }

    /**
     * Updates the task property
     * @param {*} e  
     */
    updateTask(e) {
        this.task = e.target.value;
    }

    /**
     * Emits todo to parent component
     */
    emitTodo() {
        if (this.task) {
            let newTodo = new CustomEvent('on-add-todo', {
                detail: { todo: this.task }
            })
            this.dispatchEvent(newTodo);
            this.task = '';
        }
    }
}

window.customElements.define('add-todo', AddTodo);

