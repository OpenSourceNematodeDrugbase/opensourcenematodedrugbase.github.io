<template>
    <div class="intro-banner">
      <h1>Funding Partners</h1>
      <p class="intro-text">The Open-Source Nematode DrugBase Project is generously funded by the Quintin Hogg Trust (QHT).</p>
    </div>
    <section>
        <div class = "logoSection" style="background-color: wheat;">
            <a href="https://quintinhoggtrust.org/" class="OrgName"><h2>Quintin Hog Trust</h2></a>
            <a href="https://quintinhoggtrust.org/" style="margin-left: auto; position: relative;"><img src="../assets/QHT_Logo.png"></a>
        </div>
      
        <div class= "fundingPeopleSection" style="background-color: gainsboro">
            <h3>Dr Sulyman joined the team in  2025 supported by the AREF Research Development Fellowship</h3>
            <a href="https://africaresearchexcellencefund.org.uk/"><img class="fundingPeopleLogo" src ="../assets//AREF_Logo.png"></a>
        </div>
        <div class= "fundingPeopleSection" style="background-color: gainsboro">
            <h3>One of the main scientists Magdalena Ruiz Perez has been awarded a 10-week vacation studentship by the British Pharmacological Society</h3>
            <a href="https://www.bps.ac.uk/"><img class="fundingPeopleLogo" src ="../assets/BPS logo.png"></a>
        </div>
    </section>
  </template>
  

  <style scoped>
  
  
  .item-text {
    font-size: 24px;
    line-height: 0.7;
    margin-bottom: 1.5rem;
    list-style: none;
    color:black;
    padding: 15px;
  }
    .logoSection {
        display: flex;
        flex-direction: row;
        margin-left:  10%;
        margin-right: 10%;
        border-radius: 13px;
        margin-top: 2%;
        align-items: center; /* Centres vertically */
    }
    img {
        width: 18.4vw;
        max-height: 1000px;
        max-width: 1000px;
    }
    h2 {
        font-size: clamp(1.5rem, 3.2vw, 13rem);
    }
    .OrgName {
      line-height: 0.7;
      padding-top: 50%;
      padding-bottom: 50%;
      margin-left: 2.5%;
      list-style: none;
      color:black;
      padding: 15px;
      text-decoration-line: none;
    }
    .fundingPeopleSection {
      border-radius: 13px;
        margin-left: 10%;
        margin-right: 10%;
    }
  .fundingPeopleSection h3 {
     font-size: clamp(9px, 2vw, 6rem);
  }

  .fundingPeopleLogo {
    width: 15%;
    margin-top: 2%;
  }
    @media screen and (max-width:1000px) {
      img {
        width:80%;
        height: auto;
      }
      h2{
        font-size: 6vw;
      }
      
    }

  </style>