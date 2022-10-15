<template>
  <section class="container">
    <div class="up">
      <h1 class="title">Minha conta</h1>
      <h1 class="title">Ixtocar</h1>
    </div>
    <hr />
    <div class="gallery">
      <div class="thumbnails">
        <Card1 />
      </div>
    </div>
  </section>
</template>

<script setup>
import Card1 from "../components/Card1.vue";
</script>

<style scoped>
.container {
  height: 100vh;
  max-width: calc(100vw - 270px);
  max-height: 100vh;
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
  width:100%;
  overflow: hidden;
  overflow-x: scroll;
}
.thumbnails {
  display: flex;
  flex-direction: row;
  gap: 15px;
  width:2000px;
  margin: 10px;
}



.thumbnails img {
  width: auto;
  height: 100px;
  display: block;
  float: left;
  border: 1px solid #ddd;
}
.down {
  width:100%;
  padding: 10px;
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
