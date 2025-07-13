<template>
  <div class="loading-indicator">
    <div class="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Processing Your Essay</h1>
        
        <!-- Progress Bar -->
        <div class="mb-6">
          <div class="flex justify-between items-center mb-2">
            <span class="text-sm font-medium text-gray-600">Progress</span>
            <span class="text-sm font-medium text-indigo-600">{{ progress }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              class="bg-indigo-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <div class="mt-1 text-xs text-right text-gray-500">
            Estimated time remaining: {{ formatTime(remainingTime) }}
          </div>
        </div>
        
        <!-- Current Process -->
        <div class="mb-4 p-4 bg-indigo-50 rounded-lg">
          <div class="flex items-center">
            <div class="flex-shrink-0 h-3 w-3 rounded-full bg-indigo-500 animate-pulse"></div>
            <div class="ml-3 text-sm font-medium text-indigo-800">
              {{ currentProcess.name }} ({{ currentProcess.duration }}s)
            </div>
          </div>
        </div>
        
        <!-- Process Sequence -->
        <div class="space-y-2">
          <div 
            v-for="(process, index) in processes"
            :key="index"
            class="flex items-start py-2 px-1 border-b border-gray-100"
            :class="{
              'opacity-100': index < currentProcessIndex,
              'opacity-60': index >= currentProcessIndex
            }"
          >
            <div 
              class="flex-shrink-0 mt-1 h-2 w-2 rounded-full" 
              :class="index < currentProcessIndex ? 'bg-green-500' : 'bg-gray-300'"
            ></div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-700">{{ process.name }}</p>
              <p class="text-xs text-gray-500">{{ process.duration }} seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const totalTime = 180; // 3 minutes in seconds
const elapsed = ref(0);
const processes = ref([
  { name: "Uploading essay file", duration: 5 },
  { name: "Validating format", duration: 3 },
  { name: "Processing the essay", duration: 5 },
  { name: "Extracting essay context", duration: 3 },
  { name: "Analyzing grammar", duration: 10 },
  { name: "Checking vocabulary", duration: 15 },
  { name: "Evaluating coherence", duration: 20 },
  { name: "Assessing originality", duration: 15 },
  { name: "Generating suggestions", duration: 30 },
  { name: "Calculating final score", duration: 10 },
  { name: "Preparing feedback", duration: 10 },
  { name: "Finalizing report", duration: 5 },
  { name: "Finishing score and feedback", duration: 5 }
]);

const currentProcessIndex = ref(0);
const progress = computed(() => Math.min(Math.floor((elapsed.value / totalTime) * 100), 100));
const remainingTime = computed(() => Math.max(totalTime - elapsed.value, 0));

const currentProcess = computed(() => {
  return processes.value[currentProcessIndex.value];
});

const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

onMounted(() => {
  const interval = setInterval(() => {
    elapsed.value += 1;

    // Update current process based on elapsed time
    let accumulatedTime = 0;
    let found = false;

    for (let i = 0; i < processes.value.length; i++) {
      accumulatedTime += processes.value[i].duration;

      if (elapsed.value <= accumulatedTime && !found) {
        currentProcessIndex.value = i;
        found = true;
      }
    }

    if (elapsed.value >= totalTime) {
      clearInterval(interval);
    }
  }, 1000);
});
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

</style>