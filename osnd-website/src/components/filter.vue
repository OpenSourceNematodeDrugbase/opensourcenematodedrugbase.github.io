<template>
   <div id="FilterBackground" >
    <ul>
        <li>
            <h3>Type</h3>
            <select name="Box">
                <option value="0" >all</option>
                <option value="1" >Documents</option>
                <option value="2" >Protiens</option>
            </select>
            
        </li>
        <li>
            <h3>Option Two</h3>
            <select name="Box">
                <option value="1" >yes</option>
            </select>
        </li>
    </ul>
   </div>
  </template>

<style scoped>
#FilterBackground{
    position: relative;
    background-color: #afedf1;
    border-radius: 12px;
    margin-right: 75%;
    top: 5vw;
}
li{
    display: flex;
    flex-direction: row;
    margin-left: 10%;
    align-items: center; /* Centres vertically */
}
h3{
    padding-right: 5%;
}

</style>