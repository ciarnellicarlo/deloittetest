<template>
    <div class="navbar">
        <div class="logo">logo</div>
        <div class="login">login</div>
        <div class="register">register</div>
        <div class="footer">footer example</div>
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
    }

    .footer {
        position: absolute;
        top: 92vh;
    }
</style>