<template>
    <div class="min-w-36">
        <div class="flex flex-col gap-2">
            <img src="../../assets/product/product-1.png" alt="Vue logo" class="w-full" />
            <div class="text-[14px]">
                <p class="font-bold">{{ name }}</p>
                <p>{{ price }}</p>
            </div>
            <AtomsButton type="primary" @click="redirectToProduct"> Add </AtomsButton>
        </div>
    </div>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";
import { useRouter } from "vue-router";

export default {
    name: "MoleculeSmallCard",
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
