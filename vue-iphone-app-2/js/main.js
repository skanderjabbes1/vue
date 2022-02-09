import app from './app.js';

import navbarComponent from './components/NavbarComponent.js'
import cartComponent from './components/CartComponent.js'
import productComponent from './components/ProductComponent.js'
import AffichageComponent from "./components/Affichage.js";
import FormComponent from "./components/FormComponent.js";
import ReviewZoneComponent from "./components/ReviewZoneComponent.js";

// Vue application
const myApp = Vue.createApp(app);

// Components
myApp.component('navbar-component', navbarComponent);
myApp.component('cart-component', cartComponent);
myApp.component('product-component', productComponent);
myApp.component("AffichageComponent", AffichageComponent);
myApp.component("FormComponent", FormComponent);
myApp.component("reviewzone", ReviewZoneComponent);

// Mount the application
myApp.mount('#app');