<template>
  <div class="loading-indicator">
    <p class="mb-4">{{ message }}</p>
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Full height */
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  position: fixed; /* Fixed position */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000; /* Ensure it is on top */
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-left-color: #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
