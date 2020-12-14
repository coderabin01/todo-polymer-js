

// modules
import { Router } from '@vaadin/router'
// import {Router} from '@vaadin/router'; // for Webpack / Polymer CLI
// const Router = Vaadin.Router; // for vaadin-router.umd.js

// select the DOM node where the router inserts route Web Components
const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
    { path: '/', component: 'start-polymer3' },
    { path: '/login', component: 'login-page' },
    { path: '/todo', component: 'todo-view' },
    { path: '/users/:user', component: 'x-user-profile' },
]);
