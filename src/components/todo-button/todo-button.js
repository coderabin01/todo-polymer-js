import { LitElement, html } from "@polymer/lit-element";

class TodoButton extends LitElement {

    render() {
        return html`
        <vaadin-button theme="primary" @click="${this.onBtnClick}">
        <slot></slot>
      </vaadin-button>`;
    }

    onBtnClick() {
        this.dispatchEvent(new CustomEvent('on-click'));
    }
}

window.customElements.define('todo-button', TodoButton);