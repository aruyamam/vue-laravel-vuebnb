<template>
   <div id="modal" v-bind:class="{ show: modalOpen }">
      <button @:click="modalOpen = false" class="modal-close">
         &times;
      </button>
      <div class="modal-content">
         <slot></slot>
      </div>
   </div>
</template>
<script>
   export default {
      data() {
         return {
            modalOpen: false
         }
      },
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
   }
</script>
<style>
   #modal {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 2000;
      background-color: rgba(0, 0, 0, 0.85);
   }

   #modal.show {
      display: block;
   }

   .modal-content {
      position: relative;
      height: 100%;
      max-width: 105vh;
      margin: 0 auto;
      padding-top: 12vh;
   }

   body.modal-open {
      position: fixed;
      overflow: hidden;
   }

   .modal-close {
      position: absolute;
      right: 0;
      top: 0;
      width: auto;
      height: auto;
      padding: 0 28px 8px;
      background: transparent;
      border: 0;
      outline: none;
      color: #fff;
      font-size: 4em;
      font-weight: 100;
      line-height: 1;
      outline: none;
      z-index: 1000;
   }
</style>
