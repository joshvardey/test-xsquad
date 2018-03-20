

<template>
    <section>
      <form @submit.prevent="submitData">
        <b-field>
            <b-input placeholder="Email" v-model="info.email"></b-input>
        </b-field>

        <b-field>
            <b-input placeholder="Username"
                v-model="info.username">
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input type="password" 
            v-model="info.password"
                value="password"
                password-reveal>
            </b-input>
        </b-field>
        
        <a class="button is-medium">Submit</a>
        
      </form>
    </section>
</template>


<script>
export default {
  data() {
    return {
      info: {
        email: "",
        username: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submitData() {
      this.error = null;
      api
        .signup({
          email: this.email,
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.$router.push("/homepage");
        })
        .catch(err => {
          this.error = err;
        });
    }
  }
};

//   this.$http.post(
//     "http://jsonplaceholder.typicode.com/users",
//     JSON.stringify(this.info),
//     console.log(this.info)
//   );
// }
</script>

