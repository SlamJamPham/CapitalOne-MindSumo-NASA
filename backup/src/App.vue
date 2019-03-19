
<template>
  <div id="app">
    <div class = "main">
      
      <modal v-show="isModalVisible" @close="closeModal" :image = "modalData" :keywords = "modalKeywords"/>
      <h1>{{title}}</h1>
        <form @submit.prevent="formSubmitted()">
          <div class="row">
            <div class="six columns">
              <label for="searchTerm">Search Term</label>
              <input v-model="searchTerm" class="u-full-width" type="text" placeholder="Enter Search Here" id="searchTerm" name="searchTerm">
            </div>
            <div class="six columns">
              <label for="keyword">Keywords</label>
              <input v-model="keyword" class="u-full-width" type="text" placeholder="Optional" id="keyword" name="keyword">
            </div>
          </div>
          <div class="row">
            <div class="six columns">
              <label for="location">Location</label>
              <input v-model="location" class="u-full-width" type="text" placeholder="Optional" id="location" name="location">
            </div>
            <div class="three columns">
              <label for="start_date">Start Year</label>
              <input v-model="start_date" class="u-full-width" type="text" placeholder="Optional" id="start_date" name="start_date">
            </div>
            <div class="three columns">
              <label for="end_date">End Year</label>
              <input v-model="end_date" class="u-full-width" type="text" placeholder="Optional" id="end_date" name="end_date">
            </div>
          </div>
          <button class="button-primary" type="submit">Search</button>
        </form>
        <img  v-if="loading" src="http://www.kaosart.org/at_land/At-Land/imag/galaxia.gif">
        <div class="images" v-if="images" >
          <img v-for="image in images" :key="image.nasa_id" v-bind:src="image.links[0].href" @click="showModal(image)" class = "hvr-bounce-in">
        </div>
      </div>
      <vue-particles color="#000000" linesColor="#A9A9A9" :particleOpacity="0.7" ></vue-particles>
  </div>
</template>


<script>
import API from './API';
import modal from './components/modal.vue';
import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";

export default {
  name: 'app',
  component: {
    modal,
    VueGoodshareFacebook,
  },
  data() {
    return {
      title: 'NASA Image Search',
      searchTerm: '',
      keyword: '',
      location: '',
      start_date: '1900',
      end_date: '2019',
      images: [],

      modalData: null,
      loading: false,
      isModalVisible: false,
      modalData: [],
      modalKeywords: [],
    };
  },
  methods: {
    formSubmitted() {
      this.loading = true;
      this.images = [];
      API.search([this.searchTerm, this.location, this.start_date, this.end_date, this.keyword])
        .then((images) => {
          this.images = images;
          this.loading = false;
          // console.log(this.images)
        });
    },
    showModal(data) {
      
      this.modalData = data;
      let str = data.data[0].keywords[0];
      if(data.data[0].keywords.length == 1) this.modalKeywords= str.split(",");
      else this.modalKeywords = data.data[0].keywords;
      this.isModalVisible = true;
      console.log(this.modalKeywords);
    },
    closeModal(info) {
      if(info != ""){
        this.location = '';
        this.searchTerm = '';
        this.keyword = info;
      }
      this.isModalVisible = false;
      this.formSubmitted();
    },
    
  },
};
</script>

<style>
body {
  width: 80%;
  margin: 2em auto 0 auto;
}

.images {
  column-count: 3;
}

img {
  width: 100%;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
   transition: opacity .5s ease
}

.hvr-bounce-in {
  display: inline;
  vertical-align: middle;
  -webkit-transform: translateZ(1);
  transform: translateZ(1);
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
  -webkit-transform: scale(1.25);
  transform: scale(1.25);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}
</style>
