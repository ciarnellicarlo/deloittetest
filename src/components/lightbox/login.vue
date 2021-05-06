<template>
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
</template>

<script>
export default {
    name: 'login'
}
</script>

<style lang="scss" scoped>
    .loginpicture {
        overflow: hidden;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-height: 850px;

        .btn {
            background-color: #86BC25;
            border: none;
            align-self: flex-end;
            width: 30%;
        }
    }

    @media (max-width: 767.98px) {
        .loginpicture {
            display: none;
        }
    }
</style>