import 'core-js/fn/object/assign';
import Vue from 'vue';
import { populaeAmenitiesAndPrices } from './helper';

let model = JSON.parse(window.vuebnb_listing_model);
model = populaeAmenitiesAndPrices(model);

Vue.component('image-carousel', {
   components: {
      'carousel-control': {
         template: '<i :class="classes" @click="clicked"></i>',
         props: ['dir'],
         computed: {
            classes() {
               return `carousel-control fa fa-2x fa-chevron-${this.dir}`;
            },
         },
         methods: {
            clicked() {
               this.$emit('change-image', this.dir === 'left' ? -1 : 1);
            },
         },
      },
   },
   props: ['images'],
   data() {
      return {
         index: 0,
      };
   },
   computed: {
      image() {
         return this.images[this.index];
      },
   },
   methods: {
      changeImage(val) {
         const newVal = this.index + parseInt(val, 10);
         if (newVal < 0) {
            this.index = this.images.length - 1;
         }
         else if (newVal === this.images.length) {
            this.index = 0;
         }
         else {
            this.index = newVal;
         }
      },
   },
   template: `
      <div class="image-carousel">
         <img :src="image" />
         <div class="controls">
            <carousel-control
               dir="left"
               @change-image="changeImage"
            ></carousel-control>
            <carousel-control
               dir="right"
               @change-image="changeImage"
            ></carousel-control>
         </div>
      </div>
   `,
});

const app = new Vue({
   el: '#app',
   data: Object.assign(model, {
      headerImageStyle: {
         'background-image': `url(${model.images[0]})`,
      },
      contracted: true,
      modalOpen: false,
   }),
   watch: {
      modalOpen() {
         const className = 'modal-open';

         if (this.modalOpen) {
            document.body.classList.add(className);
         }
         else {
            document.body.classList.remove(className);
         }
      },
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
      },
   },
});
