<template>
  <div class="intro-banner">
    <h1>Welcome to the Open-Source Nematode DrugBase Project </h1>
    <p class="intro-text">Our ambition is to introduce a platform to tackle neglected diseases caused by parasitic worms (nematodes).</p>
  </div>
  <section class="header-section">
    <img class="image logo-img" src="@/assets/ONDB logo.png" alt="ONDB_Logo">
    <hr>
  </section>
  <section class="header-section">
    <h2>The Platform</h2>
    <p class="section-text">The open-access project aims to enable discovery of medicines for neglected diseases caused by nematodes (parasitic worms).</p>
    <p class="section-text">The project will launch here in 2025.</p>
  </section>
  <section class="header-section">
    <h2>Mission Statement</h2>
    <p class="section-text">Our mission is to combat neglected diseases caused by parasitic nematodes through innovative research and collaborative efforts. By developing the ONDB, we aim to bridge the gap between nematode gene/protein databases and drug-like chemical databases, creating a comprehensive platform for discovering new medicines.</p>
    <img class="image cavendish-img" src="@/assets/cavendish-exterior.jpeg" alt="Cavendish Exterior">
    <p class="section-text">This Quintin Hogg Trust-funded project, driven by University of Westminster students and open to global contributions, will provide valuable resources and foster hands-on learning experiences.</p>
    <p class="section-text">We are committed to enhancing student employability, promoting engagement with real-world problems, and contributing to the global fight against parasitic diseases.</p>
    <img class="image microscope-img" src="@/assets/ousa-chea-gKUC4TMhOiY-unsplash.jpeg" alt="Microscope">
    <p class="section-text">Our work aligns with the UN Sustainable Development Goals, specifically goal 3 (Ensure healthy lives and promote well-being for all at all ages) and goal 10 (Reduce inequality within and among countries).</p>
    <img class="image usnd-img" src="@/assets/E_SDG_logo_UN_emblem_square_trans_WEB.jpeg" alt="USND">
  </section>
  <section class="header-section">
    <h2>Want to get involved or have questions?</h2>
    <p class="section-text">If you are interested in the project's developments, or would like to provide insight/expertise, we would be delighted to hear from you. Please see our <router-link to="/contact">contact</router-link> page for details.</p>
  </section>
</template>

<style>

/* General styling */
body {
  font-family: 'Helvetica Neue', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
  color: #333;
  text-wrap: balance;
}

h1, h2 {
  color: #2a2a2a;
  font-weight: 600;
  line-height: 1.4;
  font-family: 'Helvetica Neue', sans-serif;
}

.intro-banner {
  text-align: center;
  padding: 3rem;
  background-color: #ffffff;
  border-bottom: 1px solid #ddd;
}

.intro-text {
  font-size: 24px;
  max-width: 950px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Header section styling */
.header-section {
  margin: 0 auto;
  max-width: 1050px;
}

.header-section h2 {
  font-size: 42px;
  margin: 25px, 0px;
}

.section-text {
  font-size: 32px;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
}

/* Image styling */
.image {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
}

</style>

<style scoped>

.cavendish-img {
  max-width: 650px;
}

.microscope-img {
  max-width: 700px;
}

.usnd-img {
  max-width: 500px;
}

.logo-img {
  max-width: 500px;
  padding-top: 50px;
  padding-bottom: 50px;
}


</style>
