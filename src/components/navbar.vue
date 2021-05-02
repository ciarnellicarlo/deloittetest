<template>
    <div class="navbar">
        <img class="logo" src="@/assets/logo.png">
        <button type="button" class="btn btn-light">Log In</button>
        <button type="button" class="btn btn-light">Register</button>
        <div class="footer">© Carlo Ciarnelli 2021</div>
    </div>
</template>

<script>
export default {
    name: 'navbar',
};
</script>

<style lang="scss" scoped>
    .navbar {
        background-color: black;
        height: 100vh;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        text-align: center;
    }

    .navbar > * {
        margin: 10px;
        width: 80%;
    }

    .logo {
        margin-top: 30px;
        background-color: black;
    }

    .footer {
        position: absolute;
        top: 90vh;
    }
</style>