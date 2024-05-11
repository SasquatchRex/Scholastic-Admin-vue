<template>
    <div class="bg-zinc-950   text-gray-300 w-screen h-screen">
        <div class="w-4/5 bg-zinc-900 my-6 rounded-xl text-2xl px-5 py-2">
            <div class="font-bold mb-2">Instructions : </div>
            <div class="text-lg text-gray-400">
                <p>1. Write the Name of the Student as it should be in the Marksheet.</p>
                <p>2. In case of NG, just put the marks, system will detect NG.</p>
                <p>3. Enter the number of marks scored.</p>
                <p>4. Use "-" to separate the dates. Dont use "/"</p>
            </div>
        </div>
        <div class="h-3/4 xl:w-4/5 bg-zinc-900 rounded-xl px-4 py-3 ">
            <div class="text-2xl text-gray-300 font-bold mt-5">
                Enter the details :
            </div>
            <div class="mt-5 mx-auto bg-zinc-950 px-5 py-5 rounded-2xl lg-px-1 ">
                <form class="" @submit.prevent="" @keydown.prevent.enter="">
                    <div class="flex flex-row">
                        <div class="w-2/5 bg-zinc-900 px-5 py-3 rounded-2xl  flex flex-col my-3 space-y-5">
                            <!-- <div class="mr-5 text-2xl text-gray-300">{{ i }}.</div> -->
                            <input type="text" placeholder="Exam Year (BS)" v-model="exam_year_bs"
                                class="w-64 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl">
                            <input type="text" placeholder="Exam Year (AD)" v-model="exam_year_ad"
                                class="w-64 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl">
                            <input type="text" placeholder="Date of Issue" v-model="date_of_issue"
                                class="w-64 bg-transparent border-2 border-gray-500 px-3 py-1 rounded-xl">

                        </div>

                    </div>
                    <button
                        class="rounded-xl px-5 py-2 bg-green-600 hover:bg-green-700 transition-colors ease-in-out mt-5 mr-3 "
                        @click="handle_submit">
                        Submit</button>
                    <button
                        class="rounded-xl px-5 py-2 bg-green-600 hover:bg-green-700 transition-colors ease-in-out mt-5 mr-3 "
                        @click="getPDF">
                        Get PDF</button>
                    <a ref="pdfLink" :href="absolutePath" class="hidden" target="_blank">Open
                        PDF</a>

                </form>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: "ExportView",
    data() {
        return {
            exam_year_bs: null,
            exam_year_ad: null,
            date_of_issue: null
        }
    },
    methods: {
        async handle_submit() {
            const response = await axios.post("/test/data", {
                exam_year_ad: this.exam_year_ad,
                exam_year_bs: this.exam_year_bs,
                date_of_issue: this.date_of_issue
            }).catch(error => {
                console.error(error)
            })
            console.log(response)

        },
        async getPDF() {
            axios.get('/export/pdf', {
                responseType: 'blob' // Important to receive the PDF as a blob
            })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'document.pdf');
                    document.body.appendChild(link);
                    link.click();
                })
                .catch(error => {
                    console.error('Error downloading PDF:', error);
                });



        }
    }
}
</script>