import { LitElement, html } from "@polymer/lit-element";

class TodoButton extends LitElement {

    /**
     * Defines the properties for the component.
     */
    static get properties() {
        return {
            /**
             * Method to handle the submit
             * Passed in as props from parent
             * 
             * @type {{isClicked: Function}}
             */
            isClicked: { type: Function }
        }
    }

    render() {
        return html`
        <vaadin-button theme="primary" @click="${this.isClicked}">
        <slot></slot>
      </vaadin-button>`;
    }

    // onBtnClick() {
    //     this.dispatchEvent(new CustomEvent('on-click'));
    // }
}

window.customElements.define('todo-button', TodoButton);