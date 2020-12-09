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
        @change="${this.updateTask}"
      >
      </vaadin-text-field>
      <vaadin-button theme="primary" @click="${this.addTodo}">
          Add Todo
        </vaadin-button>
      `
    }

    updateTask(e) {
        this.task = e.target.value;
        console.log(this.task);
    }

    addTodo() {
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

