import { LitElement, html } from "lit-element";
import { loginCss } from './login.css.js';

import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item';
import '@polymer/paper-listbox/paper-listbox';


import { userRoles } from './../../constants/user-roles';
/**
 * Login component
 */
class Login extends LitElement {
    static get styles() {
        return [
            // loginCss
        ]
    }

    /**
     * Static getter properties
     */
    static get properties() {
        return {
            /**
             * Remember me button to save credentials
             */
            rememberMe: { type: Boolean, value: false },
            /**
             * Username field
             */
            username: { type: String },
            /**
             * Password field
             */
            password: { type: String },
        }
    }

    constructor() {
        super();

        this.rememberMe = false;

        console.log(userRoles);
    }

    /**
     * Toggles checkbox value
     */
    toggleCheckbox() {
        this.rememberMe = !this.rememberMe;
    }

    handleInput(key, value) {
        this.loginForm[key] = value;
    }

    /**
     * Setter for Username input field value
     * @param {*} e 
     */
    addUsername(e) {
        this.username = e.target.value;
    }

    /**
     * 
     * @param {*} e 
     */
    setUserId(e) {
        this.selectedUserId = e.target.value;
    }

    resetLoginForm() {

    }

    /**
     * Method to login
     */
    login() {
        console.log(this.loginForm);
    }

    /**
     * Lifecycle to render the element template
     */
    render() {
        return html`
        <div class="wrapper fadeInDown">
            <div id="formContent">        
            <!-- Login Form -->
                <form >
                    <paper-dropdown-menu label="User Type">
                        <paper-listbox slot="dropdown-content" selected="0" selected="0">
                            ${userRoles.map((user) => {
                return html`<paper-item .value="${user.id}" @click="${this.setUserId}">${user.name}</paper-item>`;
            })}
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-input label="Username" .value="${this.username}" @input="${this.addUsername}"></paper-input>
                    <paper-input type="password" .value="${this.password}" label="Password" @input="${e => this.handleInput('password', e.target.value)}"></paper-input>

                    ${this.rememberMe}
                    <paper-checkbox ?checked="${this.rememberMe}" @click="${this.toggleCheckbox}">Remember me</paper-checkbox>
                    <br/>
                    <paper-button raised @click="${this.login}">Login</paper-button>
                    <paper-button raised @click="${this.resetLoginForm}">Reset</paper-button>
                    <paper-button raised >Validate</paper-button>
                </form>
            
            <!-- Remind Passowrd -->
            <div id="formFooter">
                <a class="underlineHover" href="#">Forgot Password?</a>
            </div>
            
            </div>
        </div>
        `
    }
}

customElements.define('login-page', Login);