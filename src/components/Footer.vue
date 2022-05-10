<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data: () => {
    return {
      icons: [
        {img: "../assets/Icons/icon-instagram.svg", alt: "instagram"},
        {img: "../assets/Icons/icon-facebook.svg", alt: "facebook"},
        {img: "../assets/Icons/icon-twitter.svg", alt: "twitter"},
        {img: "../assets/Icons/icon-youtube.svg", alt: "youtube"},
        {img: "../assets/Icons/icon-pinterest.svg", alt: "pinterest"}
        ] as any
    };
  },
});
</script>

<template>
  <footer class="grid footer-layout">
    <div class="logo-area">
      <img src="../assets/logo-light.png" alt="logo" class="logo" />
    </div>

    <div class="company-nav-area">
      <ul class="underline-indicators flex primary-navigation" role="list">
        <li>
          <a class="ff-sans-cond uppercase letter-spacing-2">Company</a>
        </li>
        <li>
          <a class="ff-sans-cond uppercase letter-spacing-2">Locations</a>
        </li>
        <li>
          <a class="ff-sans-cond uppercase letter-spacing-2">Contact</a>
        </li>
      </ul>
    </div>

    <div class="addres-area">
      <ol role="list">
        <li>Designo Central Office</li>
        <li>3886 Wellington Street</li>
        <li>Toronto, Ontario M9C 3J5</li>
      </ol>
    </div>
    <div class="content-area">
      <ol role="list">
        <li>Contact Us (Central Office)</li>
        <li>P : +1 253-863-8967</li>
        <li>M : contact@designo.com</li>
      </ol>
    </div>


    <div class="flex icons-area">
      <img v-for="(icon, i) in icons" :key="i" :src="icon.img" :alt="icon.alt">
    </div>
  </footer>
</template>


<style scoped>
.footer-layout {
  background-color: hsl(var(--dark-blue));
  color: white;
}


</style>