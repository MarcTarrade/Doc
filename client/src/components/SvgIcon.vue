<script>
import { defineAsyncComponent } from 'vue';

export default {
  props: {
    name: {
      type: String,
      required: true,
      color: String
    },
  },

  computed: {
    dynamicComponent() {
      const name = this.name;

      return defineAsyncComponent(() => import(`./Icons/${name}Icon.vue`));
    },
  },
};
</script>

<template>
    <component :is="dynamicComponent" />
</template>