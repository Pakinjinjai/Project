<template>
    <div class="">
        <div id="map"></div>
    </div>
</template>
  
<script>
import mapboxgl from 'mapbox-gl';

export default {
    mounted() {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2F0YXBhdCIsImEiOiJjbHEyNDd4MzMwMGE5MnNxdG9hMjdydjg2In0.43G6QkX29qYt-ALu16KRMw';

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [99.375326, 10.724320], 
            zoom: 10 
        });

        // เพิ่ม Marker ที่จุดที่กำหนด
        // const marker = new mapboxgl.Marker()
        //     .setLngLat([99.374790, 10.723764]) // ตำแหน่ง (ลองจิจูด, ลองจิจูด)
        //     .addTo(map);
    }
};
</script>
  
<style>
#map {
    width: 100%;
    height: 100vh;
}
</style>
  