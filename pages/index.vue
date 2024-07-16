<template>
        <div style="height: auto; width: auto ;display:grid;margin : 10%;">
            <div class="signin" style="grid-column-start:1;grid-column-end:2;background-color:bisque;justify-items:center; padding: 10%;">
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
            <div class="Sign Up" style="grid-column-start:2;grid-column-end:3; background-color: aqua;align-items:center; padding: 10%">
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
                    <input type="password" id="password" name="password" required>
                    <br>
                    <label for="comfirm-password">Confirm password</label>
                    <br>
                    <input type="password" id="comfirm-password" name="confirm-password" required>
                    <span id="error-message" class="error-message"></span>
                    <br>
                    <input type="button" value="Sign Up">
                </forms>
            </div>
            <div class="Logo" style="position:absolute;left:50%; right:10%; height:20cqh;padding:10%;background-color:blue;z-index: 1; translate: -100%">
                <button>
                    Sign Up
                </button>
            </div>
        </div>
</template>