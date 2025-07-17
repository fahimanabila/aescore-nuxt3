<template>
  <div class="history-page">
    <div class="fixed max-h-screen inset-0 -z-10">
      <!-- <div class="blob center-blob blur-[100px] bg-gradient-to-br from-[#004aad] to-[#c8112e] animate-move1"></div> -->
    </div>

    <!-- Navbar -->
    <header class="flex items-center justify-between px-8 py-4 shadow">
      <div class="flex items-center gap-2 text-xl font-bold">
        <NuxtLink to="/">
          <img :src="logo" alt="Logo" class="w-auto h-10" />
        </NuxtLink>
      </div>
      <nav class="flex gap-4 items-center text-sm">
        <div class="relative group flex">
          <NuxtLink to="/grade">
            <button class="hover:text-[#004aad] inline-block align-middle">Grade </button>
          </NuxtLink>
        </div>
        <NuxtLink to="/rubrics">
          <button class="hover:text-[#004aad] inline-block align-middle">Rubrics </button>
        </NuxtLink>
        <NuxtLink to="/history">
          <button class="hover:text-[#004aad] inline-block align-middle">History </button>
        </NuxtLink>
        <NuxtLink to="/about">
          <button class="hover:text-[#004aad] inline-block align-middle">About </button>
        </NuxtLink>
        <div class="relative group">
          <button v-if="showInstallButton" @click="installApp" class="bg-[#c8112e] text-white font-light md:py-2 md:px-4 py-1 px-3 text-[12px] rounded-lg">
            Download App
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="text-center px-4 py-16 max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        Grading History
      </h1>
      <p class="text-gray-700 mb-8">
        Review your past essay grades and detailed rubric evaluations.
      </p>
    </section>

    <!-- History Section -->
    <section class="py-8 px-4">
      <div class="max-w-3xl mx-auto text-gray-800 font-light text-sm leading-relaxed">
        <div class="history-list">
          <div v-for="(entry, index) in gradingHistory" :key="index" class="bg-white history-item mb-4 p-4 rounded-lg shadow-2xl">
            <div class="flex justify-between items-center">
              <div>
                <h3 class="font-semibold text-black">{{ entry.title }}</h3>
                <p class="text-gray-600">Recipient: {{ entry.recipient }}</p>
                <p class="text-gray-600">Graded on: {{ formatDate(entry.timestamp) }}</p>
                <p class="text-gray-600">Total Score: {{ entry.response.Total_score }}</p>
                <div class="flex gap-1 my-3">
                  <NuxtLink :to="`/generate/pdf/grading_${entry.timestamp}`"><button class="bg-blue-500 text-white py-1 px-3 rounded">Download PDF</button></NuxtLink>
                  <button @click="exportToCSV(entry.timestamp)" class="bg-green-500 text-white py-1 px-3 rounded">Download CSV</button>
                </div>
              </div>
              
            </div>
            <button @click="toggleRubric(index)" class="mt-2 text-[#c8112e]">View Details</button>
            <div class="rubric-details mt-4">
              
              <!-- <ul>
                <li v-for="(detail, idx) in entry.rubric" :key="idx">{{ detail }}</li>
              </ul> -->
            </div>
            <div v-if="activeRubricIndex === index" class="rubric-details mt-4">
              <h4 class="font-semibold">Essay :</h4>
              <div class="my-4 overflow-x-auto">
                {{ entry.body }}
              </div>
              <h4 class="font-semibold">Rubric Details:</h4>

              <div class="my-4 overflow-x-auto">
                <table class="min-w-full border-collapse border border-gray-300">
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
              </div>
              <!-- <ul>
                <li v-for="(detail, idx) in entry.rubric" :key="idx">{{ detail }}</li>
              </ul> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="bg-gray-100 py-8 mt-16 blur-top">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex flex-col md:flex-row justify-between mb-8">
          <div class="flex items-center">
            <img src="@/public/icons/logo_aescore.png" alt="Logo" class="h-10 mr-2" />
            <p class="text-gray-600 text-sm">Aescore is a smart writing analysis and supplementary tools that checks student essay writing for argumentative, coherence, grammar and more extracted from Scopus Database Keyword.</p>
          </div>
          <div class="flex gap-10 mt-4 md:mt-0">
            <!-- Additional footer links can go here -->
          </div>
        </div>
      </div>
      <hr class="border-gray-300 mx-4" />
      <div class="text-center text-sm text-gray-500 py-4">
        © 2025 Aescore, Inc. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>
import logo from '@/public/icons/logo_aescore.png'
import html2pdf from 'html2pdf.js'
import { ref } from 'vue'

// Sample grading history data
const gradingHistory = ref([]);
const gradingCSVHistory = ref([]); // Initialize as empty array

const activeRubricIndex = ref(null);

const toggleRubric = (index) => {
  activeRubricIndex.value = activeRubricIndex.value === index ? null : index;
};

const exportToCSV = (id) => {
  const keys = Object.keys(localStorage);

  // Filter entries where key starts with "grading_" and contains the id
  const matched = keys
    .filter(key => key.startsWith(`grading_${id}`))
    .map(key => JSON.parse(localStorage.getItem(key)));

  if (!matched.length || !matched[0].response) {
    console.error('No data to export');
    return;
  }

  const response = matched[0].response;
  const title = matched[0].title;
  const recipient = matched[0].recipient;

  // Convert to CSV
  const csvContent = convertToCSV(response, title, recipient);

  // Create a Blob from the CSV content
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

  // Create a temporary link and trigger download
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  link.setAttribute('href', url);
  link.setAttribute('download', `grading_${id}.csv`);
  link.style.visibility = 'hidden';
  document.body.appendChild(link);
  link.click();

  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const convertToCSV = (jsonData, title, recipient) => {
  const rows = [];

  const recipientCSV = ['Correspondent', recipient, '', '', ];
  const titleCSV = ['Title', title, '', '', ];
  const combinedCSV = [
  recipientCSV.join(','),
  titleCSV.join(',')
  ];
  rows.push(...combinedCSV);

  const headers = ['No', 'Database Keyword', 'Weight', 'Grade', 'Feedback'];
  rows.push(headers.join(','));

  const rubricArray = jsonData.RubricDetails || [];

  rubricArray.forEach((rubric, index) => {
    const row = [
      index + 1,
      rubric.name,
      rubric.weight ?? '',
      rubric.binaryValue ?? '',
      rubric.reasoning?.replace(/\n/g, ' ') ?? ''
    ];
    rows.push(row.join(','));
  });

  // Add total score
  rows.push(['', 'Total Score', '', '', jsonData.Total_score ?? ''].join(','));

  return rows.join('\n');
};

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

// Function to load grading history from localStorage
const loadGradingHistory = () => {
  const keys = Object.keys(localStorage);
  gradingHistory.value = keys
    .filter(key => key.startsWith('grading_')) // Filter keys that start with 'grading_'
    .map(key => JSON.parse(localStorage.getItem(key))); // Parse and return the stored JSON
};

// Call the function to load grading history when the component is mounted
loadGradingHistory();
</script>

<style lang="css" scoped>
.center-blob {
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
}
.blob {
  width: 30vw;
  height: 30vw;
  position: absolute;
  opacity: 0.6;
  border-radius: 50%;
}

@keyframes move1 {
  0% {
    transform: translate(0%, 0%);
  }
  50% {
    transform: translate(50%, 10%);
  }
  100% {
    transform: translate(0%, 0%);
  }
}

.animate-move1 {
  animation: move1 6s ease-in-out infinite;
}
</style>