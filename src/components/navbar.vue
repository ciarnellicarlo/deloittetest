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

        <div class="modal fade" id="Login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Welcome back!</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body row">
                        <div class="loginpicture col-md-6">
                            <img src="@/assets/login3.jpg" alt="">
                        </div>
                        <form class="col-md-6">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Username</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <button type="submit" class="btn btn-dark">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="Registration" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Join us</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body row">
                        <div class="loginpicture col-md-6">
                            <img src="@/assets/login3.jpg" alt="">
                        </div>
                        <form class="col-md-6">
                            <div class="form-group">
                                <label for="InputName1">Name</label>
                                <input type="name" class="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Enter name">
                            </div>
                            <div class="form-group">
                                <label for="InputSurname1">Surname</label>
                                <input type="name" class="form-control" id="InputSurname1" aria-describedby="surnameHelp" placeholder="Enter Surname">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile</label>
                                <input type="tel" class="form-control" id="InputMobile1" aria-describedby="mobileHelp" placeholder="+356 xx123456">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Birthday</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Birthday">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Username</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Address</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Address">
                            </div>
                            <button type="submit" class="btn btn-dark">Register</button>
                        </form>
                    </div>
                </div>
            </div>
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

        .navbar-brand {
            width: 80%;
            margin: 30px 0 0 0 ;
        }

        .navbar-toggler {
            margin-right: 12px;
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

    .loginpicture {
        overflow: hidden;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-height: 630px;

        .btn {
            background-color: #86BC25;
            border: none;
            align-self: flex-end;
            width: 30%;
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

        .loginpicture {
            display: none;
        }
    }

</style>