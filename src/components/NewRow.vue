<template>
  <div v-if="!show" class="w-full border-dashed border-2 border-slate-300 h-48 mt-5">
    <div class="flex justify-end p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-x h-8 w-8 fill-slate-500"
        viewBox="0 0 16 16"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="w-full grid grid-cols-1 gap-4 justify-items-center">
      <div
        class="flex justify-center align-middle cursor-pointer"
        @click="changeShow"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-10 h-10 bi bi-plus-circle-fill fill-blue-500 text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
          />
        </svg>
      </div>

      <div>
        <p class="text-slate-500">Yeni Satır Ekle</p>
      </div>
    </div>
  </div>

  <div v-else class="w-full border-dashed border-2 border-slate-300 p-4 mt-5">
    <div class="flex justify-end p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        class="bi bi-x h-8 w-8 fill-slate-500 cursor-pointer"
        viewBox="0 0 16 16"
        @click="changeShow"
      >
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </div>
    <div class="w-full grid grid-cols-1 gap-4 justify-items-center">
      <div>
        <p class="text-slate-500">SATIR YAPISINI SECINIZ</p>
      </div>

      <div class="flex justify-center align-middle space-x-4 w-1/2">
        <div
          v-for="(item, i) in 6"
          :key="i"
          class="w-1/6 fill-slate-300 hover:fill-black cursor-pointer"
          @click="goToDesignPreview(i)"
        >
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50">
            <path :d="sectionData[i].svgattr" />
          </svg>
        </div>
      </div>

      <div class="flex justify-center align-middle space-x-4 w-1/2">
        <div
          v-for="(item, i) in 6"
          :key="i + 6"
          class="w-1/6 fill-slate-300 hover:fill-black cursor-pointer"
          @click="goToDesignPreview(i + 6)"
        >
          <svg xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 50">
            <path :d="sectionData[i + 6].svgattr" />
          </svg>
        </div>
      </div>
    </div>
    <!-- <p>{{ item }}</p> -->
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "../store";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const show = ref(false);
    // const item = ref("");

    const sectionData = computed(() => {
      return store.state.data;
    });

    const changeShow = () => {
      show.value = !show.value;
    };

    const pushItem = (value) => {
      switch (value) {
        case 0:
          store.commit("setItem", {
            id: 10,
            svgattr: "M100,0V50H0V0Z",
            kolon: [
              {
                id: "25yl85j",
                width: 100,
              },
            ],
          });
          break;
        case 1:
          store.commit("setItem", {
            id: 20,
            svgattr: "M49,0V50H0V0Z M100,0V50H51V0Z",
            kolon: [
              {
                id: "r79ev3o",
                width: 50,
              },
              {
                id: "4m4im7j",
                width: 50,
              },
            ],
          });
          break;
        case 2:
          store.commit("setItem", {
            id: 30,
            svgattr: "M32, 0V50H0V0Z M66, 0V50H34V0Z M100, 0V50H68V0Z",
            kolon: [
              {
                id: "jtm2zsp",
                width: 33,
              },
              {
                id: "t5jl0xn",
                width: 33,
              },
              {
                id: "w6kx27y",
                width: 33,
              },
            ],
          });
          break;
        case 3:
          store.commit("setItem", {
            id: 40,
            svgattr:
              "M23.5,0V50H0V0Z M49,0V50H25.5V0Z M74.5,0V50H51V0Z M100,0V50H76.5V0Z",
            kolon: [
              {
                id: "0bz8jj1",
                width: 25,
              },
              {
                id: "p4fybdh",
                width: 25,
              },
              {
                id: "ffiosh2",
                width: 25,
              },
              {
                id: "fcnorwk",
                width: 25,
              },
            ],
          });
          break;
        case 4:
          store.commit("setItem", {
            id: 21,
            svgattr: "M32.6667,0V50H0V0Z M100,0V50H34.6667V0Z",
            kolon: [
              {
                id: "j33w2jz",
                width: 33,
              },
              {
                id: "rj3g584",
                width: 66,
              },
            ],
          });
          break;
        case 5:
          store.commit("setItem", {
            id: 22,
            svgattr: "M65.3333,0V50H0V0Z M100,0V50H67.3333V0Z",
            kolon: [
              {
                id: "vrltrrg",
                width: 66,
              },
              {
                id: "xw928p2",
                width: 33,
              },
            ],
          });
          break;
        case 6:
          store.commit("setItem", {
            id: 31,
            svgattr: "M24,0V50H0V0Z M50,0V50H26V0Z M100,0V50H52V0Z",
            kolon: [
              {
                id: "hz8kkmu",
                width: 25,
              },
              {
                id: "02y2tgi",
                width: 25,
              },
              {
                id: "ggyvyuf",
                width: 50,
              },
            ],
          });
          break;
        case 7:
          store.commit("setItem", {
            id: 32,
            svgattr: "M48,0V50H0V0Z M74,0V50H50V0Z M100,0V50H76V0Z",
            kolon: [
              {
                id: "i5rjm94",
                width: 50,
              },
              {
                id: "tx5xcin",
                width: 25,
              },
              {
                id: "o9fhpnq",
                width: 25,
              },
            ],
          });
          break;
        case 8:
          store.commit("setItem", {
            id: 33,
            svgattr: "M24,0V50H0V0Z M74,0V50H26V0Z M100,0V50H76V0Z",
            kolon: [
              {
                id: "kmxv5sb",
                width: 25,
              },
              {
                id: "yaokxjc",
                width: 50,
              },
              {
                id: "1vojm7u",
                width: 25,
              },
            ],
          });
          break;
        case 9:
          store.commit("setItem", {
            id: 50,
            svgattr:
              "M18.4,0V50H0V0Z M38.8,0V50H20.4V0Z M59.2,0V50H40.8V0Z M79.6,0V50H61.2V0Z M100,0V50H81.6V0Z",
            kolon: [
              {
                id: "3nzkwr3",
                width: 20,
              },
              {
                id: "f6wxqjm",
                width: 20,
              },
              {
                id: "zi9ez97",
                width: 20,
              },
              {
                id: "303zqdq",
                width: 20,
              },
              {
                id: "gih4omv",
                width: 20,
              },
            ],
          });
          break;
        case 10:
          store.commit("setItem", {
            id: 60,
            svgattr:
              "M15,0V50H0V0Z M32,0V50H17V0Z M49,0V50H34V0Z M66,0V50H51V0Z M83,0V50H68V0Z M100,0V50H85V0Z",
            kolon: [
              {
                id: "26czmnf",
                width: 16,
              },
              {
                id: "siqjy6s",
                width: 16,
              },
              {
                id: "a5x2s94",
                width: 16,
              },
              {
                id: "js2dnp6",
                width: 16,
              },
              {
                id: "9ss96cy",
                width: 16,
              },
              {
                id: "qt3essn",
                width: 16,
              },
            ],
          });
          break;
        case 11:
          store.commit("setItem", {
            id: 34,
            svgattr: "M16,0V50H0V0Z M82,0V50H18V0Z M100,0V50H84V0Z",
            kolon: [
              {
                id: "tenhw8n",
                width: 16,
              },
              {
                id: "xconz6z",
                width: 66,
              },
              {
                id: "vkilnfi",
                width: 16,
              },
            ],
          });
          break;
        default:
          break;
      }
    };

    const goToDesignPreview = (value) => {
      // item.value = value;

      pushItem(value);

      store.commit(
        "setRowList",
        store.state.rowList.filter((x) => x.kolon.length > 0)
      );
      if (route.name === "home") {
        router.push({ name: "designPreview" });
      }
      show.value = false;
    };

    return {
      show,
      changeShow,
      goToDesignPreview,
      sectionData,
    };
  },
});
</script>
