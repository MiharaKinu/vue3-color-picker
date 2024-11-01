<script setup>
import { ref } from 'vue';
import { ColorPicker } from '../packages/index';
const color = ref('#633633');
</script>

<template>
  <div>
    <ColorPicker v-model="color" />
  </div>
</template>
