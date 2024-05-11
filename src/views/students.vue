<template>
    <div class="bg-zinc-950 h-full  text-gray-300 w-[65vw] ">
        <div class="w-4/5 bg-zinc-900 my-6 rounded-xl text-2xl px-5 py-2 lg:py-1">
            <div class="font-bold mb-2">Instructions : </div>
            <div class="text-lg text-gray-400 lg:text-sm">
                <p>1. Write the Name of the Student as it should be in the Marksheet.</p>
                <p>2. In case of NG, just put the marks, system will detect NG.</p>
                <p>3. Enter the number of marks scored.</p>
                <p>4. Use "-" to separate the dates. Dont use "/"</p>
            </div>
        </div>
        <div class="h-3/4 xl:w-4/5 bg-zinc-900 rounded-xl px-4 py-3 lg:py-2">
            <div class="text-2xl text-gray-300 font-bold mt-5 lg:text-xl lg:mt-2">
                Enter the details of the software:
            </div>
            <div class="mt-5 mx-auto bg-zinc-950 px-5 py-5 rounded-2xl">
                <form class="" @submit.prevent="" @keydown.prevent.enter="">
                    <div class="flex flex-row ">
                        <div
                            class="w-2/5 bg-zinc-900 px-5 py-3 rounded-2xl rounded-r-none flex flex-col my-3 space-y-5 lg:px-1" >
                            <!-- <div class="mr-5 text-2xl text-gray-300">{{ i }}.</div> -->
                            <input type="text" placeholder="Name of the Student" v-model="student.name"
                                class="w-64 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl lg:w-40">
                            <input type="number" placeholder="Registration Number" v-model="student.reg_no"
                                class="w-64  bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl lg:w-40">
                            <input type="number" placeholder="Symbol Number" v-model="student.symb_no"
                                class="w-64  bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl lg:w-40">

                            <input type="text" placeholder="DOB in BS (YYYY-MM-DD)" v-model="student.dob_bs"
                                class="w-64  bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl date lg:w-40">

                            <input type="text" placeholder="DOB in AD (YYYY-MM-DD)" v-model="student.dob_ad"
                                class=" w-64 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl date lg:w-40">

                        </div>
                        <div
                            class="w-full bg-zinc-900 px-5 py-3 rounded-2xl rounded-l-none flex flex-col my-3 space-y-5 lg:px-0 " v-if="subjects_to_send.length !=0">
                            <div class="flex" v-for="(i, index) in subjects" :key="index">

                                <div class="w-60 mx-2 bg-transparent border-gray-500 px-3 py-1 rounded-xl font-bold lg:text-sm lg:w-32">{{ subjects_to_send[index].subject }}</div>
                                <input type="number" step="any" placeholder="Marks in TH"
                                    v-model="subjects_to_send[index].theory_marks_obtained"
                                    class="w-32 mx-2 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl">
                                <input type="number" step="any" placeholder="Marks in IN"
                                    v-model="subjects_to_send[index].practical_marks_obtained"
                                    class="w-32 mx-2 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl">
                            </div>




                        </div>

                    </div>
                    <button
                        class="rounded-xl px-5 py-2 bg-green-600 hover:bg-green-700 transition-colors ease-in-out mt-5 mr-3 lg:mt-2"
                        @click="handle_submit">
                        Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "StudentView",
    watch: {
        subjects: {
            deep: true,
            handler(newVal) {
                // Update subjects_to_send[index].subject when subjects[i].name changes
                newVal.forEach((subject, index) => {
                    this.subjects_to_send[index].subject = subject.name;

                });
            }
        },

    },
    data() {
        return {
            subjects: [],
            student: {
                name: '',
                reg_no: null,
                symb_no: null,
                dob_bs: '',
                dob_ad: ''
            },
            subjects_to_send: [],

            dataArray: [],


        }
    },
    mounted() {
        this.get_subjects();
    },
    methods: {
        add_arrays() {
            for (var a in this.subjects) {
            
                this.subjects_to_send.push({
                    subject: "",
                    theory_marks_obtained: null,
                    practical_marks_obtained: null,
                });

            }
        },
        async handle_submit() {
            const payload = {
                student: this.student,
                subjects: this.subjects_to_send
            }
            console.log(payload)
            const response = await axios.post("/create/mark",payload)
            .catch(error => {
                console.error(error)
            })
        },
        async get_subjects() {
            const response = await axios.get("/get/subjects",
                {
                    Headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            )
            if (response.status === 200) {
                this.subjects = response.data
                this.add_arrays()
            }
            // console.log(this.subjects)

        }
    },

}
</script>

<style>
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
}
</style>