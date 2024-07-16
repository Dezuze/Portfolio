<template>
    <section>
        <div>
            <span>
                <h2>Sign In</h2>
                <forms id="signin_form" autocomplete="on" action="action.py" method="post">
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
            </span>
            <span>
                <img>
                <button>
                    Sign Up
                </button>
            </span>
            <span>
                <h2>Sign Up</h2>
                <forms id="signup-form" aria-autocomplete="on" action="action.py" method="post">
                    <label for="username">Username</label>
                    <br>
                    <input type="text" id="username" name="username" required>
                    <br>
                    <label for="email">Email</label>
                    <br>
                    <input type="email" id="email" placeholder="example@abc.com" required>
                    <br>
                    <label for="comfirm-password">Confirm password</label>
                    <br>
                    <input type="password" id="comfirm-password" name="confirm-password" required>
                    <span id="error-message" class=""
                    <br>
                    <input type="submit" value="Sign Up">
                </forms>
            </span>
        </div>
    </section>
</template>