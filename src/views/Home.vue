<template>
  <div class="home">
      <v-tag-form />
      <v-card />
      <v-card />
  </div>
</template>

<script>
import VCard from '../components/v-card.vue';
import VTagForm from '../components/v-tag-form.vue';
export default {
  name: 'Home',
  components: {
      VCard,
      VTagForm
  }
}
</script>
