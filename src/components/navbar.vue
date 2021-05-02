<template>
    <nav class="navbar">
        <img class="logo" src="@/assets/logo.png">
        <button type="button" class="login btn btn-light">Log In</button>
        <button type="button" class="register btn btn-light">Register</button>
        <footer>© Carlo Ciarnelli 2021</footer>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
};
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        text-align: center;
        height: 100%;

        * {
            margin: 10px;
            width: 80%;
        }
    }

    .logo {
        margin-top: 30px;
        background-color: black;
    }

    .login {
        background-color: #86BC25;
        border: none;
    }

    .register {
        background-color: #43B02A;
        border: none;
    }

    footer {
        position: absolute;
        bottom: 30px;
    }
</style>