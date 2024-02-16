<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import AppModal from './components/AppModal.vue';
import { store } from './store/index';
export default {
  data() {
    return {
      store,
    }
  },

  components: { AppHeader, AppMain, AppFooter, AppModal }
};
</script>

<template>
  <div class="app-container">
    <AppHeader></AppHeader>
    <AppModal v-if="this.store.modal.show"></AppModal>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="scss">
@use '../src/styles/general.scss' as *;

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
