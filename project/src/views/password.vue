<template>
    <div id="Login">
        <h3>De admin kan hier inloggen</h3>
        <input type="text" name="username" v-model="input.username" placeholder="Gebruikersnaam"/>
        <input type="password" name="password" v-model="input.password" placeholder="wachtwoord"/>
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Password',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if (this.input.username != "" && this.input.password != "") {
                    //if (this.input.username == this.$parent.Admin.username && this.input.password == this.$parent.Admin.password) {
                        this.$emit("authenticate", true);
                        this.$router.replace({ name: "Admin" });
                   // }
                    //else {
                        console.log("Gegevens incorrect");
                  //  }
                }
                else {
                    console.log("Geen gebruikersnaam en/of wachtwoord opegeven");
                }
            }
        }
    }
</script>