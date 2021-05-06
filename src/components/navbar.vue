<template>
    <nav class="navbar navbar-expand-md navbar-dark navbar-custom">
        <img src="@/assets/logo.png" class="navbar-brand">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#Login"><font-awesome-icon icon="user"/> Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" data-toggle="modal" data-target="#Registration"><font-awesome-icon icon="user-edit"/> Register</a>
                </li>
            </ul>
        </div>

        <login/>
        <register/>

    </nav>
</template>

<script>
import login from './lightbox/login.vue';
import register from './lightbox/register.vue';

export default {
    name: 'navbar',
    components: {
        login,
        register
    }
};
</script>

<style lang="scss" scoped>
    .navbar-custom {
        background-color: black;
        flex-direction: column;

        .navbar-brand {
            width: 80%;
            margin: 30px 0 0 0 ;
        }

        .navbar-toggler {
            position: absolute;
            right: 20px;
            top: 16px;
        }

        .navbar-collapse {
            flex-direction: column;
            width: 80%;

            .navbar-nav {
                flex-direction: column;
                flex-wrap: wrap;
                width: 100%;

                .nav-item:nth-last-of-type(1) {
                        background-color: #43B02A;
                }

                .nav-item {
                    width: 100%;
                    text-align: center;
                    background-color: #86BC25;
                    margin: 5px;
                    border-radius: 5px;
                    transition: background-color 0.2s ease;

                    &:hover {
                        background-color: white;
                    
                    }

                    a {
                        color: black!important;
                        transition: color 0.2s ease;
                        position: relative;

                        .fa-user {
                            position: absolute;
                            right: 83%;
                            top: 33%;
                        }

                        .fa-user-edit {
                            position: absolute;
                            right: 80%;
                            top: 33%;
                        }
                    }
                }
            }
        }
    }
    
    @media (max-width: 991.98px) {
        .navbar-custom {
            flex-direction: row;

            .navbar-brand {
                width: 200px;
                margin: 0;
            }

            .navbar-collapse {
                flex-direction: row;
                justify-content: flex-end;

                .navbar-nav {
                    flex-direction: row;
                    justify-content: flex-end;
                    width: 80%;

                    .nav-item {
                        width: 40%;
                        margin-right: 12px;
                    }
                }
            }
        }
    }

    @media (max-width: 767.98px) {
        .navbar-nav {
            display: block;
            margin-left: 20px;
        }
    }

</style>