<template>
    <button :class="computedClasses" @click="handleClick" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "AtomsButton",
    props: {
        type: {
            type: String,
            default: "primary",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        computedClasses() {
            return [
                "px-4 py-2 rounded-lg",
                {
                    "bg-[#1AB394] text-white hover:bg-[#08a384]": this.type === "primary",
                    "ring ring-2 ring-inset ring-[#1AB394] text-[#08a384] hover:bg-[#08a384] hover:text-white hover:ring-0":
                        this.type === "primary-outline",
                    "bg-gray-500 text-black hover:bg-gray-600": this.type === "secondary",
                    "bg-red-500 text-white hover:bg-red-600": this.type === "danger",
                    // Add more types as needed
                },
                {
                    "opacity-50 cursor-not-allowed": this.disabled,
                },
            ];
        },
    },
    methods: {
        handleClick() {
            this.$emit("click");
        },
    },
};
</script>
