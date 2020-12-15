import { LitElement, html } from "lit-element";
import { loginHTML } from './login.html.js';
import { loginCss } from './login.css.js';

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
            rememberMe: { type: Boolean, value: false }
        }
    }

    constructor() {
        super();

        this.rememberMe = false;
    }

    /**
     * Toggles checkbox value
     */
    toggleCheckbox() {
        this.rememberMe = !this.rememberMe;
    }

    /**
     * Lifecycle to render the element template
     */
    render() {
        return html`
        <div class="wrapper fadeInDown">
        <div id="formContent">
          <!-- Tabs Titles -->
        
          <!-- Login Form -->
          <div class="output"></div>
            <form is='iron-form' >
                <paper-input label="Floating label" @input=""></paper-input>
                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
                <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
                ${this.rememberMe}
                <paper-checkbox ?checked="${this.rememberMe}" @click="${this.toggleCheckbox}">Remember me</paper-checkbox>
                <input type="submit" class="fadeIn fourth" value="Log In">
                <paper-button raised >Reset</paper-button>
                <paper-button raised >Validate</paper-button>
            </form>
        
          <!-- Remind Passowrd -->
          <div id="formFooter">
            <a class="underlineHover" href="#">Forgot Password?</a>
          </div>
        
        </div>
        </div>



        <hr>
        <form is = "iron-form" method = "get" action = "/" id = "basic">
         <paper-input class = "paperinput" name = "name" label = "Enter your name" required<
         </paper-input>
         <br>
         <input type = "checkbox" name = "vehicle" value = "bike"> I have a bike
         <br>
         <input type = "checkbox" name = "vehicle" value = "car"> I have a car
         <br>
     
         <paper-dropdown-menu class = "menu" label = "Icecream Flavours" name = "Flavours">
            <paper-menu class = "dropdown-content">
               <paper-item value = "vanilla">Vanilla</paper-item>
               <paper-item value = "strawberry">Strawberry</paper-item>
               <paper-item value = "caramel">Caramel</paper-item>
            </paper-menu>
         </paper-dropdown-menu><br>
       
         <paper-button class = "paperbtn" raised onclick = "_submit(event)">Submit</paper-button>
         <paper-button class = "paperbtn" raised onclick = "_reset(event)">Reset</paper-button>
         <h4>You entered the details:</h4>
         <div class = "output"></div>
      </form>
   
      <script>
         function _submit(event) {
            Polymer.dom(event).localTarget.parentElement.submit();
         }
         function _reset(event) {
            var form  =  Polymer.dom(event).localTarget.parentElement
            form.reset();
            form.querySelector('.output').innerHTML  =  '';
         }
         basic.addEventListener('iron-form-submit', function(event) {
            this.querySelector('.output').innerHTML  =  JSON.stringify(event.detail);
         });
      </script>
        `
    }
}

customElements.define('login-page', Login);