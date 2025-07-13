<template>
  <div class="max-h-screen text-gray-800">
    <div class="fixed max-h-screen inset-0 -z-10">
      <div class="blob center-blob blur-[100px] bg-gradient-to-br from-[#004aad] to-[#c8112e] animate-move1"></div>
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
          <button  v-if="showInstallButton" @click="installApp" class="bg-[#c8112e] text-white font-light md:py-2 md:px-4 py-1 px-3 text-[12px] rounded-lg">
            Download App
          </button>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="text-center px-4 py-16 max-w-4xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold mb-4">
        About Aescore
      </h1>
      <p class="text-gray-600 mb-8">
        Discover how Aescore processes essays and provides grading scores to enhance your writing skills.
      </p>
    </section>

    <!-- About Section -->
    <section class="py-8 px-4">
      <div class="max-w-3xl mx-auto text-gray-600 font-light text-sm leading-relaxed">
        <h2 class="text-xl font-semibold mb-4">1. Essay Submission</h2>
        <p class="mb-4">
          Users can submit their essays by pasting the text directly into the application or uploading a document file. This flexibility allows for easy integration into the writing process, making it accessible for all users. Once submitted, the essay is prepared for analysis by our intelligent AI system.
        </p>

        <h2 class="text-xl font-semibold mb-4">2. Text Analysis</h2>
        <p class="mb-4">
          The AI system analyzes the submitted text using advanced natural language processing techniques. It evaluates various aspects of the essay, including grammar, coherence, argumentation, and lexical sophistication. This comprehensive analysis helps identify strengths and weaknesses in the writing.
        </p>

        <h2 class="text-xl font-semibold mb-4">3. Grading Criteria</h2>
        <p class="mb-4">
          Aescore employs a detailed rubric to grade essays based on multiple criteria, such as argumentative structure, organization, and vocabulary usage. Each criterion is assessed individually, allowing for a nuanced evaluation of the essay's overall quality. This structured approach ensures that users receive specific feedback on their writing.
        </p>

        <h2 class="text-xl font-semibold mb-4">4. Feedback Generation</h2>
        <p class="mb-4">
          After the analysis is complete, Aescore generates a comprehensive feedback report. This report includes a score for each criterion, along with detailed comments and suggestions for improvement. Users can review this feedback to understand their writing better and make necessary adjustments.
        </p>

        <h2 class="text-xl font-semibold mb-4">5. Continuous Improvement</h2>
        <p class="mb-4">
          Aescore encourages users to revise their essays based on the feedback provided. By resubmitting their revised work, users can track their progress and see how their writing improves over time. This iterative process fosters a growth mindset and helps users develop their writing skills effectively.
        </p>

        <h2 class="text-xl font-semibold mb-4">6. Educational Impact</h2>
        <p class="mb-4">
          Aescore aims to support educators and students alike by providing a tool that enhances writing instruction. By offering insights into common writing issues, Aescore can help teachers tailor their lessons to address specific needs. This collaborative approach can lead to improved writing outcomes for students.
        </p>

        <h2 class="text-xl font-semibold mb-4">7. Future Developments</h2>
        <p class="mb-4">
          The Aescore team is committed to continuous improvement and innovation. Future updates may include additional features, such as personalized writing prompts, peer review options, and enhanced analytics. By staying at the forefront of educational technology, Aescore aims to provide the best possible support for writers.
        </p>
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
import { ref, onMounted } from 'vue'

const showInstallButton = ref(false);
let deferredPrompt = null;

onMounted(() => {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallButton.value = true;
  });
});

const installApp = async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const choiceResult = await deferredPrompt.userChoice;
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

/* Responsive styles */
@media (max-width: 768px) {
  .text-xl {
    font-size: 1.5rem; /* Adjust font size for mobile */
  }
  .text-sm {
    font-size: 0.875rem; /* Adjust font size for mobile */
  }
}
</style>