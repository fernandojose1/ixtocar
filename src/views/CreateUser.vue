<script setup>
import { RouterLink } from "vue-router";
import {
  UserIcon,
  KeyIcon,
  BuildingStorefrontIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <div class="container">
    <div class="left_container">
      <div class="car_image">
        <img alt="car" src="@/assets/carKey.jpg" />
      </div>
    </div>
    <div class="right_container">
      <h2 class="titulo">Crie sua conta!</h2>
      <form action="" class="form_login">
        <label class="label_login">
          <BuildingStorefrontIcon class="icon_login" />
          <p>Nome da Empresa</p>
        </label>
        <div class="input_field">
          <input
            class="input_size"
            type="text"
            name="namecompany"
            maxlength="50"
            placeholder="Nome da empresa"
            required
          />
          <div class="underline"></div>
        </div>
        <label class="label_login">
          <UserIcon class="icon_login" />
          <p>E-mail</p>
        </label>
        <div class="input_field">
          <input
            class="input_size"
            type="text"
            name="username"
            maxlength="50"
            placeholder="Digite seu email"
            required
          />
          <div class="underline"></div>
        </div>
        <label class="label_login">
          <KeyIcon class="icon_login" />
          <p>Senha</p>
        </label>
        <div class="input_field">
          <input
            class="input_size"
            type="password"
            name="password"
            maxlength="50"
            placeholder="Crie sua senha"
            required
          />
          <div class="underline"></div>
        </div>

        <button type="submit" class="btn_login">
          <RouterLink to="/login">Cadastrar nova conta!</RouterLink>
        </button>
      </form>

      <span class="span_login">
        Já possui uma conta?
        <RouterLink to="/">Login</RouterLink>
      </span>
    </div>
    <footer class="footer_login">
      Copyright @ 2022 - Desenvolvido por Fernando josé e Renato Vieira
    </footer>
  </div>
</template>

<style scoped>
.left_container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 600px;
  background: var(-vt-c-white);
  overflow: hidden;
  border-radius: 8px 0px 0px 8px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
}
.car_image {
  height: 100%;
}

.icon_login {
  width: 20px;
  color: var(--vt-c-gray-soft);
}
.label_login {
  display: flex;
  align-items: center;
}
.label_login p {
  margin: 5px;
  font-weight: 700;
  color: var(--vt-c-gray-mute);
}
.left_container img {
  height: 100%;
}

.titulo {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 3rem;
  position: relative;
  color: var(--vt-c-black-soft);
}
.titulo::before {
  content: "";
  position: absolute;
  height: 7px;
  width: 115px;
  bottom: -4px;
  right: 0;
  border-radius: 8px;
  background: var(--vt-c-orange);
}
.right_container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 500px;
  height: 600px;
  background: var(--vt-c-white);
  border-radius: 0px 8px 8px 0px;
}
.input_size {
  width: 100%;
}

.input_field {
  width: 400px;
  position: relative;
  margin-bottom: 1.5rem;
}
.input_field input {
  border: none;
  outline: none;
  font-size: 0.9rem;
  color: var(--vt-c-gray-mute);
}

.input_field input::placeholder {
  font-size: 15px;
  color: 5px 5px 15px rgba(175, 175, 175, 0.5);
}
.input_field .underline::before {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: -5px;
  left: 0;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(221, 221, 221, 1) 50%,
    rgba(255, 255, 255, 1) 100%
  );
}

.input_field .underline::after {
  content: "";
  position: absolute;
  height: 2px;
  width: 100%;
  bottom: -5px;
  left: 0;
  background-color: var(--vt-c-orange);
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
  transform-origin: left;
}
.input_field input:focus ~ .underline::after {
  transform: scaleX(1);
}
.btn_login {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 0.6rem;
  background: rgb(255, 107, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 107, 0, 1) 0%,
    rgba(255, 107, 0, 1) 0%,
    rgba(255, 162, 0, 1) 100%
  );
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 800;
  border-radius: 4px;
  border: none;
  width: 100%;
  transition: all 0.9s ease;
}
.btn_login a {
  color: var(--vt-c-white);
}
.btn_login:hover {
  letter-spacing: 0.8px;
  transform: scale(1.1);
  background: rgb(255, 107, 0);
  background: linear-gradient(
    90deg,
    rgba(255, 107, 0, 1) 0%,
    rgba(255, 107, 0, 1) 58%,
    rgba(255, 162, 0, 1) 100%
  );
}

.span_login {
  color: var(--vt-c-gray);
  font-size: 0.9rem;
  text-align: center;
}
.span_login a {
  text-decoration-line: none;
  color: var(--vt-c-gray);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
}

.footer_login {
  position: absolute;
  bottom: 10px;
  color: var(--vt-c-gray);
  font-size: 0.8rem;
  text-align: center;
  width: 100vh;
}
.container {
  height: 100vh;
  background: var(--vt-c-gray-soft);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.container a {
  text-decoration: none;
}
</style>
