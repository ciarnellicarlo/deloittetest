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
                        <div class="lightboxpicture col-md-6">
                            <img src="@/assets/register.jpg" alt="">
                        </div>
                        <form class="col-md-6" id="myForm2" v-on:submit.prevent="registration">
                            
                            <div class="form-group">
                                <label for="InputName1">Name</label><small class="asterisk"> *</small>
                                <input type="text" class="form-control" id="InputName1" aria-describedby="nameHelp" placeholder="Enter name" v-model="name" required>
                            </div>
                            <div class="form-group">
                                <label for="InputSurname1">Surname</label><small class="asterisk"> *</small>
                                <input type="text" class="form-control" id="InputSurname1" aria-describedby="surnameHelp" placeholder="Enter Surname" v-model="surname" required>
                            </div>
                            <div class="form-group">
                                <label for="InputMobile1">Mobile</label><small class="asterisk"> *</small>
                                <input type="tel" class="form-control" id="InputMobile1" aria-describedby="mobileHelp" placeholder="+356 xx123456" v-model="tel" required>
                                <div class="invalid-feedback">
                                    Mobile number must be 13 digits long. Please try again.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="InputEmail1">Email</label><small class="asterisk"> *</small>
                                <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email" required>
                            </div>
                            <div class="form-group">
                                <label for="InputBirthday1">Birthday</label><small class="asterisk"> *</small>
                                <input type="date" class="form-control" id="InputBirthday1" v-model="birthday" required>
                                <div class="invalid-feedback">
                                    Date of birth cannot be in the future. Please try again.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="InputPassword1">Password</label><small class="asterisk"> *</small>
                                <input type="password" class="form-control" id="InputPassword1" placeholder="Password" v-model="password" required>
                                <div class="invalid-feedback">
                                    Password needs to contain at least 8 characters, 1 capital letter, 1 small character, 1 digit and 1 special character (!@#$%^&*)
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="InputUsername1">Username</label><small class="asterisk"> *</small>
                                <input type="text" class="form-control" id="InputUsername1" placeholder="Username" v-model="username" required>
                                <div class="invalid-feedback">
                                    This username is already in use. Please try another one.
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="InputAddress1">Address</label>
                                <input type="text" class="form-control" id="InputAddress1" placeholder="Address" v-model="address">
                            </div>
                            <div class="alert alert-success" id="alert" role="alert">
                                You have successfully registered!
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div id="alertcontainer">
            
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
        registration() {
            let today = new Date()
            let now = new Date(this.birthday);
            let str = this.password;
            let re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
            if (this.tel.length !== 13) {
                document.getElementById("InputMobile1").classList.add("is-invalid");
            } 
            
            else if (now > today) {
                document.getElementById("InputBirthday1").classList.add("is-invalid");
                document.getElementById("InputMobile1").classList.remove("is-invalid");
            }
            
            else if (re.test(str) == false) {
                document.getElementById("InputPassword1").classList.add("is-invalid");
                document.getElementById("InputBirthday1").classList.remove("is-invalid");
                document.getElementById("InputMobile1").classList.remove("is-invalid");
            }

            else {
                this.saveData();
                document.getElementById("InputMobile1").classList.remove("is-invalid");
                document.getElementById("InputBirthday1").classList.remove("is-invalid");
                document.getElementById("InputPassword1").classList.remove("is-invalid");
            }
        },

        saveData() {

            let account = {
                    name: this.name,
                    surname: this.surname,
                    tel: this.tel,
                    email: this.email,
                    birthday: this.birthday,
                    password: this.password,
                    username: this.username,
                    address: this.address
                }

            if (localStorage.getItem('accounts') === null) {
                let accounts = [];
                accounts.push(account);
                localStorage.setItem('accounts', JSON.stringify(accounts));
                alert("You have successfully registered. You can now login.");
            }
            else {
                let accounts = JSON.parse(localStorage.getItem('accounts'));
                console.log(accounts);
                let found = false;

                accounts.forEach((item) => {
                    if (item.username === account.username) {
                        found = true;
                    }
                });

                if ( found ) {
                    document.getElementById("InputUsername1").classList.add("is-invalid");
                } else {
                        accounts.push(account);
                        localStorage.setItem('accounts', JSON.stringify(accounts));
                        document.getElementById("InputUsername1").classList.remove("is-invalid");
                        document.getElementById("myForm2").reset();
                        document.getElementById("alertcontainer").innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>You have successfully registered!</strong> You can try to login now.
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </div>`;
                        document.getElementById("RegistrationComplete").style.display = "block";
                    }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .lightboxpicture {
        overflow: hidden;
    }

    .alert {
        display: none;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        max-height: 850px;

        .asterisk {
            color: red;
        }

        .btn {
            background-color: #86BC25;
            border: none;
            align-self: flex-end;
            width: 30%;
        }
    }

    @media (max-width: 767.98px) {
        .lightboxpicture {
            display: none;
        }
    }
</style>