<template>
  <div id="layout">
    <header>
      <nav class="navbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"> Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'card-list' }">Cards</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'deck-list' }">Deck</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <router-view v-slot="{ Component }">
      <transition name="grow-in" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="css" scoped>
nav ul li a {
  font-weight: bold;
  margin-left: 15px;
  color:#d8d8d8;

  text-decoration: none;
}
nav a.router-link-exact-active {
  color:darkolivegreen;
  text-decoration: none;
}
</style>
