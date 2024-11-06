<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-3">
    <v-main class="mt-5">
      <v-container class="bg-grey-lighten-4">
        <v-row>
          <v-col cols="12" md="5" lg="5">
            <v-card>
              <v-carousel color="transparent" height="400" hide-delimiters>
                <v-carousel-item
                  height="400"
                  color="#111111"
                  v-for="(img, i) in product.image"
                  :key="i"
                  :src="`/${img}`"
                >
                </v-carousel-item>
              </v-carousel>
            </v-card>
          </v-col>
          <v-col cols="12" md="7" lg="7">
            <v-card class="bg-transpaent pa-3" flat>
              <v-divider
                color="warning"
                :thickness="2"
                opacity="100"
              ></v-divider>
              <v-card-item>
                <v-card-title class="text-body-2 d-flex align-center">
                  <span class="text-lg-emphasis text-h5 font-weight-bold">{{
                    product.name
                  }}</span>
                  <v-spacer></v-spacer>
                  <v-chip
                    class="ms-2 text-h6 font-weight-bold"
                    color="grey-darken-4"
                    prepend-icon="mdi-currency-usd"
                    size="small"
                    :text="product.price"
                    variant="flat"
                  ></v-chip>
                </v-card-title>
              </v-card-item>
              <v-card-subtitle v-if="product.rating == 1">
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 2">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 3">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 4">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-card-subtitle v-if="product.rating == 5">
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                <v-icon color="orange">mdi-star</v-icon>
                (5)
              </v-card-subtitle>
              <v-divider class="mb-2 mt-3"></v-divider>
              <v-card-item>
                <v-list>
                  <v-list-item>
                    <v-radio-group inline v-model="product.color">
                      <v-radio
                        :color="product.color.toLowerCase()"
                        :label="product.color"
                        :value="product.color"
                      ></v-radio>
                      <template v-slot:prepend>
                        <span>color</span>
                        <v-divider
                          class="ms-3 me-3"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item>
                    <v-radio-group inline v-model="product.type">
                      <v-radio
                        color="black"
                        :label="product.type"
                        :value="product.type"
                      ></v-radio>
                      <template v-slot:prepend>
                        <span>Type</span>
                        <v-divider
                          class="ms-3 me-3"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <v-list>
                  <v-list-item>
                    <v-radio-group inline v-model="product.size">
                      <v-radio
                        :color="product.size"
                        :label="product.size"
                        :value="product.size"
                      ></v-radio>

                      <template v-slot:prepend>
                        <span>size</span>
                        <v-divider
                          class="ms-5 me-2"
                          vertical
                          :thickness="1"
                          opacity="100"
                        ></v-divider>
                      </template>
                    </v-radio-group>
                  </v-list-item>
                </v-list>
                <div class="ms-15 mb-3 d-flex ga-5">
                  <v-btn
                    variant="outlined"
                    icon="mdi-minus"
                    @click="decrease"
                  ></v-btn>
                  <div>
                    <v-text-field
                      width="50"
                      v-model="number"
                      class="text-center"
                      variant="outlined"
                      readonly
                    ></v-text-field>
                  </div>
                  <v-btn
                    variant="outlined"
                    icon="mdi-plus"
                    @click="increase"
                  ></v-btn>
                </div>
                <v-btn
                  v-if="number == 0"
                  flat
                  disabled
                  color="orange rounded-pill"
                  class="ms-15"
                  width="250"
                  >Add To Bag</v-btn
                >
                <v-btn
                  v-if="number > 0"
                  flat
                  color="orange rounded-pill"
                  class="ms-15"
                  width="250"
                  >Add To Bag</v-btn
                >
                <v-btn
                  flat
                  color="orange rounded-pill mt-3"
                  class="ms-15"
                  @click="toggleItemFavourite(product.id)"
                  width="250"
                  :prepend-icon="
                    product.favourite ? 'mdi-heart' : 'mdi-heart-outline'
                  "
                  variant="outlined"
                  >Add To Favourite</v-btn
                >
                <v-divider class="mt-3"></v-divider>
                <v-card-text>{{ product.description }}</v-card-text>
              </v-card-item>
            </v-card>
          </v-col>
          <v-col cols="12">
            <h3>You May Also Like</h3>
            <v-divider class="mt-3 mb-3"></v-divider>
            <v-sheet class="mx-auto" max-width="1200">
              <v-slide-group v-model="model" calss="pa-4">
                <v-slide-group-item
                  v-for="product in cartItemsPage"
                  :key="product.id"
                  v-slot="{ toggle, selectedClass }"
                >
                  <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card
                      color="#111111"
                      v-bind="props"
                      @click="toggle"
                      :class="['ma-4', selectedClass]"
                    >
                      <div>
                        <v-img
                          :key="index"
                          :src="`/${product.image[0]}`"
                          height="200"
                          class="mt-6"
                        >
                          <v-expand-transition>
                            <div
                              v-if="isHovering"
                              class="d-flex transition-fast-in-fast-out bg-grey-darken-1 text-cyan-accent-1 v-card--reveal text-h4"
                              style="height: 30%"
                            >
                              ${{ product.price }}
                            </div>
                          </v-expand-transition>
                          <div>
                            <v-btn
                              @click="toggleItemFavourite(product.id)"
                              :icon="
                                product.favourite
                                  ? 'mdi-heart'
                                  : 'mdi-heart-outline'
                              "
                              varient="outlined"
                              class="bg-transparent float-end text-cyan-accent-2"
                            ></v-btn>
                          </div>
                        </v-img>
                      </div>

                      <v-card-text class="pt-6 bg-black">
                        <h3 class="font-weight-light bg-black text-orange mb-2">
                          {{ product.name }}
                        </h3>
                        <span>
                          <v-icon size="18" color="cyan-accent-1"
                            >mdi-star</v-icon
                          >

                          ({{ product.rating }})
                        </span>
                        <v-btn
                          @click="addtocart(product.id)"
                          class="float-right text-orange"
                          icon="mdi-cart-plus"
                        ></v-btn>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-slide-group-item>
              </v-slide-group>
            </v-sheet>
          </v-col>
          <v-col cols="12">
            <v-card class="bg-transparent" flat>
              <v-card-title>Reviews</v-card-title>
              <v-card-item>
                <v-list lines="three" item-props>
                  <v-list-item v-for="(r, i) in reviews" :key="i">
                    <v-list-item-title>{{ r.title }}</v-list-item-title>
                    <v-list-item-subtitle v-if="r.icon == 1">
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.icon == 2">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.icon == 3">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.icon == 4">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle v-if="r.icon == 5">
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                      <v-icon color="orange">mdi-star</v-icon>
                    </v-list-item-subtitle>
                    <v-list-item-subtitle>{{
                      r.subtitle
                    }}</v-list-item-subtitle>
                    <template v-slot:prepend>
                      <v-avatar :image="r.prependAvatar"></v-avatar>
                    </template>
                  </v-list-item>
                </v-list>
              </v-card-item>
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
      reviews: [
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          title: "Brunch this weekend?",
          icon: 3,
          subtitle: ` &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          title: "Summer BBQ",
          icon: 4,
          subtitle: `&mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          title: "Oui oui",
          icon: 5,
          subtitle:
            " &mdash; Do you have Paris recommendations? Have you ever been?",
        },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
          title: "Birthday gift",
          icon: 2,
          subtitle:
            " &mdash; Have any ideas about what we should get Heidi for her birthday?",
        },
        {
          prependAvatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
          title: "Recipe to try",
          icon: 3,
          subtitle:
            " &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.",
        },
      ],
      product: null,
      number: 0,
    };
  },
  computed: {
    ...mapState(["cartItems"]),
    ...mapGetters(["favouriteItems", "cartItemsPage", "cartShowCount"]),
  },
  methods: {
    ...mapMutations(["toggleFavourite", "setShowFavorites", "setCurrentPage"]),
    addtocart(id) {
      // this.$router.push({ name: "addToCart", params: { id } });
      window.location.assign(id);
    },
    toggleItemFavourite(id) {
      this.toggleFavourite(id);
    },
    onPageChange(page) {
      if (page >= 1 && page <= this.pageCount) {
        this.setCurrentPage(page);
      }
    },
    updateItemsPerPage(event) {
      this.setItemsPerPage(parseInt(event.target.value));
      this.setCurrentPage(1);
    },
    increase() {
      this.number++;
    },
    decrease() {
      if (this.number > 0) {
        this.number--;
      }
    },
  },
  mounted() {
    const productId = this.$route.params.id;
    this.product = this.$store.state.items.find(
      (item) => item.id === parseInt(productId)
    );
  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
