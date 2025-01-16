<template>
  <footer class="footer">
    <div class="container">
      <!-- Left-aligned Logos -->
      <div class="footer-logos">
        <a href="https://www.westminster.ac.uk/" target="_blank">
          <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="UoW">
        </a>
        <a href="https://quintinhoggtrust.org/" target="_blank">
          <img class="QHTLogo" src="@/assets/QHT_Logo.png" alt="QHT">
        </a>
        <a href="https://africaresearchexcellencefund.org.uk/" target="_blank">
          <img class="AREFLogo" src="@/assets/AREF_Logo.png" alt="AREF">
        </a>
      </div>

      <!-- Right-aligned Social Icons -->
      <div class="socials">
        <a href="https://www.facebook.com/" target="_blank">
          <img class="social-logo" src="@/assets/Facebook_logo_(square).png" alt="Facebook_Logo">
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img class="social-logo" src="@/assets/Instagram_Logo.png" alt="Instagram_Logo">
        </a>
        <a href="https://www.linkedin.com/" target="_blank">
          <img class="social-logo" src="@/assets/LinkedIn_Logo.png" alt="LinkedIn_Logo">
        </a>
        <a href="https://x.com/" target="_blank">
          <img class="social-logo" src="@/assets/X_logo.jpg" alt="X_Logo">
        </a>
        <a href="https://www.tiktok.com/" target="_blank">
          <img class="social-logo" src="@/assets/TikTok_Logo.png" alt="TikTok_Logo">
        </a>
        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
          <img class="social-logo" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  background-color: #bad1ce;
  color: white;
  padding: 20px;
  border-radius: 20px;
}

.container {
  display: flex;
  justify-content: space-between; /* Align logos on the left and socials on the right */
  align-items: center;
  flex-wrap: nowrap; /* Prevent wrapping */
}

.footer-logos {
  display: flex;
  gap: 20px; /* Space between the main logos */
  justify-content: flex-start; /* Align logos to the left */
}

.socials {
  display: flex;
  gap: 30px; /* Space between social logos */
  justify-content: flex-end; /* Align socials to the right */
}

.social-logo {
  max-width: 60px; /* Adjust size of social logos */
}

.UoWLogo {
  max-width: 350px; /* Adjust size if needed */
}

.QHTLogo {
  max-width: 180px; /* Adjust size if needed */
}

.AREFLogo {
  max-width: 150px; /* Adjust size if needed */
  padding-top: 10px;
}
</style>
