<template>
	<div class="h-full py-4 px-4 w-full align-bottom bg-transperent">
		<div class="mt-5 h-1/4 place-content-around flex flex-row gap-4 text-center px-2">
			<div class="basis-1/2 border-4 rounded-3xl border-green-600 text-green-600 content-center">
				<input type="text" id="dynamicTextField" class=" bg-transparent text-center " placeholder="Fetching data...">
			</div>
			<div class="basis-1/2 border-4 rounded-3xl border-red-600 text-red-600 content-center">
				<input type="text" id="dynamicTextField" class=" bg-transparent text-center " placeholder="Fetching data...">
			</div>
		</div>
		<div class="h=3/4 mt-4 p-2">
			<table class="table-auto w-full">
				<thead>
					<tr>
					<th>Tn. No</th>
					<th>Date</th>
					<th>Description</th>
					<th>Type</th>
					<th>Amount</th>
					</tr>
				</thead>
			</table>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dashboard'
})
</script>