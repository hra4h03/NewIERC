<template>
	<div>
		<span class="display-1 font-weight-bold red--text text-uppercase">{{ meeting.title }}</span>
		<v-divider />
		<span>
			<v-img :src="meeting.image" height="250px" width="350px" class="ma-3 float-left"></v-img>
			{{ meeting.text }}
		</span>
		<v-divider />
		<v-btn
			tile
			class="mb-6 mt-12"
			style="min-width: 100%"
			height="100"
			dark
			color="deep-orange darken-4"
		>
			<span class="headline">ՆՊԱՏԱԿԸ</span>
		</v-btn>
		<v-divider color="black" />
		<div v-for="(aim, index) in meeting.aims" :key="index" class="text-uppercase">
			<v-btn dark large icon color=" deep-orange darken-4">
				<v-icon>mdi-checkbox-marked</v-icon>
			</v-btn>
			<span>{{ aim }}</span>
		</div>
		<v-divider color="black" />
	</div>
</template>

<script>
export default {
	props: ["meeting"]
};
</script>

<style>
</style>
