<template>
  <div class="p-6">
    <div class="flex items-left">
      <img src="@/public/icons/logo_aescore.png" alt="Logo" class="h-14 my-5" />
    </div>
    
    <h1 class="text-2xl font-bold mb-4" v-if="gradingHistory.length > 0">{{ gradingHistory[0].title }}</h1>
    <p class="mb-2" v-if="gradingHistory.length > 0">
      <strong>Recipient:</strong> {{ gradingHistory[0].recipient }}
    </p>
    <p class="mb-2" v-if="gradingHistory.length > 0">
      <strong>Graded on:</strong> {{ formatDate(gradingHistory[0].timestamp) }}
    </p>
    <p class="mb-2" v-if="gradingHistory.length > 0">
      <strong>Total Score:</strong> {{ gradingHistory[0].response.Total_score }}
    </p>
    
    <h2 class="text-xl font-semibold mt-6 mb-2">Essay:</h2>
    <p class="mb-4" v-if="gradingHistory.length > 0">
      {{ gradingHistory[0].body }}
    </p>

    <h2 class="text-xl font-semibold mt-6 mb-2">Rubric Details:</h2>
    <table class="min-w-full border-collapse border border-gray-300" v-if="gradingHistory.length > 0">
      <thead>
        <tr>
          <th class="border border-gray-300 px-2 py-1 text-sm">No</th>
          <th class="border border-gray-300 px-2 py-1 text-sm">Rubric Name</th>
          <th class="border border-gray-300 px-2 py-1 text-sm">Rubric Feedback</th>
          <th class="border border-gray-300 px-2 py-1 text-sm">Binary Value</th>
          <th class="border border-gray-300 px-2 py-1 text-sm">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(rubric, index) in gradingHistory[0]?.response?.RubricDetails" :key="index">
          <td class="border border-gray-300 px-2 py-1 text-sm">{{ index + 1 }}</td>
          <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.name }}</td>
          <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.reasoning }}</td>
          <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.binaryValue }}</td>
          <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.weight }}</td>
        </tr>
      </tbody>
    </table>

    <p v-else class="mt-4 text-red-500">No grading history found.</p>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.params.id;

// Reactive reference for grading history
const gradingHistory = ref([]);

// Function to load grading history from localStorage
const loadGradingHistory = () => {
  const keys = Object.keys(localStorage);
  gradingHistory.value = keys
    .filter(key => key.startsWith(id)) // Filter keys that start with 'grading_'
    .map(key => JSON.parse(localStorage.getItem(key))) // Parse and return the stored JSON
    .filter(item => item); // Filter out any null or undefined items
};

// Call the function to load grading history when the component is mounted
onMounted(() => {
  loadGradingHistory();
  
  // Delay slightly to ensure all content is loaded before printing
  setTimeout(() => {
    if (gradingHistory.value.length > 0) {
      window.print();
    }
  }, 500);
});

// Function to format date (assuming you have this function defined)
function formatDate(isoString) {
  const date = new Date(isoString);

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  const getSuffix = (d) => {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${day}${getSuffix(day)} ${month} ${year} ${hours}:${minutes}:${seconds}`;
}
</script>

<style scoped>
/* Add any additional styles if needed */
</style>