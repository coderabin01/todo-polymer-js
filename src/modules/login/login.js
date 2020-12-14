import { LitElement, html } from "lit-element";

class Login extends LitElement {
    constructor() {
        super();
    }

    render() {
        return html`login`;
    }
}

customElements.define('login-page', Login);