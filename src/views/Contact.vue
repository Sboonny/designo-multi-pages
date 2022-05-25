<template name="contact">
  <main id="main">
    <section aria-labelledby="contact-title" class="flex flex-direction">
      <div>
        <h1 id="contact-title">Contact us</h1>
        <p>Ready to take it to the next level? Let’s talk about your project or idea and find out how
          we can help your business grow. If you are looking for unique digital experiences that’s
          relatable to your users, drop us a line.</p>
      </div>
      <form id="form">
        <fieldset>
          <legend>Your Info</legend>


          <label>Enter Your First Name: <input type="text" name="name" required /></label>
          <label>Enter Your Email: <input type="email" name="email" required /></label>
          <label>Your Message:
            <textarea name="bio" rows="3" cols="30"></textarea>
          </label>
        </fieldset>
        <input type="submit" value="Submit" />
      </form>
    </section>
    <section class="flex flex-direction">
      <h2>Canada</h2>
      <router-link to="/locations/#Canada">See location</router-link>

      <h2>Australia</h2>
      <router-link to="/locations/#Australia">See location</router-link>

      <h2>United Kingdom</h2>
      <router-link to="/locations/#United Kingdom">See location</router-link>
    </section>
  </main>
</template>