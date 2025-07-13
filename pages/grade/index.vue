<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-blue-50 relative">
    <div>
      <LoadingProgressive v-if="loadingState" :message="loadingMessage" />
    </div>
    <!-- Header -->
    <header class="flex items-center justify-between px-4 py-4 shadow md:px-8">
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
          <button  v-if="showInstallButton" @click="installApp" class="bg-[#c8112e] text-white font-light md:py-2 md:px-4 py-1 px-3 text-[12px] rounded-lg">
            Download App
          </button>
        </div>
      </nav>
    </header>

    <!-- Content -->
    <section class="max-w-auto justify-center mt-10 flex flex-col lg:flex-row lg:space-x-6">
      <div class="max-w-4xl px-4 mx-auto">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">
          Aescore’s <span class="text-[#004aad]">Free</span> Supplementary Tools For Essay Writing
        </h2>
        <span class="text-gray-800 font-semibold mb-6 flex gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#c8112e" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
          </svg>
          <p>Check your essay and improve the overall quality!</p>
        </span>

        <div class="grid grid-cols-1 gap-2 md:grid-cols-2 font-medium text-sm text-gray-600 mb-6">
          <span class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Share report swiftly to students</p>
          </span>

          <span class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Export detail grade report in .pdf and .csv</p>
          </span>

          <span class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>Analyzer using <NuxtLink class="underline" to="/rubric"> 37 keyword collected from Scopus </NuxtLink></p>
          </span>
          <span class="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p>History of essay grade and feedback <NuxtLink class="underline" to="/history"> saved here </NuxtLink></p>
          </span>
        </div>

        <!-- Form -->
        <div class="bg-white p-6 rounded-lg shadow-md border mb-6">
          <!-- Recipient Input -->
            <div class="mb-0">
              <label class="block font-bold py-1" for="recipient">Correspondent</label>
              <input
                id="recipient"
                type="text"
                v-model="recipient"
                class="w-full h-10 p-3 border border-gray-400 rounded resize-none mb-2"
                placeholder="Type the recipient's name"
              />
            </div>

            <!-- Essay Title Input -->
            <div class="mb-0">
              <label class="block font-bold py-1" for="essayTitle">Essay Title</label>
              <input
                id="essayTitle"
                type="text"
                v-model="title"
                class="w-full h-10 p-3 border border-gray-400 rounded resize-none mb-2"
                placeholder="Type your essay title"
              />
            </div>

            <!-- Essay Body Input -->
            <div class="mb-0">
              <label class="block font-bold py-2" for="essayBody">Essay Body</label>
              <textarea
                id="essayBody"
                v-model="essay"
                class="w-full h-96 p-3 border border-gray-300 rounded resize-none mb-4"
                placeholder="Type your essay paragraph"
                maxlength="24240"
              ></textarea>
            </div>

          <button
            class="block w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-2 px-4 rounded"
            @click="submitEssay"
          >
            Get your score →
          </button>

          <div class="mt-6 text-center grid-cols-1 gap-1" v-if="responseData">
              <NuxtLink 
                v-if="timestampPdf" 
                :to="`/generate/pdf/grading_${timestampPdf}`"
              >
              <button 
                class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-colors justify-between"
              >
                <span class="inline-block align-middle">Export to PDF</span>
                <svg class="inline-block align-middle ml-2 w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 1v11m0 0 4-4m-4 4L4 8m11 4v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3"></path>
                </svg>
              </button>
            </NuxtLink>
            <button 
              @click="exportToCSV" 
              class="bg-green-600 justify-between hover:bg-green-700 ml-5 text-white font-medium py-2 px-4 rounded-lg shadow-lg transition-colors"
            >
              <span class="inline-block align-middle">Export to CSV </span>
              <svg class="inline-block align-middle ml-2 w-6 h-6 text-gray-800 dark:text-white"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
              </svg>

            </button>
          </div>
        </div>
      </div>

      <div class="max-w-4xl px-4" v-if="responseData">
        <!-- Response Display -->
        <div class="mx-4">
          <div class="text-3xl font-bold mb-2">Total Score: <span class="text-red-500">{{ responseData.Total_score }}</span></div>
          <div class="mt-4 overflow-x-auto">
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
                <tr v-for="(rubric, index) in responseData.RubricDetails" :key="index">
                  <td class="border border-gray-300 px-2 py-1 text-sm">{{ index + 1 }}</td>
                  <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.name }}</td>
                  <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.reasoning }}</td>
                  <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.binaryValue }}</td>
                  <td class="border border-gray-300 px-2 py-1 text-sm">{{ rubric.weight }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
import LoadingLogo from '@/components/loadingLogo.vue'
import loadingProgressive from '~/components/loadingProgressive.vue'
import LoadingIndicator from '~/components/loadingStage.vue'
import { ref, onMounted } from 'vue'
import { toRaw } from 'vue'; // Import toRaw if using Vue 3

import logo from '@/public/icons/logo_aescore.png'
const apiBaseUrl = useRuntimeConfig().public.apiBaseUrl
console.log('apibaseurl: '+apiBaseUrl)

const showInstallButton = ref(false);
let deferredPrompt = null;

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the automatic install prompt
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton.value = true;
  });
});

