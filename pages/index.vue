<template>
  <div class="body h-screen">
          <div :class="showThird ? 'show-third container' : 'container'">
            <div class="column column-1">
                <h2 class="text-white font-bold text-3xl font-sans text-center">Sign In</h2>
                <div class="h-full gap-5 mt-5 p-4">
                    <forms class="flex flex-col w-full mt-5" autocomplete="on" action="action.py" method="post">
                        <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="email" id="email" placeholder="Email" required>
                        <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="password" name="password" placeholder="Password" required>
                        <button class="border-slate-300 border-2 mx-20 mt-5 bg-slate-200 rounded-3xl text-slate-800 placeholder:text-white text-center hover:bg-transparent hover:text-white  duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" value="login">Login</button>
                    </forms>
                </div>
            </div>
            <div class="column column-2 flex flex-col items-center">
              <svg width="100%" height="100%" viewBox="0 0 350 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_9_2)">
                <circle cx="175" cy="173" r="171" fill="#36FF32"/>
                <circle cx="175" cy="173" r="171" fill="url(#paint0_linear_9_2)" fill-opacity="0.7"/>
                </g>
                <g style="mix-blend-mode:plus-darker" filter="url(#filter1_i_9_2)">
                <path d="M147.027 222.962C147.027 228.496 146.661 233.216 145.929 237.122C145.278 241.028 144.342 244.202 143.121 246.644C141.9 249.085 140.395 250.875 138.604 252.015C136.896 253.154 135.024 253.724 132.989 253.724C131.443 253.724 129.734 253.195 127.862 252.137C125.991 251.079 124.2 249.777 122.491 248.23C120.864 246.684 119.48 245.097 118.341 243.47C117.283 241.842 116.754 240.418 116.754 239.197C116.754 238.383 116.835 237.854 116.998 237.61C117.242 237.448 117.527 237.366 117.853 237.366C118.259 237.448 118.707 237.57 119.195 237.732C119.765 237.895 120.375 237.977 121.026 237.977C123.305 237.977 124.933 236.552 125.909 233.704C126.967 230.774 127.496 226.136 127.496 219.788V180.481H114.557C113.255 180.481 112.034 180.075 110.895 179.261C109.837 178.447 108.901 177.43 108.087 176.209C107.273 174.988 106.622 173.646 106.134 172.181C105.727 170.716 105.523 169.332 105.523 168.03C105.523 166.647 105.808 165.467 106.378 164.49C107.029 163.514 108.006 163.025 109.308 163.025H127.496V81.7266C118.707 82.2962 110.691 83.5983 103.448 85.6328C96.2054 87.6673 89.9798 90.7598 84.7715 94.9102C79.5632 99.0605 75.4941 104.472 72.5645 111.146C69.7161 117.737 68.292 125.957 68.292 135.804C68.292 140.117 68.6989 144.023 69.5127 147.522C70.4079 150.94 71.5472 154.033 72.9307 156.8C74.3141 159.567 75.8197 162.008 77.4473 164.124C79.1562 166.24 80.8245 168.112 82.4521 169.739C83.8356 169.332 84.8122 169.495 85.3818 170.228C85.9515 170.96 86.2363 171.977 86.2363 173.279C86.2363 174.907 85.8701 176.616 85.1377 178.406C84.4867 180.115 83.5915 181.702 82.4521 183.167C81.3128 184.55 80.0107 185.73 78.5459 186.707C77.1624 187.602 75.7383 188.05 74.2734 188.05C73.6224 188.05 72.9714 187.968 72.3203 187.806C71.7507 187.643 71.1403 187.277 70.4893 186.707C68.6989 185.405 66.5423 183.289 64.0195 180.359C61.4967 177.348 59.096 173.646 56.8174 169.251C54.5387 164.856 52.5856 159.852 50.958 154.236C49.3304 148.54 48.5166 142.396 48.5166 135.804C48.5166 111.797 56.1663 93.486 71.4658 80.8721C86.8467 68.2581 109.511 61.9512 139.459 61.9512C141.738 61.9512 144.586 61.9919 148.004 62.0732C151.503 62.0732 155.206 62.0732 159.112 62.0732C163.019 62.0732 166.965 62.1139 170.953 62.1953C175.022 62.2767 178.766 62.3174 182.184 62.3174C185.683 62.3174 188.653 62.3581 191.095 62.4395C193.618 62.4395 195.326 62.4395 196.222 62.4395C197.442 62.4395 198.46 62.3581 199.273 62.1953C200.087 61.9512 200.738 61.707 201.227 61.4629C201.796 61.2188 202.203 61.0153 202.447 60.8525C202.773 60.6084 203.058 60.4863 203.302 60.4863C203.709 60.4863 204.116 60.7712 204.522 61.3408C204.929 61.8291 205.296 62.4801 205.621 63.2939C205.947 64.0264 206.191 64.8809 206.354 65.8574C206.598 66.834 206.72 67.8105 206.72 68.7871C206.72 70.252 206.476 71.7982 205.987 73.4258C205.58 74.972 204.889 76.3962 203.912 77.6982C202.936 78.9189 201.715 79.9362 200.25 80.75C198.867 81.5638 197.198 81.9707 195.245 81.9707C194.513 81.9707 193.17 81.9707 191.217 81.9707C189.264 81.8893 186.904 81.8486 184.137 81.8486C181.451 81.7673 178.481 81.7266 175.226 81.7266C171.97 81.6452 168.674 81.6045 165.338 81.6045C162.083 81.5231 158.868 81.4824 155.694 81.4824C152.521 81.401 149.632 81.3197 147.027 81.2383V163.025H178.277C179.579 162.049 180.556 161.805 181.207 162.293C181.858 162.781 182.224 163.676 182.306 164.979C182.468 166.281 182.387 167.827 182.062 169.617C181.817 171.408 181.37 173.117 180.719 174.744C180.149 176.29 179.457 177.633 178.644 178.772C177.83 179.912 176.935 180.481 175.958 180.481H147.027V222.962Z" fill="#46CB44"/>
                </g>
                <g style="mix-blend-mode:multiply" filter="url(#filter2_d_9_2)">
                <path d="M213.379 240.77C213.379 245.197 213.672 248.973 214.258 252.098C214.779 255.223 215.527 257.762 216.504 259.715C217.48 261.668 218.685 263.1 220.117 264.012C221.484 264.923 222.982 265.379 224.609 265.379C225.846 265.379 227.214 264.956 228.711 264.109C230.208 263.263 231.641 262.221 233.008 260.984C234.31 259.747 235.417 258.478 236.328 257.176C237.174 255.874 237.598 254.734 237.598 253.758C237.598 253.107 237.533 252.684 237.402 252.488C237.207 252.358 236.979 252.293 236.719 252.293C236.393 252.358 236.035 252.456 235.645 252.586C235.189 252.716 234.701 252.781 234.18 252.781C232.357 252.781 231.055 251.642 230.273 249.363C229.427 247.02 229.004 243.309 229.004 238.23V206.785H239.355C240.397 206.785 241.374 206.46 242.285 205.809C243.132 205.158 243.88 204.344 244.531 203.367C245.182 202.391 245.703 201.316 246.094 200.145C246.419 198.973 246.582 197.866 246.582 196.824C246.582 195.717 246.354 194.773 245.898 193.992C245.378 193.211 244.596 192.82 243.555 192.82H229.004V127.781C236.035 128.237 242.448 129.279 248.242 130.906C254.036 132.534 259.017 135.008 263.184 138.328C267.35 141.648 270.605 145.978 272.949 151.316C275.228 156.59 276.367 163.165 276.367 171.043C276.367 174.493 276.042 177.618 275.391 180.418C274.674 183.152 273.763 185.626 272.656 187.84C271.549 190.053 270.345 192.007 269.043 193.699C267.676 195.392 266.341 196.889 265.039 198.191C263.932 197.866 263.151 197.996 262.695 198.582C262.24 199.168 262.012 199.982 262.012 201.023C262.012 202.326 262.305 203.693 262.891 205.125C263.411 206.492 264.128 207.762 265.039 208.934C265.951 210.04 266.992 210.984 268.164 211.766C269.271 212.482 270.41 212.84 271.582 212.84C272.103 212.84 272.624 212.775 273.145 212.645C273.6 212.514 274.089 212.221 274.609 211.766C276.042 210.724 277.767 209.031 279.785 206.688C281.803 204.279 283.724 201.316 285.547 197.801C287.37 194.285 288.932 190.281 290.234 185.789C291.536 181.232 292.188 176.316 292.188 171.043C292.188 151.837 286.068 137.189 273.828 127.098C261.523 117.007 243.392 111.961 219.434 111.961C217.611 111.961 215.332 111.993 212.598 112.059C209.798 112.059 206.836 112.059 203.711 112.059C200.586 112.059 197.428 112.091 194.238 112.156C190.983 112.221 187.988 112.254 185.254 112.254C182.454 112.254 180.078 112.286 178.125 112.352C176.107 112.352 174.74 112.352 174.023 112.352C173.047 112.352 172.233 112.286 171.582 112.156C170.931 111.961 170.41 111.766 170.02 111.57C169.564 111.375 169.238 111.212 169.043 111.082C168.783 110.887 168.555 110.789 168.359 110.789C168.034 110.789 167.708 111.017 167.383 111.473C167.057 111.863 166.764 112.384 166.504 113.035C166.243 113.621 166.048 114.305 165.918 115.086C165.723 115.867 165.625 116.648 165.625 117.43C165.625 118.602 165.82 119.839 166.211 121.141C166.536 122.378 167.09 123.517 167.871 124.559C168.652 125.535 169.629 126.349 170.801 127C171.908 127.651 173.242 127.977 174.805 127.977C175.391 127.977 176.465 127.977 178.027 127.977C179.59 127.911 181.478 127.879 183.691 127.879C185.84 127.814 188.216 127.781 190.82 127.781C193.424 127.716 196.061 127.684 198.73 127.684C201.335 127.618 203.906 127.586 206.445 127.586C208.984 127.521 211.296 127.456 213.379 127.391V192.82H188.379C187.337 192.039 186.556 191.844 186.035 192.234C185.514 192.625 185.221 193.341 185.156 194.383C185.026 195.424 185.091 196.661 185.352 198.094C185.547 199.526 185.905 200.893 186.426 202.195C186.882 203.432 187.435 204.507 188.086 205.418C188.737 206.329 189.453 206.785 190.234 206.785H213.379V240.77Z" fill="#1F510D"/>
                </g>
                <defs>
                <filter id="filter0_d_9_2" x="0" y="2" width="350" height="350" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_2" result="shape"/>
                </filter>
                <filter id="filter1_i_9_2" x="48.5166" y="60.4863" width="158.203" height="197.237" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.33 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9_2"/>
                </filter>
                <filter id="filter2_d_9_2" x="164.625" y="110.789" width="134.562" height="165.59" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="3" dy="7"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9_2"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9_2" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_9_2" x1="175" y1="344" x2="175" y2="2" gradientUnits="userSpaceOnUse">
                <stop offset="0.12"/>
                <stop offset="0.515" stop-color="#2B9029"/>
                </linearGradient>
                </defs>
              </svg>
              <button id="Sign-up" class="sign-up ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 flex w-100 hover:shadow-xl focus:shadow-none w-fit h-fit mt-2 items-center text-white border-4 rounded-3xl font-bold text-xl font-sans" @click="toggleColumns">
                  <span class="pl-2" v-if="swap">{{ textDiv }}</span>
                  <span class="-ml-2" v-if="swap"><svg width="50px" height="50px" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg></span>
                  <span class="-ml-2" v-if="!swap"><svg width="50px" height="50px" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg ></span>
                  <span class="pr-2" v-if="!swap">{{ textDiv }}</span>
              </button>
                
            </div>
            <div class="column column-3">
                <h2 class="text-white font-bold text-3xl font-sans text-center">Sign Up</h2>
                <forms class="flex flex-col w-full mt-9" id="signup-form" aria-autocomplete="on" action="action.py" method="post">
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="text" id="username" placeholder="Username" name="username" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="email" id="email" placeholder="Email" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="password1" name="password" placeholder="Password" required>
                    <input class="border-slate-300 border-2 m-2 bg-transparent rounded-3xl text-white placeholder:text-white text-center" type="password" id="comfirm-password" placeholder="Comfirm Password" name="confirm-password" required>
                    <span id="error-message" class="error-message"></span>
                    <button class="justify-self-center border-slate-300 border-2 mx-20 mt-5 bg-slate-200 rounded-3xl text-slate-800 placeholder:text-white text-center hover:bg-transparent hover:text-white duration-500 ease-in-out hover:-translate-y-1 hover:scale-110" value="Signup">Sign Up</button>
                </forms>
            </div>
        </div>
    </div>
</template>


<script setup>
import { useState } from '#app';
import { ref } from 'vue';

const showThird = useState('showThird', () => false);
const textDiv = ref('Sign up');
const swap = ref(true);

const toggleColumns = () => {
  showThird.value = !showThird.value;
  swap.value = !swap.value;
  if (showThird.value === true) {
    textDiv.value = 'Log In'
  } else {
    textDiv.value = 'Sign Up'
  }
return {showThird,textDiv};
};

const Loginbtn = () =>{

}
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


</style>
