<template>
  <div class="bg-zinc-950   text-gray-300 max-w-[70vw] h-screen ">
    <div class="w-4/5 bg-zinc-900 my-6 rounded-xl text-2xl px-5 py-2">
      <div class="font-bold mb-2">Instructions : </div>
      <div class="text-lg text-gray-400">
        <p>1. Write the Name of the subject as it should be in the Marksheet.</p>
        <p>2. You don't Need to specify Theory (TH) and Practical (PR).</p>
        <p>3. You only need to enter the subject once.</p>
      </div>
    </div>
    <div class="h-3/4 w-[110%] bg-zinc-900 rounded-xl px-1 py-3 lg:px-4">
      <div class="text-2xl text-gray-300 font-bold mt-5 lg:text-xl">
        Enter the details of the Subjects:
      </div>
      <div class="mt-5 mx-auto bg-zinc-950 px-1 py-5 rounded-2xl lg:px-1">
        <form class="" @submit.prevent="" @keydown.prevent.enter="">
          <div class="w-full bg-zinc-900 px-10 lg:px-2 py-3  rounded-2xl flex my-3 text-sm" v-for="( subject, index) in subjects"
            :key="index">
            <div class="mr-2 text-xl text-gray-300">{{ index + 1 }}.</div>
            <input type="text" v-model="subjects[index].name" :placeholder="'Subject ' + (index+1)"
              class="w-64 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl ">
            <input type="text" v-model="subjects[index].theory_subject_code"
              placeholder="Subject Code (TH)"
              class="w-36 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
            <input type="number" step="any" v-model="subjects[index].theory_credit_hours" placeholder="Credit Hour (TH)"
              class="w-36 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
            <input type="number" step="any" v-model="subjects[index].theory_marks" placeholder="Full Marks (TH)"
              class="w-28 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
            <input type="text" v-model="subjects[index].practical_subject_code"
              placeholder="Subject Code (IN)"
              class="w-32 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
            <input type="number" step="any" v-model="subjects[index ].practical_credit_hours"
              placeholder="Credit Hour (IN)"
              class="w-28 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
            <input type="number" step="any" v-model="subjects[index].practical_marks" placeholder="Full Marks (IN)"
              class="w-28 ml-2 bg-transparent border-2 border-gray-500 px-1 py-1 rounded-xl">
          </div>
          <div class="flex">
            <div class="grow"></div>
            <button class="rounded-xl px-5 py-2 bg-green-600 hover:bg-green-700 transition-colors ease-in-out mt-5 mr-3"
          @click="addSubject">Add Subject</button>
            <button class="rounded-xl px-5 py-2 bg-green-600 hover:bg-green-700 transition-colors ease-in-out mt-5 mr-3"
              @click="collectData">
              Submit</button>

          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios'
export default {
  name: 'HomeView',
  components: {

  },

  data() {
    return {
      subjects: [{
        name: "",
        theory_subject_code: "",
        theory_credit_hours: null,
        theory_marks: null,
        practical_subject_code: "",
        practical_credit_hours: null,
        practical_marks: null
      },],
      dataArray: []

    }
  },
  methods: {
    addSubject() {
      this.subjects.push({
        name: "",
        theory_subject_code: "",
        theory_credit_hours: null,
        theory_marks: null,
        practical_subject_code: "",
        practical_credit_hours: null,
        practical_marks: null
      });
    },

    collectData() {
      // Clear the array before collecting data
      this.dataArray = [];
      // Filter out empty objects and push each subject into the dataArray
      this.subjects.forEach(subject => {
        if (subject.name !== '') { // Check if name property is not empty
          this.dataArray.push({
            name: subject.name,
            theory_credit_hours: subject.theory_credit_hours,
            theory_marks: subject.theory_marks,
            practical_credit_hours: subject.practical_credit_hours,
            practical_marks: subject.practical_marks,
            theory_subject_code: subject.theory_subject_code,
            practical_subject_code: subject.practical_subject_code
            // You can add more properties here if needed
          });
        }
      });
      // Log the collected data
      const response = axios.post("/add/subjects",this.dataArray)
      .catch(error =>{
        console.error(error)
      })
      // Now you have the data array ready to be used or sent to an API
    }
  }

}



</script>