const installApp = async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user's response
    const choiceResult = await deferredPrompt.userChoice;
    
    if (choiceResult.outcome === 'accepted') {
      console.log('User  accepted the install prompt');
    } else {
      console.log('User  dismissed the install prompt');
    }
    
    // Reset the deferred prompt and hide the button
    deferredPrompt = null;
    showInstallButton.value = false;
  }
};

function printPage() {
  window.print();
}
const timestampPdf = ref('')
const loading = ref(true)
const title = ref('')
const essay = ref('')
const recipient = ref('')
const responseData = ref(null) // Store the response data
const loadingState = ref(false);
const loadingMessage = ref('');
// Define weights for each rubric criterion
    const weights = {
      argumentative: 4,
      comparison: 2,
      condition: 3,
      current_study: 4,
      difference: 2,
      motivation: 2,
      reason: 4,
      issue: 2,
      need: 2,
      organization: 4,
      form: 4,
      strategy: 2,
      combination: 2,
      topic: 4,
      review: 4,
      future_research: 3,
      limitation: 2,
      total: 3,
      grammar: 4,
      lexical_sophistication: 4,
      vocabulary: 2,
      academic: 2,
      effectiveness: 2,
      coherence: 3,
      relation: 3,
      engagement: 2,
      reader: 2,
      syntactic_complexity: 3,
      education: 2,
      pedagogical_implication: 2,
      field: 2,
      framework: 2,
      theory: 2,
      article: 4,
      information: 2,
      discourse: 2,
      genre: 2
    };

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

function formatResponse(responseString, title, body, recipient) {
  // Clean and parse the response string
  const cleanedString = responseString
    .replace(/\\n/g, '\n')
    .trim();

  const jsonString = cleanedString.replace(/(\w+):/g, '"$1":');
  const noTrailingCommas = jsonString.replace(/,(\s*[}\]])/g, '$1');

  try {
    const jsonResponse = JSON.parse(noTrailingCommas);
    
    // Define weights for each rubric criterion
    const weights = {
      argumentative: 4,
      comparison: 2,
      condition: 3,
      current_study: 4,
      difference: 2,
      motivation: 2,
      reason: 4,
      issue: 2,
      need: 2,
      organization: 4,
      form: 4,
      strategy: 2,
      combination: 2,
      topic: 4,
      review: 4,
      future_research: 3,
      limitation: 2,
      total: 3,
      grammar: 4,
      lexical_sophistication: 4,
      vocabulary: 2,
      academic: 2,
      effectiveness: 2,
      coherence: 3,
      relation: 3,
      engagement: 2,
      reader: 2,
      syntactic_complexity: 3,
      education: 2,
      pedagogical_implication: 2,
      field: 2,
      framework: 2,
      theory: 2,
      article: 4,
      information: 2,
      discourse: 2,
      genre: 2
    };

    // Calculate total score and prepare rubric details
    let totalScore = 0;
    const rubricDetails = [];

    for (const [key, value] of Object.entries(jsonResponse.Rubric)) {
      const weight = weights[key] || 0;
      totalScore += value.status * weight; // Use value.status for scoring

      rubricDetails.push({
        name: key,
        reasoning: value.feedback,
        binaryValue: value.status,
        weight: weight
      });
    }

    jsonResponse.Total_score = totalScore;
    jsonResponse.RubricDetails = rubricDetails;

    // Create a unique key based on the current date and time
    const timestamp = new Date().toISOString();
    const localStorageKey = `grading_${timestamp}`;
    timestampPdf.value = timestamp

    // Prepare the data to be saved in localStorage
    const dataToStore = {
      timestamp: timestamp,
      title: title,
      body: body,
      recipient: recipient,
      response: toRaw(jsonResponse) // Use toRaw to avoid reactivity issues
    };

    // Save the data to localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(dataToStore));

    return jsonResponse;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
}

