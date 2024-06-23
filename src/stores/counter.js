import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        count: 0,
    }),
    actions: {
        increment() {
            this.count++;
        },
        decrement() {
            this.count--;
            if (this.count < 0) {
                this.count = 0;
            }
        },
    },
});
