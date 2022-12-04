<script setup>
import Preview from "../components/Preview.vue";
import Form from "../components/Form.vue";
</script>

<template>
  <div class="resume">
    <Form />
    <Preview />
  </div>
</template>
¸
<style scoped>
@media (min-width: 1024px) {
  .resume {
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
  }
}
</style>
