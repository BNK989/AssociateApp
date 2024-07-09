// plugins/keyboard.js
export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      window.addEventListener('resize', () => {
        const isKeyboardOpen = window.innerHeight < window.outerHeight - 100;
        document.body.style.height = isKeyboardOpen ? `${window.innerHeight}px` : '100vh';
      });
    }
  });
  