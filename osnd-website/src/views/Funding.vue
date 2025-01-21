<template>
    <div class="intro-banner">
      <h1>Funding Partners</h1>
      <p class="intro-text">The Open-Source Nematode DrugBase Project is generously funded by the Quintin Hogg Trust (QHT) and the Africa Research Excellence Fund (AREF). </p>
    </div>
    <section class="header-section">
        <div class = "logoSection" style="background-color: wheat;">
            <a href="https://quintinhoggtrust.org/" class="OrgName"><h2>Quintin Hog Trust</h2></a>
            <a href="https://quintinhoggtrust.org/"><img src="../assets/QHT_Logo.png"></a>
        </div>
        <br>
        <div class= "logoSection" style="background-color: rgb(176, 238, 47)">
            <a href="https://africaresearchexcellencefund.org.uk/" class="OrgName"><h2>Africa Research Excellence Fund</h2></a>
            <a href="https://africaresearchexcellencefund.org.uk/"><img src ="../assets//AREF_Logo.png"></a>
        </div>
    </section>
  </template>
  
  <style scoped>
  
  .item-text {
    font-size: 28px;
    line-height: 0.7;
    margin-bottom: 1.5rem;
    list-style: none;
    color:black;
    text-decoration: underline;
    padding: 15px;
  }
    .logoSection {
        display: flex;
        flex-direction: row;
        margin-left: 10%;
        margin-right: 10%;
        border-radius: 13px;
    }
    img {
        width: 500px;
    }
    h2 {
        margin-top: 50%;
    }
  </style>