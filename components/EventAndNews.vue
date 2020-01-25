<template>
	<v-card tile flat class="my-12">
		<span class="text-uppercase font-weight-bold red--text headline">{{ info.title }}</span>
		<v-divider color="black" class="mb-3" />
		<span class="min-height: 200px">
			<v-img :src="info.image" height="200px" width="200px" class="mx-3 float-left"></v-img>
			{{ info.text }}
			<v-card-actions>
				<v-spacer />
				<v-btn color="deep-orange darken-4" dark>Շարունակել</v-btn>
			</v-card-actions>
		</span>

		<v-divider color="black" />
	</v-card>
</template>

<script>
export default {
	props: ["info"]
};
</script>

<style>
</style>
