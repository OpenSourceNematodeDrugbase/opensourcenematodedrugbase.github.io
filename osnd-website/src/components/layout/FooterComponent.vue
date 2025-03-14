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
        <a href="https://africaresearchexcellencefund.org.uk/" target="_blank">
          <img class="AREFLogo" src="@/assets/AREF_Logo.png" alt="AREF">
        </a>
      </div>
      </div>

      <div class="socials">
        <a href="https://www.facebook.com/people/Open-source-Nematode-DrugBase/61572548505626/" target="_blank">
          <img class="social-logo" src="@/assets/Facebook_logo_(square).png" alt="Facebook_Logo">
        </a>
        <a href="https://www.instagram.com/ondbuniwestminster/#" target="_blank">
          <img class="social-logo" src="@/assets/Instagram_Logo.png" alt="Instagram_Logo">
        </a>
        <a href="https://www.linkedin.com/company/open-source-nematode-drugbase/about/" target="_blank">
          <img class="social-logo" src="@/assets/LinkedIn_Logo.png" alt="LinkedIn_Logo">
        </a>
        <a href="https://x.com/ONDBwestminster" target="_blank">
          <img class="social-logo" src="@/assets/X_logo.jpg" alt="X_Logo">
        </a>
        <a href="https://www.tiktok.com/@ondb_uow" target="_blank">
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
import { ref, onMounted } from 'vue';
import { getAuth, onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth';
import { useRouter } from "vue-router";

export default {
  name: 'FooterComponent',
  setup() {
    const isAuthenticated = ref(false);
    const auth = getAuth();
    const router = useRouter();

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        isAuthenticated.value = !!user;
      });
    });

    const signOut = async () => {
      try {
        await firebaseSignOut(auth);
        isAuthenticated.value = false;
        router.push({ path: '/' });
      } catch (error) {
        console.error('Error signing out:', error);
      }
    };

    return {
      isAuthenticated,
      signOut,
    };
  },
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

.links {
  position: absolute;
  top: 150px;
  right: 20px;
  margin: 10px; /* Adjusts spacing from the edges */
  list-style-type: none;
  padding: 10px, 10px;
  text-align: right; /* Right justify the text */
}

.social-logo {
  max-width: 60px; /* Adjust size of social logos */
  padding-left: 10px;
  padding-right: 10px;
}

.UoWLogo {
  max-width: 350px; /* Adjust size if needed */
}

.QHTLogo {
  max-width: 180px; /* Adjust size if needed */
}

.AREFLogo {
  max-width: 150px; /* Adjust size if needed */
  padding-top: 5px;
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
}
</style>
