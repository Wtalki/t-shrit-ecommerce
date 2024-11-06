<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <v-row>
          <v-col cols="12">
            <div>
              <v-card
                class="mx-auto px-6 py-8 bg-grey-darken-4"
                max-width="600"
              >
                <v-card-title class="text-center font-weight-bold"
                  >Login</v-card-title
                >
                <v-form v-model="form" @submit.prevent="onSubmit">
                  <v-text-field
                    v-model="email"
                    :readonly="loading"
                    :rules="[required]"
                    class="mb-2"
                    label="Email"
                    clearable
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    :readonly="loading"
                    :rules="[required]"
                    label="Password"
                    placeholder="Enter your password"
                    clearable
                  ></v-text-field>

                  <br />

                  <v-btn
                    :disabled="!form"
                    :loading="loading"
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                    block
                  >
                    Sign In
                  </v-btn>
                </v-form>
                <v-card-title class="text-center mt-3"
                  >Do you alerady account?
                  <v-btn
                    variant="plain"
                    class="text-blue text-decoration-underline cursor-pointer"
                    :to="{ name: 'register' }"
                    >Register</v-btn
                  ></v-card-title
                >
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <FooterB></FooterB>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterB from "@/components/FooterB.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "ProductPage",
  components: { NavBar, FooterB },
  data() {
    return {
      form: false,
      email: null,
      password: null,
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations([]),
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },
  },
});
</script>
<style></style>
