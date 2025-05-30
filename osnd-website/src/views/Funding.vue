<template>
    <div class="intro-banner">
      <h1>Funding Partners</h1>
      <p class="intro-text">The Open-Source Nematode DrugBase Project is generously funded by the Quintin Hogg Trust (QHT).</p>
    </div>
    <section>
        <div class = "logoSection" style="background-color: wheat;">
            <a href="https://quintinhoggtrust.org/" class="OrgName"><h2>Quintin Hog Trust</h2></a>
            <a href="https://quintinhoggtrust.org/"><img src="../assets/QHT_Logo.png"></a>
        </div>
        <br>
        <div class= "fundingPeopleSection" style="background-color: rgb(176, 238, 47)">
            <h2>Dr Sullyman joined the team in  2025 supported by the AREF Research Development Fellowship</h2>
            <a href="https://africaresearchexcellencefund.org.uk/"><img class="fundingPeopleLogo" src ="../assets//AREF_Logo.png"></a>
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
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 13px;
        align-items: center; /* Centres vertically */
    }
    img {
        width: 500px;
      
     
    }
    h2 {
        margin-top: 50%;
        font-size: 48px;
    }
    .OrgName {
      line-height: 0.7;
      margin-bottom: 1.5rem;
      list-style: none;
      color:black;
      padding: 15px;
      text-decoration-line: none;
    }

  .fundingPeopleSection h2 {
    font-size: 3vw;
    margin-top: 0%;
  }

  .fundingPeopleLogo {
    width: 35%;
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