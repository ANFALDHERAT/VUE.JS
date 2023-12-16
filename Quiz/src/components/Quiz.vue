<template>
  <div class="container">
    <h1>{{ currentQuestion.question }}</h1>
    <ul>
      <li v-for="(option, index) in currentQuestion.options" :key="index" class="form-check">
        <input type="radio" :value="option" v-model="selectedOption" :disabled="answered" class="form-check-input" />
        <label class="form-check-label">{{ option }}</label>
      </li>
    </ul>
    <button @click="checkAnswer" :disabled="answered" class="btn btn-primary">Submit Answer</button>
    <p v-if="answered" class="alert alert-info">Your answer: {{ selectedOption }}</p>
    <button @click="nextQuestion" :disabled="!answered || currentIndex === questions.length - 1" class="btn btn-secondary">Next Question</button>

    <!-- Result Section -->
    <div v-if="quizCompleted" class="mt-4">
      <h2>Quiz Result</h2>
      <p class="lead">You scored {{ score }} out of {{ questions.length }} questions.</p>
      <div v-if="passOrFailMessage" :class="{ 'text-success': passed, 'text-danger': !passed }">
        {{ passOrFailMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      questions: [
        {
          question: 'What is the capital of France?',
          options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
          correctAnswer: 'Paris'
        },
        {
          question: 'Which planet is known as the Red Planet?',
          options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
          correctAnswer: 'Mars'
        },
        // Add more questions as needed
      ],
      currentIndex: 0,
      selectedOption: null,
      answered: false,
      quizCompleted: false,
      score: 0,
      passed: false,
      passOrFailMessage: ''
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentIndex];
    }
  },
  methods: {
    checkAnswer() {
      if (this.selectedOption === this.currentQuestion.correctAnswer) {
        this.score++;
      }

      if (this.currentIndex === this.questions.length - 1) {
        this.quizCompleted = true;
        this.passed = this.score >= Math.ceil(this.questions.length * 0.7);
        this.passOrFailMessage = this.passed ? 'Congratulations! You passed the quiz.' : 'Sorry, you did not pass the quiz.';
        this.showResultAlert();
      }

      this.answered = true;
    },
    nextQuestion() {
      this.currentIndex++;
      this.selectedOption = null;
      this.answered = false;
    },
    showResultAlert() {
      Swal.fire({
        icon: this.passed ? 'success' : 'error',
        title: this.passOrFailMessage,
        text: `You scored ${this.score} out of ${this.questions.length} questions.`,
        confirmButtonText: 'OK'
      });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin-top: 50px;
}

h1 {
  font-size: 2rem;
  margin-bottom: 30px;
}

ul {
  padding: 0;
}

li {
  margin: 10px 0;
}

button {
  margin-top: 20px;
}

.alert {
  margin-top: 20px;
}
</style>
