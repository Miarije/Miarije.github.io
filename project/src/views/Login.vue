<template>
    
</template>

<script>
    export default {
        name: 'Login',
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
                    //}
                    //else {
                        console.log("Gegevens incorrect");
                    //}
                }
                else {
                    console.log("Geen gebruikersnaam en/of wachtwoord opegeven");
                }
            }
        }
    }
</script>