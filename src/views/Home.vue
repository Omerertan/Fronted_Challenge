<template>
  <NewRow />
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import NewRow from "../components/NewRow.vue";

export default defineComponent({
  components: { NewRow },
  setup() {
    return {};
  },
});
</script>
