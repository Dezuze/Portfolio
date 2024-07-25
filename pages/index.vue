<script setup>
import { useState } from '#app';

const showThird = useState('showThird', () => false);

const toggleColumns = () => {
  showThird.value = !showThird.value;
return {showThird,};
};
</script>
<template>
        <div :class="{'show-third': showThird, 'container': true}">
            <div class="column column-1">
                <h2>Sign In</h2><br>
                <div style="align-self: center;">
                    <forms autocomplete="on" action="action.py" method="post">
                        <label for="email">Email</label>
                        <br>
                        <input type="email" id="email" placeholder="example@abc.com" required>
                        <br>
                        <label for="password">Password</label>
                        <br>
                        <input type="password" id="password" name="password" required>
                        <br>
                        <input type="submit" value="Login">
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
                <h2>Sign Up</h2><br>
                <forms id="signup-form" aria-autocomplete="on" action="action.py" method="post">
                    <label for="username">Username</label>
                    <br>
                    <input type="text" id="username" name="username" required>
                    <br>
                    <label for="email">Email</label>
                    <br>
                    <input type="email" id="email" placeholder="example@abc.com" required>
                    <br>
                    <label for="password">Password</label>
                    <br>
                    <input type="password" id="password1" name="password" required>
                    <br>
                    <label for="comfirm-password">Confirm password</label>
                    <br>
                    <input type="password" id="comfirm-password" name="confirm-password" required>
                    <span id="error-message" class="error-message"></span>
                    <br>
                    <input type="button" value="Sign Up">
                </forms>
            </div>
        </div>
</template>
<style scoped>
html,body{
  background-color: #191d85;
  opacity: 1;
  background-image:  repeating-radial-gradient( circle at 0 0, transparent 0, #191d85 33px ), repeating-linear-gradient( #6a139b55, #6a139b );
  background-repeat: no-repeat;
  background-size: cover; /* This makes the image cover the entire background */
  background-position: center; /* This centers the image */
  width: 100vw; /* Full viewport width */
  height: 100vh;
  overflow: hidden;
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
  padding: 5%;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, opacity 0.5s ease; /* Transition for sliding and fading */
  position: absolute; /* Positioning for sliding effect */
  width:40%;
  height: 60vh;
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
