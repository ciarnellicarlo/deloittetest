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
                        <form class="col-md-6" v-on:submit.prevent="onSubmit">
                            <div class="form-group">
                                <label for="InputName1">Name</label>
                                <input type="text" class="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Enter name" v-model="name" required>
                            </div>
                            <div class="form-group">
                                <label for="InputSurname1">Surname</label>
                                <input type="text" class="form-control" id="InputSurname1" aria-describedby="surnameHelp" placeholder="Enter Surname" v-model="surname" required>
                            </div>
                            <div class="form-group">
                                <label for="InputMobile1">Mobile</label>
                                <input type="tel" class="form-control" id="InputMobile1" aria-describedby="mobileHelp" placeholder="+356 xx123456" v-model="tel" required>
                            </div>
                            <div class="form-group">
                                <label for="InputEmail1">Email</label>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="InputBirthday1">Birthday</label>
                                <input type="date" class="form-control" id="InputBirthday1" v-model="birthday" required>
                            </div>
                            <div class="form-group">
                                <label for="InputPassword1">Password</label>
                                <input type="password" class="form-control" id="InputPassword1" placeholder="Password" v-model="password" required>
                            </div>
                            <div class="form-group">
                                <label for="InputUsername1">Username</label>
                                <input type="text" class="form-control" id="InputUsername1" placeholder="Username" v-model="username" required>
                            </div>
                            <div class="form-group">
                                <label for="InputAddress1">Address</label>
                                <input type="text" class="form-control" id="InputAddress1" placeholder="Address" v-model="address">
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
    },

    methods: {
        onSubmit() {
            if (this.tel.length !== 13) {
                alert("Mobile number must be 13 digits long. Please try again")
            } 
            var today = new Date()
            var now = new Date(this.birthday);
            if (now > today) {
                alert("Your birthday is in the future")
            }
            var str = this.password;	// your password field's value goes here
            var re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
            if (re.test(str) == false) {
                alert("Password needs to contain at least 8 characters, 1 capital letter, 1 small character, 1 digit and 1 special character (!@#$%^&*)")
            }
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