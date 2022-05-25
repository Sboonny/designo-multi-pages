<script setup lang="ts">
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
</script>

<template>
  <HeaderVue />
  <Transition name="fade">
    <router-view />
  </Transition>
  <FooterVue />
</template>

<style>
:root {
  --dark-blue: 270 3% 11%;
  --pink-skin: 11 76% 66%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {

  /* *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  } */
}

ul[role="list"],
ol[role="list"] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  margin: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.logo {
  width: clamp(10em, 30vw, 15em);
  margin: 1rem clamp(1rem, 4vw, 3rem);
}

.skip-to-content {
  position: absolute;
  z-index: 9999;
  padding: 0.5em 1em;
  margin-inline: auto;
  transform: translateY(-120%);
  transition: transform 250ms ease-in;
}

.skip-to-content:focus {
  transform: translateY(0);
}

.uppercase {
  text-transform: uppercase;
}

.cursor-pointer {
  cursor: pointer;
}

.flex {
  gap: var(--gap, 1.5em);
  display: flex;
}

.grid {
  gap: var(--gap, 1em);
  display: grid;
}

.flex-direction {
  flex-direction: column;
}

@media (min-width: 35em) {
  body {
    width: 85%;
    --gap: 3em;
  }

  .flex-direction {
    flex-direction: row;
  }
}

.router-link {
  text-decoration: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>