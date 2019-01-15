<template>
  <div class="listing-save" @click.stop="toggleSaved()">
    <i class="fa fa-heart-o"/>
  </div>
</template>
<script>
export default {
   props: ['id'],
   methods: {
      toggleSaved() {},
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
</style>
