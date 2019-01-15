<template>
  <div class="listing-save" @click.stop="toggleSaved()">
    <i :class="classes"/>
  </div>
</template>
<script>
export default {
   props: ['id'],
   computed: {
      isListingSaved() {
         return this.$store.state.saved.find(saved => saved === this.id);
      },
      classes() {
         const saved = this.isListingSaved;
         return {
            fa: true,
            'fa-lg': true,
            'fa-heart': saved,
            'fa-heart-o': !saved,
         };
      },
   },
   methods: {
      toggleSaved() {
         this.$store.commit('toggleSaved', this.id);
      },
   },
};
</script>
<style>
.listing-save {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.listing-save .fa-heart-o {
  color: #fff;
}

.listing-save .fa-heart {
  color: #ff5a5f;
}
</style>
