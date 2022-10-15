<template>
  <section class="container">
    <div class="up">
      <h1 class="title">Garagens</h1>
      <h1 class="title">Ixtocar</h1>
    </div>
    <hr />
    <div class="navheader">
      <label for="state" class="label">Cidade</label>
      <div class="select">
        <select name="state" id="state">
          <option>Selecione</option>
          <option>Santa Catarina</option>
          <option>São paulo</option>
        </select>
      </div>
      <label for="city" class="label">Cidade</label>
      <div class="select">
        <select name="city" id="city">
          <option>Selecione</option>
          <option>Palhoça</option>
          <option>São José</option>
          <option>Florianópolis</option>
        </select>
      </div>
      <label for="district" class="label">Bairro</label>
      <div class="select">
        <select name="district" id="district">
          <option>Selecione</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
      </div>
      <label for="searchGarages" class="label">Buscar:</label>
      <input type="search" name="searchGarages" id="searchGarages" />
      <button type="submit">P</button>
    </div>
    <div class="area">
     componentes aqui
    </div>
  </section>
</template>

<script setup></script>

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
.down {
  width: 100%;
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
.title_second {
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

.navheader {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px;
  margin-top: 35px;
  background: var(--vt-c-white);
  height: 85px;
  border-radius: 10px;
}

select {
  box-shadow: none;
  background:var(--vt-c-white);
  flex: 1;
  padding: 0 0.5em;
  color: var(--vt-c-gray);
  cursor: pointer;
  font-size: 16px;
  outline: 0;
  border: 2px solid var(--vt-c-gray);
  border-radius: 8px;
}
select::-ms-expand {
  display: none;
}
.select {
  position: relative;
  display: flex;
  width: 200px;
  height: 40px;
  line-height: 3;
  overflow: hidden;
  border-radius: 8px;
}
.select:hover::after {
  color: var(--vt-c-orange);
}
.label {
  color: var(--vt-c-gray-mute);
  font-weight: 600;
  font-size: 16px;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
