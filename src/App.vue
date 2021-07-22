<template>
  <main-screen 
    v-if="statusMatch === 'default'"
    @onStart="onHandelBeforeStart($event)"
  />
  <interact-screen 
    v-if="statusMatch === 'match'"
    :cardsContext="settings.cardsContext"
    @onFinish="onGetResult"
  />
  <result-screen
    v-if="statusMatch === 'result'" 
    :timer="timer"
    @onStartAgain="statusMatch = 'default'"
  />
  <copy-right />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import ResultScreen from "./components/ResultScreen.vue";
import CopyRight from "./components/CopyRight.vue";
import { splitArray, shuffled } from "./utils/helpers";

export default {
  name: 'App',
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    CopyRight,
  },
  data() {
    return {
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      statusMatch: "default",
      timer: 0,
    }
  },
  methods: {
    onHandelBeforeStart(config) {
      this.settings.totalOfBlocks = config.totalOfBlocks;
      const firstCards = splitArray(this.settings.totalOfBlocks);
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];
      this.settings.cardsContext = shuffled(shuffled(shuffled(shuffled(cards))));
      this.settings.startedAt = new Date().getTime();

      // data ready
      this.statusMatch = "match";
    },
    onGetResult() {
      this.timer = new Date().getTime() - this.settings.startedAt;

      // switch to component result
      this.statusMatch = "result";
    }
  }
}
</script>
