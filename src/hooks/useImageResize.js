import { ref, onMounted, onUnmounted } from "vue";

export function useImageResize(promoBanner) {
  const bannerStyle = ref({
    height: "480px",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateImageHeight = () => {
    if (promoBanner.value) {
      bannerStyle.value.height = `${promoBanner.value.height}px`;
    }
  };

  onMounted(() => {
    if (promoBanner.value) {
      promoBanner.value.addEventListener("load", updateImageHeight);
      updateImageHeight();
      scrollToTop();
    }
    window.addEventListener("resize", updateImageHeight);
    scrollToTop();
  });

  onUnmounted(() => {
    if (promoBanner.value) {
      promoBanner.value.removeEventListener("load", updateImageHeight);
      scrollToTop();
    }
    window.removeEventListener("resize", updateImageHeight);
    scrollToTop();
  });

  return { bannerStyle };
}
