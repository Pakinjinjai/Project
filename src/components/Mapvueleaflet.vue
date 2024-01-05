<template>
  <div class="">
    <l-map style="height: 50vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng"></l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
export default {
  components: { LMap, LMarker, LTileLayer },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 18,
      center: [10.722959278417832, 99.37594426377524],
      markerLatLng: [10.722959278417832, 99.37594426377524],
    };
  },
};
</script>

<style lang="scss" scoped></style>
