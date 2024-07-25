<template>
  <div class="body h-screen">
          <div :class="showThird ? 'show-third container' : 'container'">
            <div class="column column-1">
                <h2 class="text-white font-bold text-3xl font-sans text-center">Sign In</h2><br>
                <div class="h-full gap-5 mt-5 p-4">
                    <forms class="flex flex-col w-full mt-5" autocomplete="on" action="action.py" method="post">
                        <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="email" id="email" placeholder="Email" required>
                        <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="password" name="password" placeholder="Password" required>
                        <button class="border-slate-300 border-2 mx-20 mt-5 bg-slate-200 rounded-3xl text-slate-800 placeholder:text-white text-center hover:bg-transparent hover:text-white" value="login">Login</button>
                    </forms>
                </div>
            </div>
            <div class="column column-2">
                <button class="sign-up" @click="toggleColumns">
                    Sign Up
                </button>
                <button class="log-in" @click="toggleColumns">
                    Login
                </button>
            </div>
            <div class="column column-3">
                <h2 class="text-white font-bold text-3xl font-sans text-center">Sign Up</h2><br>
                <forms class="flex flex-col w-full mt-5" id="signup-form" aria-autocomplete="on" action="action.py" method="post">
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="text" id="username" placeholder="Username" name="username" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="email" id="email" placeholder="Email" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="password1" name="password" placeholder="Password" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="comfirm-password" placeholder="Comfirm Password" name="confirm-password" required>
                    <span id="error-message" class="error-message"></span>
                    <button class="justify-self-center border-slate-300 border-2 mx-20 mt-5 bg-slate-200 rounded-3xl text-slate-800 placeholder:text-white text-center hover:bg-transparent hover:text-white" value="Signup">Sign Up</button>
                </forms>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useState } from '#app';

const showThird = useState('showThird', () => false);

const toggleColumns = () => {
  showThird.value = !showThird.value;
return {showThird,};
};
</script>


<style scoped>
.body{
  background-color: #191d85;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #191d85 33px ), repeating-linear-gradient( #6a139b55, #6a139b );
  background-repeat: repeat;
  background-size: cover; /* This makes the image cover the entire background */
  background-position: center; /* This centers the image */
  width: 100vw; /* Full viewport width */
  height: 100vh;
  overflow:hidden;
}

.container {
  margin: 10%;
  width: 80%;
  height: 80%;
  justify-content: center;
  display: grid;
  gap:10 px;
  grid-template-columns: auto auto auto;
  position: relative;
 
}

.column {
  padding: 3% 5%;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border: 1px #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease, opacity 0.5s ease; /* Transition for sliding and fading */
  position: absolute; /* Positioning for sliding effect */
  width:40%;
  height: 60vh;
  border-radius: 15px;
}
.column-1 {
  left: 10%; /* Initial position of first column */
}
.column-2 {
  left: 50%; /* Initial position of second column */
  justify-content: center;
  align-content: center;
}
.column-3 {
  left: 90%; /* Initial position of third column */
  opacity: 0; /* Initially hidden */
  pointer-events: none; /* Disable interactions when hidden */
}

.show-third .column-1 {
  transform: translateX(-100%); /* Slide out the first column */
  opacity: 0; /* Fade out the first column */
}
.show-third .column-2 {
  transform: translateX(-100%); /* Slide the second column to the left */
}

.show-third .column-3 {
  transform: translateX(-100%); /* Slide the third column into view */
  opacity: 1; /* Fade in the third column */
  pointer-events: all; /* Enable interactions when visible */
}
.sign-up{
  opacity:1;
}
.log-in{
  opacity:0;
  z-index:1;
}
.show-third .sign-up{
  opacity:0;
}
.show-third .log-in{
  opacity:1;
}
</style>
