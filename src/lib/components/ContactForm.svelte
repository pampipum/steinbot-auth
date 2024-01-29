<script>
	let name = '';
	let email = '';
	let message = '';

	function handleSubmit() {
		// Add your logic to handle the form submission
		console.log({ name, email, message });
	}
</script>

<form class="max-w-md mx-auto p-4" on:submit|preventDefault={handleSubmit}>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="name"> Name </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="name"
			type="text"
			placeholder="Your name"
			bind:value={name}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
		<input
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="email"
			type="email"
			placeholder="Your email"
			bind:value={email}
		/>
	</div>
	<div class="mb-4">
		<label class="block text-gray-700 text-sm font-bold mb-2" for="message"> Message </label>
		<textarea
			class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
			id="message"
			placeholder="Your message"
			rows="5"
			bind:value={message}
		></textarea>
	</div>
	<div class="flex items-center justify-between">
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="submit"
		>
			Submit
		</button>
	</div>
</form>
