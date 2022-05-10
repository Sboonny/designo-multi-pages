<template>
  <footer class="grid footer-layout">
    <div class="logo-area">
      <img src="../assets/logo-light.png" alt="logo" class="logo" />
    </div>

    <div class="company-nav-area">
      <ul class="underline-indicators flex primary-navigation" role="list">
        <li>
          <a class="ff-sans-cond uppercase">Company</a>
        </li>
        <li>
          <a class="ff-sans-cond uppercase">Locations</a>
        </li>
        <li>
          <a class="ff-sans-cond uppercase">Contact</a>
        </li>
      </ul>
    </div>

    <div class="address-area">
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
      <img src="../assets/Icons/icon-instagram.svg" alt="instagram" />
      <img src="../assets/Icons/icon-facebook.svg" alt="facebook" />
      <img src="../assets/Icons/icon-twitter.svg" alt="twitter" />
      <img src="../assets/Icons/icon-youtube.svg" alt="youtube" />
      <img src="../assets/Icons/icon-pinterest.svg" alt="pinterest" />
    </div>
  </footer>
</template>


<style>
.footer-layout {
  background-color: hsl(var(--dark-blue));
  color: white;
  place-items: center;
}
@media (min-width: 35em) {
  .logo-area {
   grid-area: logo;
  }
  .company-nav-area {
   grid-area: nav;
  }
  .address-area {
    grid-area: address;
  }
  .content-area {
    grid-area: contentarea;
  }
  .icons-area {
    grid-area: icons;
  }
  
  .footer-layout {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "logo . nav nav"
                          "address contentarea . icons";
  }
}

</style>