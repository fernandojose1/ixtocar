<script setup>
//
</script>

<template>
  <div>
    <div class="card">
      <div class="box_image">
        <img src="@/assets/mclaren-720s.jpg" alt="Avatar" />
      </div>
      <div class="garage_title">
        <h4>
          <b>Nome do carro</b>
        </h4>
      </div>
      <div class="car_title">
        <p>Descrição</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 250px;
  height: 300px;
  background-color: var(--vt-c-white);
}
.box_image {
  display: flex;
  justify-content: center;
  max-height: 70%;
  object-fit: cover;
}
.box_image img {
  width: 100%;
}
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
.garage_title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: var(--vt-c-white);
  background-color: var(--vt-c-orange);
  height: 10%;
}
.car_title {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: var(--vt-c-gray-mute);
  font-weight: 700;
  height: 20%;
}
</style>
