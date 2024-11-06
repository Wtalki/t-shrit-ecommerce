<template>
  <NavBar></NavBar>
  <v-app class="bg-grey-darken-2">
    <v-main>
      <div>
        <v-navigation-drawer
          v-model="drawer"
          class="[border bg-grey-darken-4 position-fixed d-md-block]"
          style="overflow-y: hidden"
        >
          >
          <v-list-item
            prepend-avatar=""
            height="60"
            nav
            class="text-h4 font-weight-bold text-center"
          >
          </v-list-item>
          <v-divider></v-divider>
          <h3 class="mt-3">Categories</h3>
          <v-list density="compact" class="ml-5" nav>
            <v-list-item @click="setSelectCategory('')">All</v-list-item>
            <v-list-item
              v-for="(category, index) in categories"
              :key="index"
              :color="selectedCategory === category ? 'orange' : 'default'"
              :title="category"
              :value="category"
              @click="setSelectCategory(category)"
            >
            </v-list-item>
          </v-list>
          <v-divider></v-divider>

          <h3 class="mt-3">Filter</h3>

          <v-expansion-panels v-model="panel" multiple flat>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Tipe</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(type, index) in types"
                  :key="index"
                  v-model="selectedType"
                  @change="setSelectType(selectedType)"
                  :label="type"
                  :value="type"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Colors</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(color, index) in colors"
                  :key="index"
                  v-model="selected"
                  @change="setSelectColor(selected)"
                  :label="color"
                  :value="color"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Size</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(size, index) in sizes"
                  :key="index"
                  v-model="selectedSize"
                  :label="size"
                  @change="setSelectSize(selectedSize)"
                  :value="size"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
            <v-expansion-panel class="bg-grey-darken-4">
              <v-expansion-panel-title>Price</v-expansion-panel-title>
              <v-expansion-panel-text>
                <v-checkbox
                  v-for="(price, index) in priceRanges"
                  :key="index"
                  @change="setSelectPriceRanges(selectedPriceRanges)"
                  v-model="selectedPriceRanges"
                  :label="price.label"
                  :value="price"
                ></v-checkbox>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-navigation-drawer>
        <v-btn
          variant="outlined"
          class="text-white d-sm-block d-md-block d-lg-block"
          size="50"
          @click.stop="drawer = !drawer"
          style="position: fixed; bottom: 150px; z-index: 30; right: 50px"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div></div>
      </div>

      <v-row class="mt-3">
        <v-col cols="12">
          <v-row>
            <v-col cols="12" lg="7">
              <v-card elevation="24">
                <v-carousel :show-arrows="false" height="340">
                  <v-carousel-item
                    v-for="n in 4"
                    :key="n"
                    cover
                    :src="`ads${n}.jpg`"
                    class="bg-cyan-lighten-3"
                  >
                    <v-sheet
                      class="bg-transparent d-flex flex-column justify-end align-start pa-5"
                      height="300"
                    >
                      <p class="text-caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque illo blanditiis iste, dolorum expedita ipsum
                        beatae in, hic eaque libero, ad provident repellat
                        dolor? Tempore minus mollitia rem ut soluta.
                      </p>
                      <v-btn variant="outlined" width="100">Buy</v-btn>
                    </v-sheet>
                  </v-carousel-item>
                </v-carousel>
              </v-card>
            </v-col>
            <v-col cols="12" lg="5" md="12">
              <v-row>
                <v-col cols="12" md="6" lg="12">
                  <v-card
                    elevation="24"
                    height="150"
                    image="s1.jpg"
                    class="mx-auto"
                  >
                    <v-img src="1.png"></v-img>
                  </v-card>
                </v-col>
                <v-col cols="12" md="6" lg="12">
                  <v-card
                    elevation="24"
                    height="150"
                    image="s1.jpg"
                    class="mx-auto"
                  >
                    <v-img src="10.png"></v-img>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <div>
            <v-toolbar class="bg-grey-darken-4">
              <v-toolbar-title>T-Shirt</v-toolbar-title>
              <v-text-field
                variant="underlined"
                hide-details="auto"
                v-model="search"
                @input="setSearch($event.target.value)"
                clearable
                placeholder="Search here..."
              >
                <v-icon>mdi-magnify</v-icon>
              </v-text-field>
              <!-- <button @click="toggleShowFavorites">
                {{ showFavourites ? "Show All" : "Show Favorites" }}
              </button> -->
              <v-spacer></v-spacer>
              <div class="text-center me-6">
                <v-menu transition="fade-transition">
                  <template v-slot:activator="{ props }">
                    <v-btn
                      class="bg-grey-lighten-5"
                      variant="tonal"
                      v-bind="props"
                      color="orange"
                      icon="mdi-filter"
                    >
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item v-for="n in 5" :key="n">
                      <v-btn width="200" flat>hello</v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </v-toolbar>
            <v-toolbar class="bg-grey-darken-4">
              <v-spacer></v-spacer>
              <v-btn @click="setSelectGender('')" variant="outlined">All</v-btn>
              <v-btn
                variant="outlined"
                v-for="(gen, index) in gender"
                :key="index"
                :color="selectedGender === gen ? 'orange' : 'default'"
                class="ms-3"
                :value="gen"
                @click="setSelectGender(gen)"
                >{{ gen }}</v-btn
              >
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-toolbar class="bg-grey-darken-4">
              <div class="d-flex flex-wrap">
                <v-chip v-for="sel in selected" :key="sel">{{ sel }}</v-chip>
                <v-chip v-for="sel in selectedSize" :key="sel">{{
                  sel
                }}</v-chip>
                <v-chip v-for="sel in selectedType" :key="sel">{{
                  sel
                }}</v-chip>
                <v-chip v-for="sel in selectedPriceRanges" :key="sel">{{
                  sel.label
                }}</v-chip>
              </div>
            </v-toolbar>
          </div>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-container fluid>
              <v-row>
                <v-col
                  v-for="product in paginatedItems"
                  :key="product.id"
                  cols="6"
                  md="3"
                  sm="4"
                  xs="4"
                >
                  <v-hover v-slot="{ isHovering, props }" open-delay="200">
                    <v-card color="#111111" v-bind="props">
                      <div>
                        <!-- <v-img :src="product.image" height="200" class="mt-6">
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
                              @click="toggleFavorite(product.id)"
                              :icon="
                                product.favourite
                                  ? 'mdi-heart'
                                  : 'mdi-heart-outline'
                              "
                              varient="outlined"
                              class="bg-transparent float-end text-cyan-accent-2"
                            ></v-btn>
                          </div>
                        </v-img> -->

                        <v-carousel :show-arrows="false" height="200">
                          <v-carousel-item
                            v-for="(img, index) in product.image"
                            :key="index"
                            height="200"
                            :src="img"
                            color="#111111"
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
                          </v-carousel-item>
                        </v-carousel>
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
                </v-col>
              </v-row>
            </v-container>
          </v-row>
        </v-col>
        <v-col cols="12">
          <div class="text-center d-flex justify-center align-center">
            <h2>show</h2>
            <select
              class="border-lg pa-2 text-center"
              v-model="itemsPerPage"
              @change="updateItemsPerPage"
            >
              <option v-for="n in [10, 20, 30]" :key="n" class="text-black">
                {{ n }}
              </option>
            </select>
          </div>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import { mapGetters, mapMutations, mapState } from "vuex";

