import 'core-js/fn/object/assign';
import Vue from 'vue';
import { populaeAmenitiesAndPrices } from './helper';

let model = JSON.parse(window.vuebnb_listing_model);
model = populaeAmenitiesAndPrices(model);
console.log(model);

var app = new Vue({
   el: '#app',
   data: Object.assign(model, {
      headerImageStyle: {
         'background-image': `url(${model.images[0]})`
      },
      contracted: true,
      modalOpen: false
   }),
   watch: {
      modalOpen() {
         const className = 'modal-open';

         if (this.modalOpen) {
            document.body.classList.add(className);
         } else {
            document.body.classList.remove(className);
         }
      }
   },
   created() {
      document.addEventListener('keyup', this.escapeKeyListener);
   },
   destroyed() {
      document.removeEventListener('keyup', this.escapeKeyListener);
   },
   methods: {
      escapeKeyListener(evt) {
         if (evt.keyCode === 27 && this.modalOpen) {
            this.modalOpen = false;
         }
      }
   }
});
