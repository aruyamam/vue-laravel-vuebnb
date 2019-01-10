<template>
  <div>Vuebnb home page</div>
</template>
<script>
import { groupByCountry } from "../helper.js";

const serverData = JSON.parse(window.vuebnb_server_data);
const listing_groups = groupByCountry(serverData.listing);

export default {
  data() {
    return { listing_groups };
  }
};
</script>
