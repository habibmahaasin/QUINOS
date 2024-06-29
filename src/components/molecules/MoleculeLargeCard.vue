<template>
    <div class="w-full">
        <div class="flex flex-row gap-2">
            <img src="../../assets/product/product-1.png" alt="Vue logo" class="w-32 flex-0" />
            <div class="flex-1 flex flex-col gap-2 justify-between">
                <div class="text-[16px]">
                    <p class="font-bold">{{ name }}</p>
                    <p>Short description</p>
                    <p>{{ price }}</p>
                </div>
                <AtomsButton type="primary" class="w-full" @click="redirectToProduct"> Add </AtomsButton>
            </div>
        </div>
    </div>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";
import { useRouter } from "vue-router";

export default {
    name: "MoleculeLargeCard",
    components: {
        AtomsButton,
    },
    props: {
        name: {
            type: String,
            default: "New Product",
        },
        price: {
            type: String,
            default: "IDR 100.000",
        },
    },
    setup() {
        const router = useRouter();

        const redirectToProduct = () => {
            router.push("/product-detail");
        };

        return {
            redirectToProduct,
        };
    },
};
</script>
