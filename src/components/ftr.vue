<template>
    <footer>
        <a href="https://www.facebook.com/DeloitteMalta/?brand_redir=21474437688" target="_blank"><font-awesome-icon :icon="[ 'fab', 'facebook' ]" /></a>
        <a href="https://www.linkedin.com/company/deloitte/" target="_blank"><font-awesome-icon :icon="[ 'fab', 'linkedin' ]"/></a>
        <a href="https://www.instagram.com/deloitte/?hl=it" target="_blank"><font-awesome-icon :icon="[ 'fab', 'instagram' ]"/></a>
        <a href="https://twitter.com/deloitte" target="_blank"><font-awesome-icon :icon="[ 'fab', 'twitter' ]"/></a>
    </footer>
</template>

<script>
export default {
    name: 'ftr',
};
</script>

<style scoped lang="scss">
    footer {
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 10vh;
        background-color: black;

        .fa-facebook, .fa-instagram, .fa-twitter, .fa-linkedin {
            transform: scale(1.5)
        }

        a {
            color: rgba(255, 255, 255, 0.75);
            transition: color 0.2s ease;
        }

        a:hover {
            color: rgba(255, 255, 255, 1);
        }
    }

    
</style>