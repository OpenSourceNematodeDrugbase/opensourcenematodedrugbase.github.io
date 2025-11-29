import { ref, onMounted, onUnmounted } from 'vue';
const BigScreen = ref(false);
const menuOpened = ref(false);


function checkScreenSize() { //Checks screen size and does actions
    BigScreen.value = window.innerWidth >= 951; //Removes the nav bar if the screen is too small
    if (menuOpened.value == true) 
    {
        if ( window.innerWidth <= 768)
            {
                phoneMenuOpened();
            } //Turns off if the height is too big.
    }
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

//When Hamburger menu opened
export function phoneMenuOpened()
{
    menuOpened.value = !menuOpened.value;
    console.log(menuOpened.value);
    if (menuOpened.value == true)
    {
        document.body.style.overflow = 'hidden';
        document.getElementById("HamburgerImg").src = "/src/assets/Cross.svg"
    }
    else 
    {
        document.body.style.overflow = 'auto';
        document.getElementById("HamburgerImg").src = "/src/assets/Hamburger.svg"
    }
}
export function isMenuOpened()
{
    return menuOpened;
}

