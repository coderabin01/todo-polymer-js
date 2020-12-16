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
             * 
             * @type {{type: Boolean}}
             */
            rememberMe: { type: Boolean, value: false },
            /**
             * Username field
             * 
             * @type {{type: String}}
             */
            username: { type: String },
            /**
             * Password field
             * 
             * @type {{type: String}}
             */
            password: { type: String },

            selectedRoleId: { type: Number }
        }
    }

    constructor() {
        super();
    }

    /**
     * Toggles checkbox value
     */
    toggleCheckbox() {
        this.rememberMe = !this.rememberMe;
    }

    /**
     * Setter for Username input field value
     * @param {*} e 
     */
    setUsername(e) {
        this.username = e.target.value;
    }

    /**
     * Setter for Password input field value
     * @param {*} e 
     */
    setPassword(e) {
        this.password = e.target.value;
    }

    /**
     * 
     * @param {*} e 
     */
    setRoleId(e) {
        this.selectedRoleId = e.target.value;
    }

    resetLoginForm() {
        this.username = "";
        this.password = "";
        this.selectedRoleId = 0;
    }

    /**
     * Method to login
     */
    login() {
        const loginForm = {
            roleId: this.selectedRoleId,
            username: this.username,
            password: this.password,
            rememberMe: this.rememberMe
        }
        console.log(loginForm);
    }

    /**
       * Finds the index of the selected status type from the array with three statuses.
       *
       * @param   {String}  selectedStatus
       *
       * @returns  {Number}
       */
    findIndexOfSelected(selectedStatus) {
        return userRoles.findIndex(role => role.id === selectedStatus);
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
                        <paper-listbox slot="dropdown-content" .selected="${this.findIndexOfSelected(this.selectedRoleId)}">
                        ${userRoles.map((role) => {
                return html`<paper-item .value="${role.id}" @click="${this.setRoleId}">${role.name}</paper-item>`;
            })}
                        </paper-listbox>
                    </paper-dropdown-menu>

                    <paper-input label="Username" .value="${this.username}" @input="${this.setUsername}"></paper-input>
                    <paper-input type="password" label="Password" .value="${this.password}" @input="${this.setPassword}"></paper-input>

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