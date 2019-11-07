<template>
<v-container>
  <button @click="popupClicked">Click Me!</button>
  <h3 class="red--text">{{text}}</h3>
</v-container>
</template>

<script>
export default {
  name: 'PopupContent',
  props: {
      text: String,
  },
  methods: {
    popupClicked() {
      alert('Popup Clicked!');
    }
  }
}
</script>