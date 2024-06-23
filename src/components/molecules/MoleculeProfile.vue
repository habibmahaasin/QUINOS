<template>
    <div>
        <div class="flex gap-2">
            <img src="../../assets/profile/avatar-1.svg" alt="Vue logo" class="h-10" />
            <div class="text-[14px]">
                <p class="font-bold">Table {{ table }}</p>
                <p>{{ name }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MoleculeProfile",
    props: {
        name: {
            type: String,
            default: "John Doe",
        },
        table: {
            type: String,
            default: "Not Assigned",
        },
    },
};
</script>
