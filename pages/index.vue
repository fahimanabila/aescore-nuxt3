<template>
  <div class="max-h-screen  text-gray-800">
    <div class="fixed max-h-screen inset-0 -z-10">
      <div class="blob center-blob blur-[100px] bg-gradient-to-br from-[#004aad] to-[#c8112e] animate-move1"></div>
    </div>
    <!-- [#004aad] hover:bg-[#c8112e] -->
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
          <button  v-if="showInstallButton" @click="installApp" class="bg-[#c8112e] text-white font-light md:py-2 md:px-4 py-1 px-3 sm:text-sm md:text-[12px] rounded-lg">
            Download App
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="text-center px-4 py-16 max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="text-[#c8112e]">Aes</span><span class="text-[#004aad]">core</span> — Score Smarter, Write Better<br/>
         Polish your essay writing skill with Aescore’s free English Essay scorer with professional feedback.
      </h1>

      <div class="flex flex-wrap justify-center gap-4 text-sm my-10 md:mb-6 lg:mb-14">
        <div class="flex font-medium items-center gap-2"><span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span> Supplementary Tools for English Teacher</div>
        <div class="flex font-medium items-center gap-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span> Check Student Grade
        </div>
        <div class="flex font-medium items-center gap-2">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          </span> Get Professional Feedback</div>
      </div>

      <NuxtLink class="bg-[#004aad] hover:bg-[#c8112e] text-white font-medium py-2 px-6 rounded-md" to="/grade">Use now for free →</NuxtLink>
    </section>

    <!-- Info Paragraph -->
    <section class=" py-8 px-4">
      <div class="max-w-3xl mx-auto text-center text-gray-600 font-light text-sm leading-relaxed">
        <p class="mb-2">
          Aescore uses intelligent AI to analyze your writing — helping you check your essay grade, get professional feedback, and train your productivity before submitting to your teacher.
        </p>
        <p>
          Just paste your text or upload a document, then click “Get Free Report” to get started instantly.
        </p>
      </div>
    </section>

    <div class="max-h-screen text-gray-800">
        <!-- Existing content above remains unchanged -->

        <!-- Footer Section -->
        <footer class="bg-gray-100 py-8 mt-16 blur-top">
          <div class="max-w-6xl mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between mb-8">
              <div class="flex items-center">
                <img src="@/public/icons/logo_aescore.png" alt="Logo" class="h-10 mr-2" />
                <p class="text-gray-600 text-sm">Aescore is a smart writing analysis and supplementary tools that checks student essay writing for argumentative, coherence, grammar and more extracted from Scopus Database Keyword.</p>
              </div>
              <div class="flex gap-10 mt-4 md:mt-0">
                
                
                
              </div>
            </div>
          </div>
          <hr class="border-gray-300 mx-4" />
          <div class="text-center text-sm text-gray-500 py-4">
            © 2025 Aescore, Inc. All rights reserved.
          </div>
        </footer>
      </div>
  </div>
</template>

<script setup>
import logo from '@/public/icons/logo_aescore.png'
import { ref, onMounted } from 'vue'

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

@keyframes circle-move {
  0% {
    transform: rotate(0deg) translateX(80px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translateX(80px) rotate(-360deg);
  }
}

.animate-circle-move {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  transform: translate(-50%, -50%);
  animation: circle-move 20s linear infinite;
  border-radius: 9999px;
}
/* <div class="grid grid-cols-1 gap-4 mt-4">
            <div class="p-4 border rounded bg-gray-100">
              <h3 class="font-semibold">Content and Argumentation</h3>
              <p>{{ responseData.Commentary['Content and Argumentation'] }}</p>
            </div>
            <div class="p-4 border rounded bg-gray-100">
              <h3 class="font-semibold">Organization and Structure</h3>
              <p>{{ responseData.Commentary['Organization and Structure'] }}</p>
            </div>
            <div class="p-4 border rounded bg-gray-100">
              <h3 class="font-semibold">Language and Style</h3>
              <p>{{ responseData.Commentary['Language and Style'] }}</p>
            </div>
            <div class="p-4 border rounded bg-gray-100">
              <h3 class="font-semibold">Disciplinary and Theoretical Grounding</h3>
              <p>{{ responseData.Commentary['Disciplinary and Theoretical Grounding'] }}</p>
            </div>
          </div> */
/* Additional styles for your footer */
footer h3 {
  margin-bottom: 8px;
}
footer ul {
  list-style: none;
  padding-left: 0;
}
footer ul li {
  margin-bottom: 4px;
}
footer p {
  max-width: 300px;
}

.content {
    flex: 1; /* Allows content to expand */
    padding: 20px; /* Optional padding for content */
}
.footer {
    background-color: #f1f1f1; /* Change as needed */
    text-align: center;
    padding: 10px 0; /* Vertical padding */
    position: relative;
}
</style>