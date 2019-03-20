/* eslint-disable linebreak-style */
<script >
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue';
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue';

export default {
  name: 'modal',
  props: ['image', 'keywords', 'url'],
  component: {
    VueGoodshareFacebook,
    VueGoodshareTwitter,
  },
  methods: {
    close([info, center]) {
      // returns keywords to search if tag clicked
      this.$emit('close', [info, center]);
    },
  },
};
</script>

<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
        <div
          class="modal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalTitle"
          aria-hidden="true">
          <header
            class="modal-header"
            id="modalTitle">
            <slot name="header">
              {{image.data[0].title}}
              <div class="row">
                <vue-goodshare-facebook
                  v-bind:page_url="image.links[0].href"
                  title_social="Facebook"
                  has_icon>
                </vue-goodshare-facebook>
                <vue-goodshare-twitter
                  v-bind:page_url="image.links[0].href"
                  title_social="Twitter"
                  has_icon>
                </vue-goodshare-twitter>
              </div>
            </slot>
          </header>
          <section
            class="modal-body"
            id="modalDescription">
            <slot name="body">
                <button
                type="button"
                class="btn-center"
                @click="close(['' , image.data[0].center])"
                aria-label="Close modal">
                Taken at {{image.data[0].center}}
              </button>
                <br />
                {{image.data[0].description}}
            </slot>
          </section>
          <footer class="modal-footer">
            <slot name="footer">
              <div>Tags:</div>
              <br />
              <div v-for="info in keywords" :key="info.nasa_id">
                <button
                type="button"
                class="btn-tag"
                @click="close([info, ''])"
                aria-label="Close modal">
                {{info}}
              </button>
              </div>
              <button
                type="button"
                class="btn-green"
                @click="close(['',''])"
                aria-label="Close modal">
                Close me!
              </button>
            </slot>
          </footer>
        </div>
      </div>
  </transition>
</template>

<style>
  .modal-backdrop {
    z-index: 5;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: rgb(255, 255, 255);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    font-size: 30px;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    overflow-y: auto;
    font-size: 18px;
    border-top: 1px solid #eeeeee;
    justify-content: space-evenly;
  }


  .modal-body {
    height: 250px;
    overflow-y: auto;
    font-size: 20px;
    position: relative;
    padding: 50px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-tag {
    border: none;
    font-size: 10px;
    padding: 0px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-center {
    border: none;
    font-size: 20px;
    padding: 0px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>
