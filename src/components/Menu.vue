<script setup>
import {
  UserIcon,
  ComputerDesktopIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  ChatBubbleLeftIcon,
  HomeIcon,
  PlusCircleIcon,
  MagnifyingGlassCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <aside class="sidebar">
    <p class="welcome">Bem vindo,</p>
    <h1 class="name_company">Garagem 2 irmãos</h1>
    <hr />
    <nav class="menu-items">
      <router-link to="/dashboard" active-class="active">
        <div class="hoverLink"></div>
        <div class="link-container">
          <ComputerDesktopIcon class="icon_login" />
          Dashboard
        </div>
      </router-link>
      <router-link to="/garagens" active-class="active">
        <div class="hoverLink"></div>
        <div class="link-container">
          <BuildingStorefrontIcon class="icon_login" />
          Garagens
        </div>
      </router-link>
      <router-link to="/veiculos" active-class="active">
        <div class="hoverLink"></div>
        <div class="link-container">
          <TruckIcon class="icon_login" />
          Veículos
        </div>
      </router-link>
      <router-link to="/propostas" active-class="active">
        <div class="hoverLink"></div>
        <div class="link-container">
          <ChatBubbleLeftIcon class="icon_login" />
          Propostas
        </div>
      </router-link>
      <details class="link-container">
        <div class="hoverLink"></div>
        <summary>
          <HomeIcon class="icon_login" />
          Meu estoque
        </summary>
        <div class="subLinks">
          <router-link to="/meu-estoque/cadastrar" active-class="active">
            <div class="hoverLink"></div>
            <PlusCircleIcon class="icon_login" />
            Cadastrar
          </router-link>
        </div>
        <div class="subLinks">
          <router-link to="/meu-estoque" active-class="active">
            <div class="hoverLink"></div>
            <MagnifyingGlassCircleIcon class="icon_login" />
            Consultar
          </router-link>
        </div>
      </details>
      <router-link to="/minha-conta" active-class="active">
        <div class="hoverLink"></div>
        <div class="link-container">
          <UserIcon class="icon_login" />
          Minha conta
        </div>
      </router-link>

      <div class="footerNav">
        <router-link :to="{ name: exit }">
          <div class="link-container">
            <ArrowLeftOnRectangleIcon class="icon_login" />
            Sair
          </div>
        </router-link>
      </div>
    </nav>
  </aside>
</template>

<style scoped>
summary {
  list-style: none;
}
.sidebar {
  min-width: 270px;
  padding-left: 50px;
  font-size: 20px;
}
.sidebar a {
  text-decoration: none;
  color: var(--vt-c-gray-title);
}
.sidebar a:hover {
  text-decoration: none;
  color: var(--vt-c-white);
}
.sidebar a:hover > .link-container > .icon_login {
  color: var(--vt-c-white);
}
.sidebar a:hover > .icon_login {
  color: var(--vt-c-white);
}
.sidebar summary:hover > .icon_login {
  color: var(--vt-c-white);
}
.sidebar a:hover > .hoverLink {
  background: var(--vt-c-orange);
  width: 6px;
  height: 30px;
  left: 0;
  position: absolute;
}
.sidebar summary {
  text-decoration: none;
  color: var(--vt-c-gray-title);
}
.sidebar summary:hover {
  cursor: pointer;
  text-decoration: none;
  color: var(--vt-c-white);
}
.subLinks {
  margin: 10px 10px;
  padding-left: 20px;
}
.welcome {
  color: var(--vt-c-gray-title);
  font-size: 16px;
  margin-top: 50px;
}
.name_company {
  color: var(--vt-c-white);
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
}
hr {
  border-color: var(--vt-c-gray);
  box-sizing: border-box;
  width: 100%;
}

.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
}
.icon_login {
  width: 20px;
  color: var(--vt-c-gray-soft);
  margin-right: 8px;
}
.link-container {
  margin-bottom: 15px;
}
.footerNav {
  width: 270px;
  position: absolute;
  bottom: 20px;
}
.footerNav .link-container {
  margin-top: 12px;
}
</style>
