<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <h2>Notification</h2>

        <v-row>
          <v-col cols="12">
            <v-toolbar class="bg-grey-darken-2 rounded pa-2 mt-2">
              <div class="d-flex justify-space-between flex-wrap w-100">
                <span width="200">zaw lay</span>
                <span width="200">300$</span>
                <span class="text-green font-weight-bold">9348948code</span>
                <div width="200">
                  <span>pending...</span>
                </div>
              </div>
            </v-toolbar>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
  <FooterB></FooterB>
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
      number: 1,
    };
  },
  computed: {
    ...mapState([]),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations([]),
    increase() {
      this.number++;
    },
    decrease() {
      if (this.number > 1) {
        this.number--;
      }
    },
  },
});
</script>
<style></style>
