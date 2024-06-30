<template>
    <dialog :id="modalId" class="modal max-w-md mx-auto">
        <div class="modal-box flex flex-col gap-6">
            <div class="flex justify-between">
                <h3 class="text-lg font-bold">Order is Submitted</h3>
            </div>
            <div class="flex flex-col items-center gap-4">
                <img src="../../assets/icon/submitted-icon.svg" alt="Order Submitted" />
                <p class="text-center leading-[20px]">
                    We've received Your order list! <br />
                    The chefs are cooking your order.
                </p>
            </div>
            <div class="flex gap-2">
                <AtomsButton type="primary-outline" class="flex-1">Add More Order</AtomsButton>
                <AtomsButton type="primary" class="flex-1">Home</AtomsButton>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script>
import AtomsButton from "../atoms/AtomsButton.vue";

export default {
    name: "MoleculeCartModal",
    components: {
        AtomsButton,
    },
    props: {
        modalId: {
            type: String,
            required: true,
        },
    },
};
</script>
