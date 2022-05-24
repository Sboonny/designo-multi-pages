<template>
  <a class="skip-to-content" href="#main">Skip to content</a>
  <header class="flex nav-header">
    <div>
      <router-link to="/"><img src="../assets/logo-dark.png" alt="logo" class="logo" /></router-link>
    </div>
    <nav>
      <button class="mobile-nav-toggle" aria-controls="primary-navigation">
        <span class="sr-only" aria-expanded="false" role="button">Menu</span>
      </button>
      <ul
        id="primary-navigation"
        data-visible="false"
        class="underline-indicators flex primary-navigation"
        role="list"
      >
        <li class="active">
          <router-link to="/about" class="ff-sans-cond uppercase cursor-pointer">Company</router-link>
        </li>
        <li>
          <router-link to="/locations" class="ff-sans-cond uppercase cursor-pointer">Locations</router-link>
        </li>
        <li>
          <router-link to="/contact" class="ff-sans-cond uppercase cursor-pointer">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  .nav-header {
    justify-content: space-between;
  }

  ul li a {
    font-family: "JOST", sans-serif;
    letter-spacing: 2.5px;
    margin-inline: 1em;
  }


  .mobile-nav-toggle {
    display: none;
  }

@media (max-width: 35rem) {
  .primary-navigation {
    position: fixed;
    z-index: 1000;
    inset: 0 0 0 30%;
    padding: min(20rem, 15vh) 2rem;
    transform: translateX(100%);
    transition: transform 500ms ease-in-out;
  }

  .primary-navigation[data-visible="true"] {
    transform: translateX(0);
  }
  .mobile-nav-toggle {
    display: block;
    position: absolute;
    z-index: 2000;
    right: 1rem;
    top: 1rem;
    background: transparent;
    background-image: url(../assets/Icons/icon-hamburger.svg);
    background-repeat: no-repeat;
    background-position: center;
    width: 1.5rem;
    aspect-ratio: 1;
    border: 0;
  }

  .mobile-nav-toggle[aria-expanded="true"] {
    background-image: url(../assets/Icons/icon-close.svg);
  }

  .mobile-nav-toggle:focus-visible {
    outline: 5px solid black;
    outline-offset: 5px;
  }
}
</style>
