<template>
  <div class="intro-banner">
    <h1>About</h1>
    <p class="intro-text">Learn more about the Open-source Nematode DrugBase Project</p>
  </div>
  <section class="header-section">
    <h2>Project Overview</h2>
    <p class="section-text">The Open-source Nematode DrugBase project is taking a novel approach to tackle neglected diseases caused by parasitic worms (nematodes).  It is guided by open-source principles so everything is open and anyone can contribute.  Parasitic nematodes infect around 1 billion people often causing severe debilitating disease, but treatment options are limited.  Our ambition is to create a platform to look for new medicines.</p>
    <h2>The Team</h2>
    <!--Will need to ask each of the team members the email they want to be shown and their role-->
    <p class="section-text">The ONDB project team is comprised of students and academics from the University of Westminster.</p>
    <ul>
        <br>
        <li class="item-text">Gabriela Mondini Moraes - Scientist</li>
        <li class="item-text">Magdalena Ruiz Perez - Scientist</li>
        <li class="item-text">Oliver Guy – Website Developer</li>
        <li class="item-text">Azam Farooqui – Website Developer</li>
        <li class="item-text">Mateo Batol - Marketing & Outreach</li>
        <li class="item-text">Paule Abrutyte - Marketing & Outreach</li>
        <br>
        <h2>Academic Partners</h2>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/barr-alastair" target="_blank">Dr Alastair Barr</a></li>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/partridge-freddie" target="_blank">Dr Freddie Patridge</a></li>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/sengupta-dipankar" target="_blank">Dr Dipankar Sengupta</a></li>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/seyoum-teddy" target="_blank">Dr Teddy Seyoum</a></li>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/hayes-polly" target="_blank">Dr Polly Hayes</a></li>
        <li class="item-text"><a class="item-text" href="https://www.westminster.ac.uk/about-us/our-people/directory/guiliano-david" target="_blank">Dr David Guiliano</a></li>

        <p class="section-text">Dr Abdulhakeem Sulyman (KWASU, Nigeria) joined the project in 2025 supported by an Africa Research Excellence Fund Research Development Fellowship. </p>

    </ul>
  </section>
</template>

<style scoped>
ul{
  text-align: center;
  padding: 0;
  margin: 0;
}

.item-text {
  font-size: clamp(5px, 3.5vw, 28px);
  line-height: 0.7;
  margin-bottom: 1.5rem;
  list-style: none;
  color:black;
  text-decoration: underline;
  padding: 15px;
}
@media screen and (max-width:1000px) {  
  .item-text{
    line-height: 1.5;
  }
}
</style>
