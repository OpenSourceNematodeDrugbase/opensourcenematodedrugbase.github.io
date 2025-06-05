<template>
    <div class="intro-banner">
      <h1>Funding</h1>
      <p class="intro-text">The Open-Source Nematode DrugBase Project is generously funded by the Quintin Hogg Trust (QHT). </p>
    </div>
    <section class="header-section">
        <div class = "logoSection" style="background-color: wheat;">
            <a href="https://quintinhoggtrust.org/" class="OrgName"><h2>Quintin Hogg Trust</h2></a>
            <a href="https://quintinhoggtrust.org/" style="width: 80%;"><img src="../assets/QHT_Logo.png"></a>
        </div>
        <br>
        <div class= "logoSection" style="background-color: rgb(220, 220, 220)">
          <a href="https://africaresearchexcellencefund.org.uk/"><img src ="../assets/AREF_Logo.png"></a>
            <h3 class = "DescriptionText">Dr Abdulhakeem Sulyman (KWASU, Nigeria) joined the Team in 2025 supported by an Africa Research Excellence Fund Research Development Fellowship. </h3>
        </div>
        <div class= "logoSection" style="background-color: rgb(220, 220, 220)">
          <a href="https://africaresearchexcellencefund.org.uk/"><img src ="../assets/BPS logo.png"></a>
            <h3 class = "DescriptionText">We are delighted to share that Magdalena Ruiz Perez has been awarded a 10-week vacation studentship by the British Pharmacological Society.  </h3>
        </div>
    </section>
  </template>

  <style scoped>
  
    .logoSection {
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 13px;
        align-items: center; /* Centres vertically */
        margin-top: 10px;
    }
    
     img {
        width:80%;
        height: auto;
      }

    .OrgName h2 {
      list-style: none;
      color:black;
      margin-top: 50%;
      margin-bottom: 50%;
      font-size: clamp(8px, 3.7vw, 48px)
      
    }
    .OrgName {
       text-decoration-line: none;
    }

    .DescriptionText h3 {
      margin-top: 50%;
      margin-bottom: 50%;
      list-style: none;
      color:black;
      text-decoration-line: none;
    }
    @media screen and (max-width:1000px) {
     
      h2{
        font-size: 6vw;
      }
      h3 {
        font-size: 2.4vw;
      }
      
    }

  </style>