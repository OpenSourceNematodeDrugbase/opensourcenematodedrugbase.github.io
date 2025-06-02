<template>
  <footer class="footer">
    <div class="container">
      <!-- Left-aligned Logos -->
      <div class="footer-logos">
        <a href="https://www.westminster.ac.uk/" target="_blank">
          <img class="UoWLogo" src="@/assets/UoW_Logo.png" alt="UoW">
        </a>
        <div class="footer-logos" tag="FundingPartners">
        <a href="https://quintinhoggtrust.org/" target="_blank">
          <img class="QHTLogo" src="@/assets/QHT_Logo.png" alt="QHT">
        </a>

      </div>
      </div>
       <!-- Right-aligned Social Icons -->

       <div class="socials">
        <a href="https://www.facebook.com/profile.php?id=61572548505626" target="_blank">
          <img class="social-logo" src="@/assets/Facebook_logo_(square).png" alt="Facebook_Logo">
        </a>
        <a href="https://www.youtube.com/channel/UC5s6DPuDbR0sbBaKA92wj8w" target="_blank">
          <img class="social-logo" src="@\assets\Youtube_logo.png" alt="YouTube Logo">
        </a>
        <a href="https://www.instagram.com/ondbuniwestminster/" target="_blank">
          <img class="social-logo" src="@/assets/Instagram_Logo.png" alt="Instagram_Logo">
        </a>
        <a href="https://www.linkedin.com/company/open-source-nematode-drugbase/posts/" target="_blank">
          <img class="social-logo" src="@/assets/LinkedIn_Logo.png" alt="LinkedIn_Logo">
        </a>
        <a href="https://x.com/ONDBwestminster" target="_blank">
          <img class="social-logo" src="@/assets/X_logo.jpg" alt="X_Logo">
        </a>
        <a href="https://www.tiktok.com/@ondb6?_t=ZG-8tiW8Gi20cy&_r=1" target="_blank">
          <img class="social-logo" src="@/assets/TikTok_Logo.png" alt="TikTok_Logo">
        </a>
        <a href="https://github.com/OpenSourceNematodeDrugbase" target="_blank">
          <img class="social-logo" src="@/assets/GitHub_Logo.png" alt="GitHub_Logo">
        </a>
      </div>
      
    </div>

    <div class="links">
      <li v-if="isAuthenticated"><router-link to="/user-dashboard">User Dashboard</router-link></li>

      <li v-if="!isAuthenticated"><router-link to="/sign-in">Sign In</router-link></li>
      <li v-else><a href="#" @click="signOut">Sign Out</a></li>
    <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
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
  background-color: #CEE1F2;
  color: white;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}

.links
{
  margin: 10px; /* Adjusts spacing from the edges */
  list-style-type: none;
}

.social-logo {
  max-width: 60px; /* Adjust size of social logos */
}

.UoWLogo {
  max-width: 350px;
  width: 100%; /* Adjust size if needed */
}

.QHTLogo {
  max-width: 180px; /* Adjust size if needed */
}

@media screen and (min-width:1100px) { /*When viewed on Laptop */
  .footer-logos {
  display: flex;
  gap: 20px; /* Space between the main logos */
  justify-content: flex-start; /* Align logos to the left */
}
.container {
  display: flex;
  justify-content: space-between; /* Align logos on the left and socials on the right */
  align-items: center;
  flex-wrap: nowrap; /* Prevent wrapping */
}
.socials {
  display: flex;
  gap: 30px; /* Space between social logos */
  justify-content: flex-end; /* Align socials to the right */
}
.links {
position: absolute;
top: 150px;
left: 20px;

}

}

@media screen and (max-width:1100px) /*When viewed on Phone */
{
  #FundingPartners{
    display: flex;
    gap: 20px; /* Space between the main logos */
    justify-content: flex-start; /* Align logos to the left */
  }
  .social-logo {
  max-width: 45px;
  padding-right: 15px;
  padding-left: 15px;
  padding-top: 10px;
   /* Adjust size of social logos */
}
.UoWLogo {
  width: 80%;
}

}



</style>
