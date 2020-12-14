import { LitElement, customElement, html } from "@polymer/lit-element";

class AddTodo extends LitElement {

    static get properties() {
        return {
            task: { type: String },
            onAdd: { type: Function }
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
            .isClicked="${() => { this.onAdd(this.task); this.task = '' }}">
            +
        </todo-button>
      `
    }

    /**
     * Emits the todo on press of enter key
     * @param {*} e 
     */
    onKeyUp(e) {
        if (e.key === "Enter") {
            this.onAdd(this.task);
            this.task = "";
        }
    }

    /**
     * Updates the task property
     * @param {*} e  
     */
    updateTask(e) {
        this.task = e.target.value;
    }
}

window.customElements.define('add-todo', AddTodo);

