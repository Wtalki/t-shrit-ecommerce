import { createStore } from "vuex";
import { PriceRanges } from "./types";

export default createStore({
  state: {
    search: "",
    selected: [] as string[],
    selectedSize: [] as string[],
    selectedType: [] as string[],
    items: [
      {
        id: 1,
        name: "Basic White T-Shirt",
        image: ["1.png"],
        price: 19.99,
        description:
          "A simple and classic white t-shirt made from soft cotton.",
        size: "l",
        category: "Casual Wear",
        color: "White",
        type: "Round Neck",
        rating: 5,
        gender: "Women",
        favourite: false,
      },
      {
        id: 2,
        name: "Graphic Print T-Shirt",
        price: 24.99,
        image: ["2.png"],
        description:
          "A trendy t-shirt featuring a bold graphic print on the front.",
        size: "s",
        category: "Graphic Tees",
        color: "Black",
        type: "V-Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 3,
        name: "Sporty Performance Tee",
        price: 29.99,
        image: ["1.png", "2.png", "3.png"],
        description: "A moisture-wicking t-shirt designed for active wear.",
        size: "xxl",
        category: "Sportswear",
        color: "Blue",
        type: "Performance",
        rating: 3,
        gender: "Women",
        favourite: false,
      },
      {
        id: 4,
        name: "Classic Red Tee",
        price: 22.99,
        image: ["2.png", "3.png", "4.png"],
        description: "An iconic red t-shirt for everyday wear.",
        size: "xl",
        category: "Casual Wear",
        color: "Red",
        type: "Round Neck",
        rating: 2,
        gender: "Women",
        favourite: false,
      },
      {
        id: 5,
        name: "Basic White T-Shirt",
        price: 19.99,
        image: ["3.png", "4.png", "5.png"],
        description:
          "A simple and classic white t-shirt made from soft cotton.",
        size: "s",
        category: "Casual Wear",
        color: "White",
        type: "Round Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 6,
        name: "Graphic Print T-Shirt",
        price: 24.99,
        image: ["4.png", "5.png", "6.png"],
        description:
          "A trendy t-shirt featuring a bold graphic print on the front.",
        size: "L",

        category: "Graphic Tees",
        color: "Black",
        type: "V-Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 7,
        name: "Sporty Performance Tee",
        price: 29.99,
        image: ["7.png"],
        description: "A moisture-wicking t-shirt designed for active wear.",
        size: "m",
        category: "Sportswear",
        color: "Blue",
        type: "Performance",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 8,
        name: "Classic Red Tee",
        price: 22.99,
        image: ["6.png", "7.png", "8.png"],
        description: "An iconic red t-shirt for everyday wear.",
        size: "xl",
        category: "Casual Wear",
        color: "Red",
        type: "Round Neck",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 9,
        name: "Striped Polo Shirt",
        price: 34.99,
        image: ["9.png"],
        description: "A stylish polo shirt with classic striped design.",
        size: "l",
        category: "Casual Wear",
        color: "Navy Blue",
        type: "Polo",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 10,

        name: "Vintage Band Tee",
        price: 27.99,
        image: ["8.png", "9.png", "10.png"],
        description:
          "A vintage-inspired t-shirt featuring your favorite band's logo.",
        size: "s",
        category: "Graphic Tees",
        color: "Gray",
        type: "Round Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 11,
        name: "Sleeveless Workout Tank",
        price: 19.99,
        image: ["11.png"],
        description: "A breathable and stretchy tank top for intense workouts.",
        size: "M",
        category: "Sportswear",
        color: "Black",
        type: "Tank Top",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 12,
        name: "Basic White T-Shirt",
        image: ["1.png"],
        price: 19.99,
        description:
          "A simple and classic white t-shirt made from soft cotton.",
        size: "l",
        category: "Casual Wear",
        color: "White",
        type: "Round Neck",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 13,
        name: "Graphic Print T-Shirt",
        price: 24.99,
        image: ["2.png"],
        description:
          "A trendy t-shirt featuring a bold graphic print on the front.",
        size: "s",
        category: "Graphic Tees",
        color: "Black",
        type: "V-Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 14,
        name: "Sporty Performance Tee",
        price: 29.99,
        image: ["3.png"],
        description: "A moisture-wicking t-shirt designed for active wear.",
        size: "xxl",
        category: "Sportswear",
        color: "Blue",
        type: "Performance",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 15,
        name: "Classic Red Tee",
        price: 22.99,
        image: ["11.png", "12.png", "13.png"],
        description: "An iconic red t-shirt for everyday wear.",
        size: "xl",
        category: "Casual Wear",
        color: "Red",
        type: "Round Neck",
        rating: 4,
        gender: "Women",
        favourite: false,
      },
      {
        id: 16,
        name: "Basic White T-Shirt",
        price: 19.99,
        image: ["12.png", "13.png", "14.png"],
        description:
          "A simple and classic white t-shirt made from soft cotton.",
        size: "s",
        category: "Casual Wear",
        color: "White",
        type: "Round Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 18,
        name: "Graphic Print T-Shirt",
        price: 24.99,
        image: ["6.png"],
        description:
          "A trendy t-shirt featuring a bold graphic print on the front.",
        size: "l",

        category: "Graphic Tees",
        color: "Black",
        type: "V-Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 19,
        name: "Sporty Performance Tee",
        price: 29.99,
        image: ["7.png"],
        description: "A moisture-wicking t-shirt designed for active wear.",
        size: "m",
        category: "Sportswear",
        color: "Blue",
        type: "Performance",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 20,
        name: "Classic Red Tee",
        price: 22.99,
        image: ["8.png"],
        description: "An iconic red t-shirt for everyday wear.",
        size: "xl",
        category: "Casual Wear",
        color: "Red",
        type: "Round Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 21,
        name: "Striped Polo Shirt",
        price: 34.99,
        image: ["9.png"],
        description: "A stylish polo shirt with classic striped design.",
        size: "l",
        category: "Casual Wear",
        color: "Navy Blue",
        type: "Polo",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 22,

        name: "Vintage Band Tee",
        price: 27.99,
        image: ["10.png"],
        description:
          "A vintage-inspired t-shirt featuring your favorite band's logo.",
        size: "s",
        category: "Graphic Tees",
        color: "Gray",
        type: "Round Neck",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
      {
        id: 23,
        name: "Sleeveless Workout Tank",
        price: 19.99,
        image: ["17.png"],
        description: "A breathable and stretchy tank top for intense workouts.",
        size: "M",
        category: "Sportswear",
        color: "Black",
        type: "Tank Top",
        rating: 4,
        gender: "Men",
        favourite: false,
      },
    ],

    priceRanges: [
      { label: "1 to 5", min: 1, max: 5 },
      { label: "5 to 10", min: 5, max: 10 },
      { label: "10 to 20", min: 10, max: 20 },
      { label: "20 and over", min: 20, max: Infinity },
    ],
    showFavourites: false,
    selectedPriceRanges: [] as PriceRanges[],
    selectedCategory: "",
    selectedGender: "",
    currentPage: 1,
    itemsPerPage: 8,
    homeItems: 8,
    cartItems: 20,
  },
  getters: {
    filterItems(state) {
      return state.items.filter((item) => {
        const matchesSearch = item.name
          .toLowerCase()
          .includes(state.search.toLowerCase());
        const matchesCategory = state.selectedCategory
          ? item.category === state.selectedCategory
          : true;
        const matchesGender = state.selectedGender
          ? item.gender === state.selectedGender
          : true;
        const matchesType = state.selectedType.length
          ? state.selectedType.includes(item.type)
          : true;
        const matchesColor = state.selected.length
          ? state.selected.includes(item.color)
          : true;
        const matchesSize = state.selectedSize.length
          ? state.selectedSize.includes(item.size)
          : true;
        const matchesPrice = state.selectedPriceRanges.length
          ? state.selectedPriceRanges.some(
              (range) => item.price >= range.min && item.price <= range.max
            )
          : true;
        const matchesFavorite = state.showFavourites ? item.favourite : true;
        return (
          matchesSearch &&
          matchesGender &&
          matchesCategory &&
          matchesType &&
          matchesColor &&
          matchesSize &&
          matchesPrice &&
          matchesFavorite
        );
      });
    },
    paginatedItems(state, getters) {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return getters.filterItems.slice(start, end);
    },
    pageCount(state, getters) {
      return Math.ceil(getters.filterItems.length / state.itemsPerPage);
    },
    homeItemsPage(state) {
      const start = (state.currentPage - 1) * state.homeItems;
      const end = start + state.homeItems;
      return state.items.slice(start, end);
    },
    homeCount(state) {
      return Math.ceil(state.items.length / state.homeItems);
    },
    cartItemsPage(state) {
      const start = (state.currentPage - 1) * state.cartItems;
      const end = start + state.cartItems;
      return state.items.slice(start, end);
    },
    cartShowCount(state) {
      return Math.ceil(state.items.length / state.cartItems);
    },

    categories(state) {
      return new Set(state.items.map((item) => item.category));
    },
    gender(state) {
      return new Set(state.items.map((item) => item.gender));
    },
    types(state) {
      return new Set(state.items.map((item) => item.type));
    },
    colors(state) {
      return new Set(state.items.map((item) => item.color));
    },
    sizes(state) {
      return new Set(state.items.map((item) => item.size));
    },
    favouriteItems(state) {
      return state.items.filter((item) => item.favourite);
    },
    //product data id
    // getProductById: (state) => (id) => {
    //   return state.items.find((item) => item.id === id);
    // },
  },
  mutations: {
    setShowFavorites(state, showFavorites) {
      state.showFavourites = showFavorites;
    },
    toggleFavourite(state, id) {
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.favourite = !item.favourite;
      }
    },
    setSearch(state, search) {
      state.search = search;
    },
    setSelectCategory(state, category) {
      state.selectedCategory = category;
    },
    setSelectGender(state, gender) {
      state.selectedGender = gender;
    },
    setSelectType(state, type) {
      state.selectedType = type;
    },
    setSelectColor(state, color) {
      state.selected = color;
    },
    setSelectSize(state, size) {
      state.selectedSize = size;
    },
    setSelectPriceRanges(state, priceRanges) {
      state.selectedPriceRanges = priceRanges;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setItemsPerPage(state, itemsPerPage) {
      state.itemsPerPage = itemsPerPage;
    },
  },
  actions: {},
  modules: {},
});
