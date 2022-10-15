<script setup>
  import {
  ChatBubbleLeftIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="card">
    <div class="box_image">
      <img src="@/assets/mclaren-720s.jpg" alt="Avatar">
    </div>
    <div class="garage_title">
      <h4><b>Garagem 2 Irmãos</b></h4>
      </div>
    <div class="car_title">
      <p><ChatBubbleLeftIcon class="icon_login" />Estamos interessados no Camaro v8 asdasdasdasdasdasdasdsdasda...</p>
    </div>
    <div class="car_date">
      <p>20-08-2022</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  width: 100%;
  height: 100px;
  background-color: var(--vt-c-white);
  margin-bottom: 5px;
}
.box_image {
  display: flex;
  justify-content: center;
  border-radius: 50px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  object-fit: cover;
  margin: 20px;

}
.icon_login {
  width: 20px;
  color: var(--vt-c-gray-soft);
  margin-right: 8px;
}
.box_image img {
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
.garage_title{
  font-size: 20px;
  color: var(--vt-c-gray-mute);
  font-weight: 500;
}
.car_title {
  color: var(--vt-c-gray-mute);
  font-weight: 500;
  width: 600px;
}
.car_date {
  color: var(--vt-c-gray-soft);
  font-weight: 400;
}
</style>
