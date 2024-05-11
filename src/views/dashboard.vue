<template>
    <div class="w-4/5 bg-zinc-900 my-10 mx-20 rounded-xl px-5 py-5">
        <div class="text-zinc-300 text-3xl text-center">How to Use the application</div>
        <div class=" text-zinc-300 text-xl my-10 bg-zinc-800 px-4 py-3 h-4/6 rounded-2xl space-y-3">
            <p>1. First add the subjects in the 'Add Subject' Section. Note to use the correct Name!. It should be done only once.</p>
            <p>2. Then put the students data along with subjects marks. In case of NG, only put the marks obtained, system will detect NG. </p>
            <p class="ml-10">a. While entering date separate with '-' NEVER WITH "/". (Eg- YYYY-MM-DD)</p>
            <p>3. Then Export the data from 'Export Result' section.</p>
            <p>4. Incase of mistake while entering data, you can either again enter the data for particular student or visit admin page in 'admin' section.</p>
            <p>5. The default username and pasword for admin is 'admin' & 'admin'</p>
            <p>6. In case of any problem or error contact the developer from the profile.</p>
        </div>
    </div>
</template>
<script>
    export default{
        name:"DashboardView"
    }
</script>