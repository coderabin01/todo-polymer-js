import { LitElement, html, css } from "@polymer/lit-element";

class TodoItem extends LitElement {
    // static get styles() {
    //     return css`
    //     `;
    // }

    static get properties() {
        return { todo: { attribute: true, attrName: "todo" } }
    }

    render() {
        return html`                  
        <vaadin-checkbox
            ?checked="${this.todo.complete}"
            @change="${this.emitUpdatedTodo}">
            ${this.todo.task}
        </vaadin-checkbox><todo-button>-</todo-button>`;

    }

    /**
     * Emits updated TODO object
     * @param {*} e 
     */
    emitUpdatedTodo(e) {
        this.todo.complete = !this.todo.complete;
        this.dispatchEvent(new CustomEvent('on-toggle', {
            detail: { todo: this.todo }
        }))
    }
}

window.customElements.define('todo-item', TodoItem);