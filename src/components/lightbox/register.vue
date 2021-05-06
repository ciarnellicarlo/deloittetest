<template>
    <div>
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
                            <img src="@/assets/register.jpg" alt="">
                        </div>
                        <form class="col-md-6">
                            <div class="form-group">
                                <label for="InputName1">Name</label>
                                <input type="text" class="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Enter name" v-model="name">
                            </div>
                            <div class="form-group">
                                <label for="InputSurname1">Surname</label>
                                <input type="text" class="form-control" id="InputSurname1" aria-describedby="surnameHelp" placeholder="Enter Surname" v-model="surname">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Mobile</label>
                                <input type="tel" class="form-control" id="InputMobile1" aria-describedby="mobileHelp" placeholder="+356 xx123456" v-model="tel">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email</label>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Birthday</label>
                                <input type="date" class="form-control" id="exampleInputPassword1" placeholder="Birthday" v-model="birthday">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Username</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Username" v-model="username">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Address</label>
                                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Address" v-model="address">
                            </div>
                            <button type="submit" class="btn btn-dark">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            name: '',
            surname: '',
            tel: '',
            email: '',
            birthday: '',
            password: '',
            username: '',
            address: ''
        }
    }
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