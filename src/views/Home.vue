<template>
  <div class="home">
    <main class="grid">
      <section>
        <h1>Award-winning custom designs and digital branding solutions</h1>

        <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
          and engaging brand experiences.</p>

        <router-link to="/about">Learn more</router-link>
        <img src="../assets/Home/image-hero-phone.png" alt="">
      </section>


      <section>
        <div>
          Web Design
          View Projects
        </div>
        <div>
          App Design
          View Projects
        </div>
        <div>
          Graphic Design
          View Projects
        </div>
      </section>


      <section class="flex">
        <div>
          <svg></svg>
          Passionate
          Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We
          merge
          art, design, and technology into exciting new solutions.
        </div>
        <div>
          Resourceful
          Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value
          customer
          collaboration. It guarantees superior results that fulfill our clients’ needs.
        </div>
        <div>
          Friendly
          We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers,
          and
          we
          strive to give them the best experience a company can provide.
        </div>

      </section>

    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {

  }
})
</script>