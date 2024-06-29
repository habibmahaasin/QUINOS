<template>
    <dialog :id="modalId" class="modal max-w-md mx-auto">
        <div class="modal-box flex flex-col gap-6">
            <div class="flex justify-between">
                <h3 class="text-lg font-bold">Category</h3>
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost">✕</button>
                </form>
            </div>
            <div class="flex gap-2">
                <AtomsButton type="secondary">Beverage</AtomsButton>
                <AtomsButton type="primary">A-Z</AtomsButton>
            </div>
            <div class="flex flex-col gap-6">
                <div v-for="(category, index) in categories" :key="index" class="flex justify-between">
                    <p>{{ category.name }}</p>
                    <p>({{ category.count }})</p>
                </div>
            </div>
        </div>
    </dialog>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";

export default {
    name: "MoleculeCategoryModal",
    components: {
        AtomsButton,
    },
    props: {
        modalId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            categories: [
                { name: "Category 1", count: 10 },
                { name: "Category 2", count: 15 },
                { name: "Category 3", count: 8 },
                { name: "Category 4", count: 12 },
                { name: "Category 5", count: 20 },
                // Add more categories as needed
            ],
        };
    },
};
</script>