export default defineComponent({
  name: "ProductPage",
  components: { NavBar },
  data() {
    return {
      value: [10, 20, 30, 40, Infinity],
      drawer: false,
      search: "",
      panel: [],
      currentPage: 1,
      page: 1,
      selected: [],
      selectedSize: [],
      selectedType: [],
      selectedPriceRanges: [],
      selectedCategory: "",
    };
  },
  computed: {
    ...mapState([
      "search",
      "showFavourites",
      "priceRanges",
      "selectedCategory",
      "selectedGender",
      "selectedType",
      "selected",
      "selectedSize",
      "selectedPriceRanges",
      "currentPage",
      "itemsPerPage",
    ]),
    ...mapGetters([
      "getShirtCategories",
      "getColors",
      "getTypes",
      "getSizes",
      "getPrices",
      "gender",
      "filterItems",
      "categories",
      "types",
      "colors",
      "sizes",
      "paginatedItems",
      "pageCount",
    ]),
  },
  methods: {
    ...mapMutations([
      "setSearch",
      "setSelectCategory",
      "setSelectGender",
      "setSelectType",
      "setSelectColor",
      "setSelectSize",
      "setSelectPriceRanges",
      "toggleFavourite",
      "setShowFavorites",
      "setCurrentPage",
      "setItemsPerPage",
    ]),
    addtocart(id) {
      this.$router.push({ name: "addToCart", params: { id } });
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
  },
});
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 25%;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  width: 100%;
}
</style>
