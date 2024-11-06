<template>
  <v-app-bar class="bg-grey-darken-4 pa-2" height="70" flat>
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-lg-none d-md-none d-sm-block"
    ></v-app-bar-nav-icon>
    <v-app-bar-title>Logo</v-app-bar-title>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="link.text"
      :to="link.href"
      class="d-none d-md-flex"
      >{{ link.text }}</v-btn
    >
    <v-spacer></v-spacer>
    <v-menu offset-y v-if="!drawer" class="d-none">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on" class="d-none">
          <v-icon>mdi-menu</v-icon></v-btn
        >
      </template>
      <v-list class="bg-grey-darken-4">
        <v-list-item
          v-for="link in links"
          :key="link.text"
          :to="link.href"
          @click="drawer = false"
        >
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      icon="mdi-heart-outline"
      class="bg-grey-lighten-2 me-3"
      variant="outlined"
      :to="{ name: 'favourite' }"
    ></v-btn>
    <div class="position-relative">
      <v-btn
        icon="mdi-shopping-outline"
        :to="{ name: 'cartPage' }"
        variant="outlined"
        class="bg-grey-lighten-2 me-3"
      >
      </v-btn>
      <span class="pos bg-orange rounded-circle w-50 text-center">99</span>
    </div>
    <div class="position-relative">
      <v-btn
        icon="mdi-bell-outline"
        variant="outlined"
        :to="{ name: 'notiPage' }"
        class="bg-grey-lighten-2"
      ></v-btn>
      <span class="po bg-orange rounded-circle w-50 text-center">99</span>
    </div>

    <v-menu min-width="200px" rounded>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props" class="ms-2">
          <v-avatar color="brown" size="large">
            <span class="text-h5">zl</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-card-text>
          <div class="mx-auto text-center">
            <v-avatar color="brown">
              <span class="text-h5">zl</span>
            </v-avatar>
            <h3>zaw win myint</h3>
            <p class="text-caption mt-1">zaw@gmail.com</p>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded :to="{ name: 'accountDetail' }">
              Edit Account
            </v-btn>
            <v-divider class="my-3"></v-divider>
            <v-btn variant="text" rounded> Logout </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-menu>
    <v-btn class="bg-orange ms-2" :to="{ name: 'loginPage' }">Login</v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary class="bg-grey-darken-4">
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        :to="link.href"
        @click="drawer = false"
      >
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from "vuex";
import "../../css/styles.css";

export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      links: [
        { text: "Home", href: "/" },
        { text: "Product", href: "/productPage" },
        { text: "Blog", href: "/about" },
        { text: "Services", href: "/servicePage" },
        { text: "Contact", href: "/contact" },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getShirtCategories",
      "getColors",
      "getTypes",
      "getSizes",
      "getPrices",
      "getSelected",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.pos {
  position: absolute;
  z-index: 3;
  right: 5px;
}
.po {
  position: absolute;
  z-index: 3;
  right: -5px;
}
</style>
