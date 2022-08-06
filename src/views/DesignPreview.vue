<template>  
  <div class="mt-6" v-if="rowList.length > 0">
    <!-- satır -->
    <draggable
      :list="rowList"
      group="id"
      item-key="id"
      @change="changeRow($event)"
    >
      <template #item="{ element, index }">
        <div class="h-10 w-full">
          <!-- kolon -->
          <div
            v-show="index === selectRow"
            class="flex justify-center w-28 inset-x-0 m-auto -mt-5 selection-button"
            :class="{
              'flex absolute': index === selectRow,
              hidden: index !== selectRow,
            }"
            @mouseover="selectRow = index"
            @mouseleave="selectRow = ''"
          >
            <div
              class="w-5 h-5 cursor-pointer bg-blue-300"
              @click="addRow(element)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-plus fill-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </div>
            <div class="w-5 h-5 cursor-pointer bg-blue-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-grid-3x2-gap-fill fill-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z"
                />
              </svg>
            </div>
            <div
              class="w-5 h-5 cursor-pointer bg-blue-300"
              @click="removeRow(element, index)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="bi bi-x fill-white"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </div>
          </div>
          <draggable
            :list="element.kolon"
            group="id"
            item-key="element.id"
            class="flex w-full hover:border-blue-300 hover:border-t-2 hover:border-b-2 cursor-pointer"
            @mouseover="selectRow = index"
            @mouseleave="selectRow = ''"
            @change="changeColumn($event, index)"
          >
            <template #item="{ element }">
              <div
                :id="`${Math.random()}`"
                class="border-dashed border-2 border-slate-600 text-slate-500 m-1 flex justify-center w-full"
                :style="{ width: element.width + '%' }"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="bi bi-plus h-5 w-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </div>
            </template>
          </draggable>
        </div>
      </template>
    </draggable> 
  </div>

  <NewRow />
</template>
<script>
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import NewRow from "../components/NewRow.vue";
import { useStore } from "../store";
import draggable from "vuedraggable";

export default defineComponent({
  components: { NewRow, draggable },
  setup() {
    const store = useStore();
    const selectRow = ref("");
    const rowList = computed(() => {
      return store.state.rowList;
    });

    const changeRow = (e) => {
      console.log("changeRow", e);
    };

    const addRow = (e) => {
      rowList.value.push(e);
      store.commit("setRowList", rowList.value);
    };

    const removeRow = (e, i) => {
      // Satır silme
      rowList.value.splice(i, 1);
      store.commit("setRowList", rowList.value);
    };

    const changeColumn = (e, i) => {
      console.log("index", i);
      if (!!e.removed) {
        // store.state.rowList.filter((x) => x.kolon.some(i => i.id === e.removed.element.id));

        if (rowList.value[i] && rowList.value[i].kolon) {
          let newCol = rowList.value[i].kolon.map((element) => {
            element.width = 100;
            return element;
          });
          rowList.value[i].kolon = newCol;
        }

        store.commit(
          "setRowList",
          rowList.value.map((element) => {
            if (typeof element.id == "string") {
              return {
                id: 10,
                svgattr: "M100,0V50H0V0Z",
                kolon: [
                  {
                    id: element.id + "-" + i,
                    width: 100,
                  },
                ],
              };
            }
            return element;
          })
        );
      } else if (!!e.added) {
        let colCount = rowList.value[i].kolon.length;
        let newCol = rowList.value[i].kolon.map((element) => {
          element.width = 100 / colCount;
          return element;
        });
        rowList.value[i].kolon = newCol;

        store.commit("setRowList", rowList.value);
      }
      store.commit(
        "setRowList",
        rowList.value.filter((x) => x.kolon && x.kolon.length > 0)
      );
      console.log("changeColumn", e);
      store.commit(
        "setRowList",
        rowList.value.filter((x) => x.kolon.length > 0)
      );
    };

    // watch(
    //   () => rowList.value,
    //   () => {
    //     store.commit(
    //       "setRowList",
    //       rowList.value.filter((x) => x.kolon.length > 0)
    //     );
    //   }
    // );

    return {
      rowList,
      changeRow,
      removeRow,
      changeColumn,
      selectRow,
      addRow,
    };
  },
});
</script>
