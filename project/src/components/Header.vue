<template>
    <div id="header">
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand to="/">Home</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item to="Find">Welk reptiel heb ik gezien?</b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-item v-if="!authenticated" to="Login">Login</b-nav-item>
                    <b-nav-item-dropdown right v-if="authenticated">
                    <template v-slot:button-content>
                        <em>Admin</em>
                    </template>
                    <b-dropdown-item to="Admin">Admin page</b-dropdown-item>
                    <b-dropdown-item v-on:click.native="logout()">Sign out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div> 
</template>

<script>
    import password from "@/views/password.vue"

    export default {
        name: 'Header',
        data() {
            return {
                authenticated: false,
                Admin: {
                    username: "mia",
                    password: "m"
                }
            }
        },
        components: {
            password
        },
        methods: {
            setAuth (status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>