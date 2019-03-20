<template>
  <div id="app">
    <div class = "main">
      <modal
        v-show="isModalVisible"
        @close="closeModal"
        @addFavorites="addFavorites"
        :image = "modalData"
        :keywords = "modalKeywords"
        :favorites = "favorites"
        v-bind:url = "modalURL"/>
      <modalFav
        v-show="isModalVisible2"
        @close2="closeModal2"
        @removeFavorites="removeFavorites"
        :favorites = "favorites"/>
      <button
      type="button"
      class="btn"
      @click="showModal2"
    >
      Open Favorites
    </button>
      <h1>{{title}}</h1>
        <form @submit.prevent="formSubmitted()">
          <div class="row">
            <div class="six columns">
              <label for="searchTerm">Search Term</label>
              <input
                v-model="searchTerm"
                class="u-full-width"
                type="text"
                placeholder="Enter Search Here"
                id="searchTerm"
                name="searchTerm">
            </div>
            <div class="six columns">
              <label for="keyword">Tags/Keywords</label>
              <input
                v-model="keyword"
                class="u-full-width"
                type="text"
                placeholder="Optional"
                id="keyword"
                name="keyword">
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="location">Center</label>
              <input
                v-model="location"
                class="u-full-width"
                type="text"
                placeholder="Optional"
                id="location"
                name="location">
            </div>
            <div class="three columns">
              <label for="start_date">Start Year</label>
              <input
                v-model="start_date"
                class="u-full-width"
                type="text"
                placeholder="Optional"
                id="start_date"
                name="start_date">
            </div>
            <div class="three columns">
              <label for="end_date">End Year</label>
              <input
                v-model="end_date"
                class="u-full-width"
                type="text"
                placeholder="Optional"
                id="end_date"
                name="end_date">
            </div>
          </div>
          <button class="button-primary" type="submit">Search</button>
        </form>
        <img  v-if="loading" src="http://www.kaosart.org/at_land/At-Land/imag/galaxia.gif">
        <h2  v-if="nothing"> There seems to be nothing out here...</h2>
        <div class="images" v-if="images" >
          <img
            v-for="image in images"
            :key="image.nasa_id"
            v-bind:src="image.links[0].href"
            @click="showModal(image)"
            class = "hvr-bounce-in">
        </div>
      </div>
      <div class = "particles">
        <vue-particles
          color="#000000"
          linesColor="#A9A9A9"
          :particlesNumber=90
          :particleOpacity="0.7">
        </vue-particles>
      </div>
  </div>
</template>

<script src="https://unpkg.com/vue"></script>
<script
  src="https://cdn.rawgit.com/officert/vue-slideout-panel/a07d8e2e/dist/vue2-slideout-panel.min.js">
</script>
<script>
import API from './API';
import modal from './components/modal.vue';

export default {
  name: 'app',
  component: {
    modal,
  },
  data() {
    return {
      title: 'NASA Image Search',
      images: [],
      loading: false,
      nothing: false,

      // search queries
      searchTerm: '',
      keyword: '',
      location: '',
      start_date: '1900',
      end_date: '2019',
      favorites: [],

      // data to pass to modal
      isModalVisible: false,
      isModalVisible2: false,
      modalData: [],
      modalKeywords: [],
      modalURL: '',
    };
  },
  methods: {
    // Searches NASA API and returns collection of data
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search([this.searchTerm, this.location, this.start_date, this.end_date, this.keyword])
        .then((images) => {
          this.images = images;
          this.loading = false;

          //Checks if no results
          if (this.images.length === 0) this.nothing = true;
          else this.nothing = false;
        });
    },
    containsKey(obj, key) {
      //array for certain element
      return Object.keys(obj).includes(key);
    },
    showModal(data) {
      this.modalData = data;

      // checks if array has keyword parameter
      if (this.containsKey(data.data[0], 'keywords')) {
        // checks if keywords are in one string, if true = split the string
        const str = data.data[0].keywords[0];
        this.modalKeywords = [];

        //Filters Tags if incorrectly formatted
        if (str.indexOf(',') > -1 && data.data[0].keywords.length === 1)
          this.modalKeywords = str.split(',');
        else if (str.indexOf(';') > -1 && data.data[0].keywords.length === 1)
          this.modalKeywords = str.split(';');
        else this.modalKeywords = data.data[0].keywords;
      }
      this.modalURL = (data.links[0].href);
      this.isModalVisible = true;
    },
    closeModal([info, center]) {
      // checks if user clicked on tag in modal
      if (info !== '') {
        this.location = '';
        this.searchTerm = '';
        this.keyword = info;
        this.formSubmitted();
      }
      else if (center !== '') {
        this.searchTerm = '';
        this.keyword = '';
        this.location = center;
        this.formSubmitted();
      }
      this.isModalVisible = false;
    },
    showModal2(){
      this.isModalVisible2 = true;
    },
    closeModal2(){
      this.isModalVisible2 = false;
    },
    addFavorites(imageAdd) {
      //adds image to favorites
      this.favorites.push(imageAdd);
    },
    removeFavorites(imageLose) {
      //removes corresponding image
      var index = this.favorites.indexOf(imageLose);
      if (index !== -1) {
        this.favorites.splice(index, 1);
      }
      console.log(this.favorites);
    },
  },
};
</script>

<style>

.particles{
  position: fixed;
  z-index: 0;
  height: 100%;
  width: 100%
}

.main{
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  z-index: 1;
  width: 80%;

}

.images {
  z-index: 1;
  margin: 2em auto 0 auto;
  column-count: 3;
}

img {
  width: 100%;
}

/*Modal smooth fade transition*/
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
   transition: opacity .5s ease
}

/*Bounce and enlarge animation for images*/
.hvr-bounce-in {
  display: inline;
  vertical-align: middle;
  -webkit-transform: translateZ(2);
  transform: translateZ(2);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}

.hvr-bounce-in:hover,
.hvr-bounce-in:focus,
.hvr-bounce-in:active {
  -webkit-transform: scale(1.4);
  transform: scale(1.4);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
</style>