async function submitEssay() {
  loadingState.value = true;
  responseData.value = null; // Clear previous response

  // Prepare the request body
  const data = {
    model: "llama3.1:8b",
    stream: false,
    prompt: `You are an expert academic essay evaluator. Your task is to evaluate a student essay using the **binary scoring rubric** below. You must assess whether each rubric criterion is **fully met** or **not fully met**. Provide a score of "1" if the essay fully satisfies the criterion; otherwise, assign a score of "0".
### Evaluation Instructions:
1. Focus on **each rubric criterion** listed.
2. Score using **only binary values**:
   - 1 = The essay fully meets the criterion.
   - 0 = The essay does **not fully** meet the criterion.
3. For **each criterion**, provide a **1-3 sentence reasoning** to justify your binary decision.
4. Be **critical and objective**. Do not give credit for partial fulfillment.
### Input:
This is essay to score :
{
"Title": "${title.value}",
"Body_Essay": "${essay.value}"
} 
### Rubric Dimensions (Binary Only 1 or 0):

- Argumentative: Does the essay have a clear thesis statement, topic, and controlling idea?
- Comparison: Does the essay compare two objects or subjects as examples?
- Condition: Does the essay present the condition or context where the problem arises?
- Current Study: Does the essay use current or up-to-date data, examples, or statistics?
- Difference: Does the essay highlight how it is different from other essays?
- Motivation: Does the essay express the writer’s motivation, goals, or aims?
- Reason: Do the body paragraphs provide reasons that support the arguments?
- Issue: Is the issue raised in the essay a current or ongoing issue?
- Need: Does the essay show why the discussed issue needs to be addressed?
- Organization: Is the essay organized into an introduction, thesis, body paragraphs, topic sentences, and conclusion?
- Form: Does the essay follow a five-paragraph format without subheadings?
- Strategy: Does the essay use argumentative structure like pros and cons?
- Combination: Does the essay combine definitions, examples, and details effectively?
- Topic: Do the body paragraphs include topic sentences that relate to the thesis?
- Review: Does the introduction review the background or problem context?
- Future Research: Does the conclusion suggest recommendations, predictions, or future directions?
- Limitation: Does the essay acknowledge any limitations or missing aspects?
- Total: Does the essay meet the required total word count (300-450 words)?
- Grammar: Does the essay use correct tenses in at least 80% of sentences?
- Lexical Sophistication: Does the essay avoid AI-generated or unnatural word choices and use proper diction?
- Vocabulary: Does the essay use a varied and formal vocabulary?
- Academic: Is the vocabulary used appropriate for academic writing?
- Effectiveness: Are the sentences straightforward and easy to understand?
- Coherence: Are the paragraphs coherent and logically connected?
- Relation: Do the sentences show good connection and flow from one to another?
- Engagement: Does the essay manage to engage the reader despite its introduction?
- Reader: Does the essay address a clear academic or relevant audience?
- Syntactic Complexity: Does the essay use various sentence types (simple, complex, compound, compound-complex)?
- Education: Is the essay related to educational issues or practices in higher education?
- Pedagogical Implication: Does the essay indicate any practical implications for teaching or learning?
- Field: Can the essay be categorized within a specific or multidisciplinary field?
- Framework: Does the essay apply a theoretical or conceptual framework?
- Theory: Does the essay reference educational or theoretical sources?
- Article: Does the essay cite references from articles published within the last five years?
- Information: Is the information presented clearly, concisely, and in logical order?
- Discourse: Does the essay show the author’s individual perspective, possibly in an Indonesian context?
- Genre: Does the essay clearly belong to a specific type or category (e.g., argumentative)?

---

### Output:
Respond strictly in the following **JSON** format. DO NOT! include any extra explanations or text outside the JSON. Give me ONLY json output.
{
  "Rubric": {
    "argumentative": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "comparison": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "condition": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "current_study": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "difference": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "motivation": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "reason": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "issue": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "need": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "organization": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "form": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "strategy": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "combination": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "topic": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "review": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "future_research": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "limitation": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "total": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "grammar": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "lexical_sophistication": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "vocabulary": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "academic": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "effectiveness": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "coherence": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "relation": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "engagement": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "reader": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "syntactic_complexity": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "education": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "pedagogical_implication": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "field": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "framework": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "theory": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "article": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "discourse": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "information": {
        "status": <0 or 1>,
        "feedback": "..."
    },
    "genre": {
        "status": <0 or 1>,
        "feedback": "..."
    }
  }
}
    `,
    max_token: 300
  }
  try {
    const apiResponse = await fetch(`https://357963e61879.ngrok-free.app/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!apiResponse.ok) {
      throw new Error('Network response was not ok')
    }

    const resultString = await apiResponse.json(); // Get the response as a JSON object
    console.log('Full First Response:', resultString?.response); // Log the full response to the console

    const resultContent = resultString?.response; // Access the content directly
    console.log('Full Response:', resultContent); // Log the full response to the console
    // Format the response string into a JSON object
    const formattedResponse = formatResponse(resultContent, title.value, essay.value, recipient.value);
    
    // Set the response data
    responseData.value = formattedResponse;
    console.log('Formatted Response:', formattedResponse);

  } catch (error) {
    console.error('Error fetching data:', error);
    responseData.value = { Total_score: 'Error', Commentary: {} }; // Handle error response
  } finally {
    loadingState.value = false;
  }
}

const exportToCSV = () => {
if (!responseData.value) {
  console.error('No data to export');
  return;
}

// Convert JSON to CSV format
const csvContent = convertToCSV(responseData.value);
console.log(responseData.value); // Log the response data for debugging

// Create a Blob from the CSV content
const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

// Create a link element
const link = document.createElement('a');
const url = URL.createObjectURL(blob);
link.setAttribute('href', url);
link.setAttribute('download', 'exported_data.csv');
link.style.visibility = 'hidden';

// Append to the body
document.body.appendChild(link);
link.click();

// Clean up
document.body.removeChild(link);
URL.revokeObjectURL(url);
};

const convertToCSV = (jsonData) => {
  const rows = [];
  
  // Create headers
  const recipientCSV = ['Correspondent', recipient.value, '', '', ];
  const titleCSV = ['Title', title.value, '', '', ];
  const combinedCSV = [
  recipientCSV.join(','),
  titleCSV.join(',')
  ];
  rows.push(...combinedCSV);

  const headers = ['No', 'Database Keyword', 'Weight', 'Grade', 'Feedback'];
  rows.push(headers.join(','));

  // Create data rows
  let index = 1; // Initialize the counter for the No column
  const rubricKeys = Object.keys(jsonData.RubricDetails);
  
  rubricKeys.forEach(key => {
    const rubricName = jsonData.RubricDetails[key].name; // Get the rubric value
    const rubricValue = jsonData.RubricDetails[key].binaryValue; // Get the rubric value
    const rubricWeight = jsonData.RubricDetails[key].weight || ''; // Get the corresponding feedback
    const rubricFeedback = jsonData.RubricDetails[key].reasoning || ''; // Get the corresponding feedback

    // Create a row for each rubric key
    const row = [index, rubricName, rubricWeight, rubricValue, rubricFeedback];
    rows.push(row.join(','));

    index++; // Increment the counter
  });

  // Add total score and rubric details as a separate row if needed
  const totalScoreRow = ['', 'Total Score', '', '', jsonData.Total_score];
  rows.push(totalScoreRow.join(','));

  return rows.join('\n');
};

</script>

<style scoped>
textarea::placeholder {
  color: #9ca3af; /* Tailwind gray-400 */
}
</style>