<template>
  <section class="container">
    <div class="up">
      <h1 class="title">Dashboard</h1>
      <h1 class="title">Ixtocar</h1>
    </div>
    <hr />
    <div class="gallery">
      <div class="thumbnails">
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
        <Card1 />
      </div>
    </div>
    <h1 class="title_second">Notificações</h1><br/>
    <div class="down">
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </div>
  </section>
</template>

<script setup>
import Card1 from "../components/Card1.vue";
import Notification from "../components/Notification.vue";
</script>

<style scoped>
.container {
  height: 100vh;
  max-width: 1500px;
  max-height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 30px;
}
.up {
  display: flex;
  justify-content: space-between;
  height: 118px;
}
.gallery {
  margin-top: 30px;
  height: 320px;
  width:100vw;
  overflow: hidden;
  overflow-x: scroll;
}
.thumbnails {
  display: flex;
  flex-direction: row;
  gap: 15px;
  width:2000px;
}



.thumbnails img {
  width: auto;
  height: 100px;
  display: block;
  float: left;
  border: 1px solid #ddd;
  margin: 1px;
}
.down {
  width: 100%;
  height: 430px;
  max-height: 450px;
  overflow: scroll;
}
.title {
  color: var(--vt-c-gray-mute);
  font-weight: 600;
  font-size: 24px;
  padding-top: 70px;
}
.title_second{
  color: var(--vt-c-gray-mute);
  font-weight: 600;
  font-size: 24px;
  padding-top: 20px;
}

hr {
  border-color: var(--vt-c-gray-title);
  box-sizing: border-box;
  width: 100%;
}
</style>
