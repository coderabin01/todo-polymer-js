import { LitElement, html, css } from "@polymer/lit-element";

/**
 * `<todo-item>` Custom component for todo item
 */
class TodoItem extends LitElement {
    /**
     * Static getter properties.
     * 
     * @returns {Object}
     */
    static get properties() {
        return { todo: { attribute: true, attrName: "todo" }, onToggle: { type: Function } }
    }

    render() {
        return html`                  
        <vaadin-checkbox
            ?checked="${this.todo.complete}"
            @change="${() => this.onToggle(this.todo)}">
            ${this.todo.task}
        </vaadin-checkbox><todo-button>-</todo-button>`;

    }

    /**
     * Emits updated TODO object
     * 
     * @param {*} e 
     */
    // emitUpdatedTodo(e) {
    //     this.todo.complete = !this.todo.complete;
    //     this.dispatchEvent(new CustomEvent('on-toggle', {
    //         detail: { todo: this.todo }
    //     }))
    // }
}

window.customElements.define('todo-item', TodoItem);