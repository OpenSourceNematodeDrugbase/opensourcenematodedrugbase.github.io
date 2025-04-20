import { ref, onMounted, onUnmounted } from 'vue'; //Imports vue components 
const BigScreen = ref(false);


function checkScreenSize() { //Checks screen size and does actions
    BigScreen.value = window.innerWidth >= 768; //Removes the nav bar if the screen is too small
    console.log("Hi");
  }

export function findScreenSize() { //Makes a global function that can be used anywhere
    
    onMounted(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize); //Add a JS event lisenter that triggers the size changed function
    });
    onUnmounted(() => { //When page exit
    window.removeEventListener('resize', checkScreenSize); //Removes event listeners when user exists the page
    });

    return {BigScreen};
};

const menuOpened = ref(false);

export function phoneMenuOpened()
{
    menuOpened.value = !menuOpened.value;
    console.log(menuOpened.value);
}
export function isMenuOpened()
{
    return menuOpened;
}