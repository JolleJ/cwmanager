<template>
<div class="loginForm">
    <md-card id="loginCard">
    <form class="md-elevation-15" id="loginForm">
        <div class="grey-text" id="loginFormText">
            <md-card-header>
                <div class="md-title" id="loginHeader">Login name</div>
            </md-card-header>
            <md-field md-clearable>
                <label>User</label>
                <md-input v-model="login.loginName"></md-input>
            </md-field>
            <md-field md-clearable>
                <label>Password</label>
                <md-input value="" v-model="login.password" type="password"></md-input>
            </md-field>
        </div>
        <router-link to="/AddUserPage">Login</router-link>
        <md-button class="md-raised" name="loginButton" ><router-link to="/AddUserPage">About</router-link></md-button>
        
    </form>

  </md-card>
  </div>
</template>

<script>
export default {
    name: "loginPage",
    data() {
        return {
            loading: false,
            login: {
                loginName: "",
                password: ""
            }
        }
    },
    methods: {
            rerouteLogin: function(event) {
                this.$router.push({ path: 'replace' })
            }

    }
    
}
</script>

<style lang="css" scoped>
  #loginHeader {
      
      
      text-align: center;
      font-size: 20px;
  }

  #loginForm {
   
    margin-left: auto;
    margin-right: auto;
  }

  #loginCard {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  #loginFormText {
      margin:20px;

  }


</style>