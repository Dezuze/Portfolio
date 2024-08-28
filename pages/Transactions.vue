<template>
    <div class="mx-12 my-6 col-start-3 col-end-11 ">
        <div class="text-3xl font-bold font-sans text-white">
            <p>Add New Transaction</p>
        </div>
        <form class="grid col-start-4 col-end-10 gap-3 text-nowrap text-white font-sans font-semibold mx-12 mt-12 justify-center" method="POST" id="Transaction" action="#">
            <div class="flex col-start-1 col-end-10 justify-stretch ">
                <div class="flex gap-4 w-1/2 mr-4">
                    <label for="Title for the new transaction">Title</label>
                    <input class="w-full bg-slate-500 rounded-md p-1 px-1" type="text" id="trnstitle" name="title" required>
                </div>
                <div class="flex gap-4 w-1/2">
                    <label for="Type of Transaction">Type of Transaction</label>
                    <input class="w-full bg-slate-500 rounded-md p-1 px-1" type="text" list="Transactions" required>
                    <datalist id="Transactions">
                        <option>Groceries</option>
                        <option>Shopping</option>
                        <option>Salary</option>
                        <option>Medication</option>
                    </datalist>
                </div>
            </div>
            <div class="flex col-start-1 col-end-10 justify-between mt-4">
                <div class="flex gap-2 w-3/4">
                    <label for="Amount">Amount of transaction</label>
                    <div class="w-full flex bg-slate-500 rounded-md p-1 px-1">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 4H10.5M10.5 4C12.9853 4 15 6.01472 15 8.5C15 10.9853 12.9853 13 10.5 13H6L13 20M10.5 4H18M6 8.5H18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <input class="bg-slate-500 w-full pl-2" type="number" id="Amount" name="Amount" min="1" step="0.01" placeholder="0.00" required>
                    </div>
                </div>
                <div class="grid grid-cols-2 ml-2 gap-2 justify-items-stretch w-1/4">                            
                        <input type="radio" id="Credit" name="C/D" value="Credit" class=" w-1/2 duration-100 ease-in hidden-radioc hidden"required>
                        <label for="Credit">Credit</label>                        
                        <input type="radio" id="Debit" name="C/D" value="Debit" class=" w-1/2 duration-100 ease-in hidden-radiod hidden" required>
                        <label for="Debit">Debit</label>                          
                </div>
            </div>
            <div class="col-start-1 col-end-10">
                <div class="grid grid-cols-1 w-full mt-2">
                    <label for="descriptiion">Description</label>
                    <textarea class="w-full mt-4 p-2 bg-slate-500 rounded-md px-2" id="description" name="Description" rows="5"  required></textarea>
                </div>
                <div>
                    <button class="w-full ring-slate-300 ring p-2 mt-4 rounded-md " form="Transaction" type="submit">Submit</button>
                </div>
            </div>
        </form> 
    </div>
</template>

<script lang="ts" setup >
useHead({
  title: 'Transactions'
})
</script>

<style scoped>
        .hidden-radioc + label {
            @apply p-1 px-2 text-center hover:bg-green-500 hover:text-white text-green-500 rounded-md bg-transparent;
        }
        .hidden-radioc:checked + label {
            @apply p-1 px-2 ring ring-green-500 hover:bg-green-500 hover:text-white text-green-500 rounded-md bg-transparent;
        }
        .hidden-radiod + label {
            @apply p-1 px-2 text-center hover:bg-red-600 hover:text-white text-red-600 rounded-md bg-transparent;
        }
        .hidden-radiod:checked + label {
            @apply p-1 px-2 ring ring-red-600 hover:bg-red-600 hover:text-white text-red-600 rounded-md bg-transparent;
        }
</style>