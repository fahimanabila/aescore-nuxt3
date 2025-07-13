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
        Understanding the Rubric
      </h1>
      <p class="text-gray-600 mb-8">
        Explore the various criteria used to evaluate essays and improve your writing skills.
      </p>
    </section>

    <!-- Rubric Explanation Section -->
    <section class="py-8 px-4">
      <div class="max-w-3xl mx-auto text-gray-600 font-light text-sm leading-relaxed">
        <h2 class="text-xl font-semibold mb-4">1. Argumentative (Weight: 4)</h2>
        <p class="mb-4">
          This criterion assesses whether the essay has a clear thesis statement, topic, and controlling idea. A strong argumentative essay should clearly state its position and provide supporting evidence to back up its claims. Additionally, it should anticipate counterarguments and address them effectively, demonstrating a comprehensive understanding of the topic. This not only strengthens the argument but also showcases the writer's critical thinking skills.
        </p>

        <h2 class="text-xl font-semibold mb-4">2. Comparison (Weight: 2)</h2>
        <p class="mb-4">
          The comparison criterion evaluates whether the essay effectively compares two objects or subjects as examples. This can enhance the argument by providing contrasting perspectives that highlight the main points. By drawing parallels and distinctions, the writer can clarify their position and make the argument more relatable to the reader. Effective comparisons can also reveal deeper insights into the subjects being discussed.
        </p>

        <h2 class="text-xl font-semibold mb-4">3. Condition (Weight: 3)</h2>
        <p class="mb-4">
          This section looks at whether the essay presents the condition or context where the problem arises. Providing context is essential for understanding the significance of the argument being made. It helps the reader grasp the background and the stakes involved, making the argument more compelling. A well-defined context can also guide the reader's interpretation of the evidence presented.
        </p>

        <h2 class="text-xl font-semibold mb-4">4. Current Study (Weight: 4)</h2>
        <p class="mb-4">
          The current study criterion checks if the essay uses current or up-to-date data, examples, or statistics. Citing recent research enhances the credibility of the arguments presented. It shows that the writer is engaged with ongoing discussions in the field and is aware of the latest developments. This relevance can significantly impact the reader's perception of the essay's authority.
        </p>

        <h2 class="text-xl font-semibold mb-4">5. Difference (Weight: 2)</h2>
        <p class="mb-4">
          This criterion evaluates whether the essay highlights how it is different from other essays on the same topic. Emphasizing unique aspects can strengthen the argument and provide a fresh perspective. By distinguishing their work, the writer can contribute to the discourse in a meaningful way. This differentiation can also attract the reader's interest and encourage them to consider new viewpoints.
        </p>

        <h2 class="text-xl font-semibold mb-4">6. Motivation (Weight: 2)</h2>
        <p class="mb-4">
          The motivation criterion assesses whether the essay expresses the writer’s motivation, goals, or aims. A clear articulation of motivation can engage readers and provide insight into the writer's perspective. Understanding the writer's intent can foster a connection with the audience, making the argument more persuasive. It also adds a personal touch that can resonate with readers on an emotional level.
        </p>

        <h2 class="text-xl font-semibold mb-4">7. Reason (Weight: 4)</h2>
        <p class="mb-4">
          This section evaluates whether the body paragraphs provide reasons that support the arguments. Strong essays should include well-reasoned points that are backed by evidence. Each reason should be clearly articulated and logically connected to the thesis, reinforcing the overall argument. This logical structure helps the reader follow the writer's thought process and enhances the essay's persuasiveness.
        </p>

        <h2 class="text-xl font-semibold mb-4">8. Issue (Weight: 2)</h2>
        <p class="mb-4">
          The issue criterion checks if the essay raises a current or ongoing issue. Addressing relevant topics can make the essay more impactful and relatable to readers. By focusing on pressing issues, the writer can engage the audience's interest and prompt them to think critically about the subject. This relevance can also encourage readers to reflect on their own experiences and opinions.
        </p>

        <h2 class="text-xl font-semibold mb-4">9. Need (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay shows why the discussed issue needs to be addressed. Highlighting the importance of the issue can strengthen the argument and motivate action. By articulating the consequences of inaction, the writer can create a sense of urgency that compels the reader to consider the implications. This can lead to a more engaged and responsive audience.
        </p>

        <h2 class="text-xl font-semibold mb-4">10. Organization (Weight: 4)</h2>
        <p class="mb-4">
          The organization criterion evaluates whether the essay is structured into an introduction, thesis, body paragraphs, topic sentences, and conclusion. A well-organized essay enhances clarity and flow. Each section should serve a specific purpose, guiding the reader through the argument seamlessly. Effective organization not only aids comprehension but also reinforces the writer's main points.
        </p>

        <h2 class="text-xl font-semibold mb-4">11. Form (Weight: 4)</h2>
        <p class="mb-4">
          This criterion checks if the essay follows a five-paragraph format without subheadings. Adhering to this structure can help maintain focus and coherence. While flexibility in structure is important, a clear format can provide a familiar framework for readers. This consistency can make the essay easier to navigate and understand.
        </p>

        <h2 class="text-xl font-semibold mb-4">12. Strategy (Weight: 2)</h2>
        <p class="mb-4">
          The strategy criterion evaluates whether the essay uses an argumentative structure, such as presenting pros and cons. This approach can provide a balanced view of the topic. By considering multiple perspectives, the writer can demonstrate critical thinking and a nuanced understanding of the issue. This strategy can also enhance the essay's persuasiveness by addressing potential counterarguments.
        </p>

        <h2 class="text-xl font-semibold mb-4">13. Combination (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay effectively combines definitions, examples, and details. A well-integrated essay enhances understanding and engagement. By weaving together various elements, the writer can create a richer narrative that captivates the reader. This combination can also clarify complex ideas and make them more accessible.
        </p>

        <h2 class="text-xl font-semibold mb-4">14. Topic (Weight: 4)</h2>
        <p class="mb-4">
          The topic criterion checks if the body paragraphs include topic sentences that relate to the thesis. Clear topic sentences help guide the reader through the argument. Each topic sentence should establish the focus of the paragraph and connect back to the main thesis. This clarity can improve the overall coherence of the essay.
        </p>

        <h2 class="text-xl font-semibold mb-4">15. Review (Weight: 4)</h2>
        <p class="mb-4">
          This section evaluates whether the introduction reviews the background or problem context. A strong introduction sets the stage for the argument and engages the reader. By providing relevant background information, the writer can help the audience understand the significance of the topic. This context can also create a framework for the arguments that follow.
        </p>

        <h2 class="text-xl font-semibold mb-4">16. Future Research (Weight: 3)</h2>
        <p class="mb-4">
          The future research criterion checks if the conclusion suggests recommendations, predictions, or future directions. This can provide a sense of closure and forward-thinking. By indicating areas for further exploration, the writer can inspire continued discussion and inquiry. This forward-looking perspective can also enhance the essay's relevance and impact.
        </p>

        <h2 class="text-xl font-semibold mb-4">17. Limitation (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay acknowledges any limitations or missing aspects. Recognizing limitations can enhance the credibility of the argument. It shows that the writer is aware of the complexities of the topic and is not oversimplifying the discussion. This honesty can foster trust with the reader and encourage critical engagement.
        </p>

        <h2 class="text-xl font-semibold mb-4">18. Total (Weight: 3)</h2>
        <p class="mb-4">
          The total criterion checks if the essay meets the required total word count (300-450 words). Adhering to word count guidelines is essential for meeting assignment requirements. A well-structured essay within this range can effectively convey the argument without unnecessary elaboration. This conciseness can also enhance clarity and focus.
        </p>

        <h2 class="text-xl font-semibold mb-4">19. Grammar (Weight: 4)</h2>
        <p class="mb-4">
          This criterion evaluates whether the essay uses correct tenses in at least 80% of sentences. Proper grammar is crucial for clarity and professionalism. Grammatical accuracy not only reflects the writer's attention to detail but also ensures that the message is communicated effectively. This precision can significantly impact the reader's understanding and perception of the essay.
        </p>

        <h2 class="text-xl font-semibold mb-4">20. Lexical Sophistication (Weight: 4)</h2>
        <p class="mb-4">
          The lexical sophistication criterion checks if the essay avoids AI-generated or unnatural word choices and uses proper diction. A sophisticated vocabulary enhances the quality of writing. By choosing precise and varied language, the writer can convey ideas more effectively and engage the reader's interest. This sophistication can also reflect the writer's expertise and command of the subject matter.
        </p>

        <h2 class="text-xl font-semibold mb-4">21. Vocabulary (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay uses a varied and formal vocabulary. A rich vocabulary can improve the overall impact of the writing. By employing diverse word choices, the writer can create a more engaging and dynamic narrative. This variety can also help avoid repetition and maintain the reader's attention.
        </p>

        <h2 class="text-xl font-semibold mb-4">22. Academic (Weight: 2)</h2>
        <p class="mb-4">
          The academic criterion checks if the vocabulary used is appropriate for academic writing. Maintaining an academic tone is essential for credibility. This tone should reflect a formal style that is suitable for scholarly discourse. Adhering to academic conventions can enhance the essay's authority and professionalism.
        </p>

        <h2 class="text-xl font-semibold mb-4">23. Effectiveness (Weight: 2)</h2>
        <p class="mb-4">
          This section evaluates whether the sentences are straightforward and easy to understand. Clarity is key to effective communication. By using clear and concise language, the writer can ensure that their arguments are accessible to the reader. This effectiveness can significantly enhance the overall impact of the essay.
        </p>

        <h2 class="text-xl font-semibold mb-4">24. Coherence (Weight: 3)</h2>
        <p class="mb-4">
          The coherence criterion checks if the paragraphs are coherent and logically connected. A coherent essay flows smoothly and is easier to follow. Each paragraph should build on the previous one, creating a logical progression of ideas. This coherence can enhance the reader's understanding and engagement with the argument.
        </p>

        <h2 class="text-xl font-semibold mb-4">25. Relation (Weight: 3)</h2>
        <p class="mb-4">
          This section assesses whether the sentences show good connection and flow from one to another. Strong transitions enhance readability. By using effective linking phrases and words, the writer can guide the reader through the argument seamlessly. This relational clarity can improve the overall structure of the essay.
        </p>

        <h2 class="text-xl font-semibold mb-4">26. Engagement (Weight: 2)</h2>
        <p class="mb-4">
          The engagement criterion evaluates whether the essay manages to engage the reader despite its introduction. Captivating writing can draw readers in and maintain their interest. By employing compelling language and thought-provoking ideas, the writer can create a connection with the audience. This engagement is crucial for keeping the reader invested in the argument.
        </p>

        <h2 class="text-xl font-semibold mb-4">27. Reader (Weight: 2)</h2>
        <p class="mb-4">
          This section checks if the essay addresses a clear academic or relevant audience. Understanding the audience is crucial for effective communication. The writer should tailor their language, tone, and content to resonate with the intended readership. This consideration can enhance the essay's relevance and impact.
        </p>

        <h2 class="text-xl font-semibold mb-4">28. Syntactic Complexity (Weight: 3)</h2>
        <p class="mb-4">
          The syntactic complexity criterion evaluates whether the essay uses various sentence types (simple, complex, compound, compound-complex). A mix of sentence structures can enhance the writing style. By varying sentence length and complexity, the writer can create a more engaging rhythm in their writing. This complexity can also reflect a deeper understanding of the language.
        </p>

        <h2 class="text-xl font-semibold mb-4">29. Education (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay is related to educational issues or practices in higher education. Relevant topics can resonate more with the audience. By addressing current educational challenges or innovations, the writer can contribute to meaningful discussions in the field. This relevance can also enhance the essay's impact on readers.
        </p>

        <h2 class="text-xl font-semibold mb-4">30. Pedagogical Implication (Weight: 2)</h2>
        <p class="mb-4">
          The pedagogical implication criterion checks if the essay indicates any practical implications for teaching or learning. Highlighting these implications can enhance the essay's relevance. By connecting theory to practice, the writer can provide valuable insights for educators and learners alike. This practical focus can make the essay more applicable and useful.
        </p>

        <h2 class="text-xl font-semibold mb-4">31. Field (Weight: 2)</h2>
        <p class="mb-4">
          This section evaluates whether the essay can be categorized within a specific or multidisciplinary field. Clear categorization can help frame the discussion. By situating the essay within a particular context, the writer can clarify its relevance and significance. This categorization can also guide the reader's expectations and understanding.
        </p>

        <h2 class="text-xl font-semibold mb-4">32. Framework (Weight: 2)</h2>
        <p class="mb-4">
          The framework criterion checks if the essay applies a theoretical or conceptual framework. Utilizing a framework can provide structure to the argument. By grounding the discussion in established theories, the writer can enhance the credibility of their claims. This framework can also help organize the essay's content more effectively.
        </p>

        <h2 class="text-xl font-semibold mb-4">33. Theory (Weight: 2)</h2>
        <p class="mb-4">
          This section assesses whether the essay references educational or theoretical sources. Citing relevant theories can strengthen the argument. By connecting their ideas to established research, the writer can enhance the authority of their claims. This theoretical grounding can also provide a deeper understanding of the topic.
        </p>

        <h2 class="text-xl font-semibold mb-4">34. Article (Weight: 4)</h2>
        <p class="mb-4">
          The article criterion checks if the essay cites references from articles published within the last five years. Using recent sources enhances credibility. By incorporating contemporary research, the writer can demonstrate engagement with current discussions in the field. This relevance can significantly impact the reader's perception of the essay's authority.
        </p>

        <h2 class="text-xl font-semibold mb-4">35. Information (Weight: 2)</h2>
        <p class="mb-4">
          This section evaluates whether the information is presented clearly, concisely, and in logical order. Clarity and organization are key to effective communication. By structuring information logically, the writer can guide the reader through complex ideas more easily. This clarity can enhance the overall effectiveness of the argument.
        </p>

        <h2 class="text-xl font-semibold mb-4">36. Discourse (Weight: 2)</h2>
        <p class="mb-4">
          The discourse criterion checks if the essay shows the author’s individual perspective, possibly in an Indonesian context. Personal insights can enrich the discussion. By incorporating unique viewpoints, the writer can contribute to a more diverse dialogue on the topic. This individuality can also make the essay more relatable and engaging for readers.
        </p>

        <h2 class="text-xl font-semibold mb-4">37. Genre (Weight: 2)</h2>
        <p class="mb-4">
          Finally, this section evaluates whether the essay clearly belongs to a specific type or category (e.g., argumentative). Identifying the genre helps frame the reader's expectations. By adhering to genre conventions, the writer can enhance the clarity and effectiveness of their argument. This identification can also guide the reader's interpretation of the content.
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