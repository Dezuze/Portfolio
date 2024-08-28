<template>
    <div class="mx-12 my-6 col-start-3 col-end-11 ">
        <div class="text-3xl font-bold font-sans text-white">
            <p>Loans</p>
        </div>
        <div class="w-full">
            <form class="gap-3 text-nowrap text-white font-sans font-semibold mx-12 mt-12 justify-center" method="post" id="Loans" action="#">
                <div class="flex col-start-1 col-end-10 justify-stretch ">
                <div class="flex gap-4 w-1/2 mr-4">
                    <label for="Title for the new Loan">Title</label>
                    <input class="w-full bg-slate-500 rounded-md p-1 px-1" type="text" name="title" required>
                </div>
                <div class="flex gap-4 w-1/2">
                    <label for="Type of Loans">Type of Loans</label>
                    <input class="w-full bg-slate-500 rounded-md p-1 px-1" type="text" list="Loans" required>
                    <datalist id="Loans">
                        <option>Education</option>
                        <option>Car</option>
                        <option>Property</option>
                        <option>House</option>
                    </datalist>
                </div>
                <div class="grid">
                    <label for="Total loan amount">Loan amount</label>
                    <input type="number">
                    <label for="intrest rate">Intrest rate</label>
                    <input type="number">
                    <label for="Loan term in months">Loan term</label>
                    <input type="number">
                    <label for="start date">Start Date</label>
                    <input type="date">
                    <label for="Payment date">Due Date</label>
                    <input type="date">
                    <label for="outstanding balance">Outstanding balance (optional)</label>
                    <input type="number">
                    <label for="description">Description</label>
                    <input type="textarea">
                </div>
            </div>
            </form>
        </div> 
    </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Loans'
})
</script>