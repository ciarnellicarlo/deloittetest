<template>
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom">
        <img src="@/assets/logo.png" class="navbar-brand">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#"><font-awesome-icon icon="user"/> Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><font-awesome-icon icon="user-edit"/> Register</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navbar',
};
</script>

<style lang="scss" scoped>
    .navbar-custom {
        background-color: black;
        flex-direction: column;
    }

    .navbar-brand {
        width: 80%;
        margin: 30px 0 0 0 ;
    }

    .navbar-collapse {
        width: 80%;
        flex-direction: column;
    }

    .navbar-nav {
        flex-direction: column;
        flex-wrap: wrap;
    }
    
    .nav-item {
        width: 100%;
        text-align: center;
        background-color: #86BC25;
        margin: 5px;
        border-radius: 5px;
        transition: background-color 0.2s ease;
    }

    .nav-item:nth-last-of-type(1) {
        background-color: #43B02A;
    }

    .nav-item:hover {
        background-color: white;
    }

    .nav-item a {
        color: black!important;
        transition: color 0.2s ease;
    }

    .navbar-toggler {
        margin-right: 12px;
    }

    @media (max-width: 991.98px) {
        .navbar-custom {
            flex-direction: row;
        }

        .navbar-collapse {
            flex-direction: row;
            justify-content: flex-end;
        }

        .navbar-nav {
            flex-direction: row;
            justify-content: center;
            width: 60%;
        }

        .nav-item {
            width: 40%;
        }

        .navbar-brand {
            width: 200px;
            margin: 0;
        }
    }

    @media (max-width: 767.98px) {
        .navbar-nav {
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
    }
</style>