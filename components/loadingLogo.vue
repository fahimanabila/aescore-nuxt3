<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <img
      src="/public/icons/logo_aescore.png"
      alt="Loading"
      class="w-auto h-32 animate-pulse"
    />
  </div>
</template>

<style scoped>
@keyframes beat {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

.animate-pulse {
  animation: beat 1s infinite;
}
</style>