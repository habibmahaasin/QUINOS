import { ref, onMounted, onUnmounted } from "vue";

export function useImageResize(promoBanner) {
    const bannerStyle = ref({
        height: "480px",
    });

    const updateImageHeight = () => {
        if (promoBanner.value) {
            bannerStyle.value.height = `${promoBanner.value.height}px`;
            console.log("Image height:", promoBanner.value.height);
        }
    };

    onMounted(() => {
        if (promoBanner.value) {
            promoBanner.value.addEventListener("load", updateImageHeight);
            updateImageHeight();
        }
        window.addEventListener("resize", updateImageHeight);
    });

    onUnmounted(() => {
        if (promoBanner.value) {
            promoBanner.value.removeEventListener("load", updateImageHeight);
        }
        window.removeEventListener("resize", updateImageHeight);
    });

    return { bannerStyle };
}
