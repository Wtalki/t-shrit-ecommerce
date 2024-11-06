<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <h2>Product Bag</h2>

        <v-row>
          <v-col cols="12" lg="8" md="8">
            <v-card flat>
              <v-card-item>
                <v-btn icon="mdi-close" flat class="float-end"></v-btn>
              </v-card-item>
              <v-card-item>
                <v-list lines="three" item-props>
                  <v-list-item>
                    <v-list-item-title
                      class="text-h6 d-flex justify-space-between mb-3"
                    >
                      <h4>hello</h4>
                      <v-chip>$393</v-chip>
                    </v-list-item-title>
                    <div class="d-flex justify-space-between flex-wrap">
                      <v-list-item-title class="d-flex ga-3 pa-2">
                        <v-card width="30" height="30" color="red"></v-card>
                        <v-card width="70" height="30">
                          <v-card-title class="text-center">xl</v-card-title>
                        </v-card>
                      </v-list-item-title>
                      <v-list-item-title class="mb-3 d-flex align-center pa-2">
                        <v-btn
                          variant="outlined"
                          height="30"
                          size="30"
                          @click="decrease"
                          ><v-icon>mdi-minus</v-icon></v-btn
                        >
                        <div>
                          <v-card variant="outlined" width="50">
                            <v-card-title class="text-center">{{
                              number
                            }}</v-card-title>
                          </v-card>
                        </div>
                        <v-btn
                          variant="outlined"
                          height="30"
                          size="30"
                          @click="increase"
                          ><v-icon>mdi-plus</v-icon></v-btn
                        >
                      </v-list-item-title>
                    </div>
                    <template v-slot:prepend>
                      <v-img src="1.png" width="100"></v-img>
                      <v-divider class="ma-2" vertical></v-divider>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col cols="12" lg="4" md="4">
            <v-card flat class="pa-3">
              <v-card-item>
                <v-card-title class="d-flex justify-space-between">
                  <span>Total</span>
                  <span><v-chip class="px-3">$99</v-chip></span>
                </v-card-title>
              </v-card-item>
              <v-card-item class="text-center">
                <v-btn flat color="orange rounded-pill" width="250"
                  >Checkout</v-btn
                ></v-card-item
              >
            </v-card>
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
