/* eslint-disable linebreak-style */
<script >

export default {
  name: 'modalFavFav',
  props: ['favorites'],

  methods: {
    close() {
      this.$emit('close2');
    },
    removeFavorites(imageLose) {
      // returns image to be removed
      this.$emit('removeFavorites', imageLose);
    },
  },
};
</script>

<template>
  <transition name="modalFav-fade">
    <div class="modalFav-backdrop">
        <div
          class="modalFav"
          tabindex="-1"
          role="dialog"
          aria-labelledby="mymodalFavTitle"
          aria-hidden="true">
          <header
            class="modalFav-header"
            id="modalFavTitle">
            <slot name="header">
              Your Favorites!
              <button
              type="button"
              class="btn-close2"
              @click="close"
              aria-label="Close modalFav"
              >
                x
            </button>
            </slot>
          </header>
          <section
            class="modalFav-body"
            id="modalFavDescription">
            <slot name="body">
               <div v-for="fav in favorites" :key="fav.nasa_id">
                <img v-bind:src=fav>
                <button
                type="button"
                class="btn-red"
                @click="removeFavorites(fav)"
                aria-label="Close modalFav">
                Remove
              </button>
              </div>
            </slot>
          </section>
        </div>
      </div>
  </transition>
</template>

<style>
  .modalFav-backdrop {
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

  .modalFav {
    background: rgb(255, 255, 255);
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }

  .modalFav-header {
    padding: 15px;
    display: flex;
  }

  .modalFav-header {
    font-size: 30px;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modalFav-body {
    overflow-y: auto;
    font-size: 20px;
    height: 500px;
    position: relative;
    padding: 50px 10px;
  }

  .btn-close2 {
    border: none;
    font-size: 20px;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-red {
    color: white;
    background: rgb(174, 74, 74);
    border: 1px solid rgb(174, 74, 74);
    border-radius: 2px;
  }
</style>
