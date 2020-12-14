import { LitElement, html, css } from "lit-element";

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

    /**
     * Styles for the todo-button
     */
    static get styles() {
        return css`
        button {
            background: #3f51b5;
            color: white;
            border: none;
            font-size: 22px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            box-shadow: 3px 3px 2px 0px rgba(50, 50, 50, 0.5);
            cursor: pointer;
            transition: all 0.3s;
          }
        
          button:hover {
            box-shadow: none;
          }
        
          button:focus {
            outline: none;
          }
        `;
    }


    render() {
        return html`
        <button @click="${this.isClicked}">
        <slot></slot>
      </button>`;
    }

    // onBtnClick() {
    //     this.dispatchEvent(new CustomEvent('on-click'));
    // }
}

window.customElements.define('todo-button', TodoButton);