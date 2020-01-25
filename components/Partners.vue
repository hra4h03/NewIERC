<template>
	<div class="mt-12">
		<span class="display-1 font-weight-bold red--text">ԳՈՐԾԸՆԿԵՐՆԵՐ</span>
		<v-divider color="black" />
		<v-row>
			<v-col v-for="(partner, index) in partners" :key="index">
				<v-img max-width="300px" :src="partner.logo"></v-img>
			</v-col>
		</v-row>
	</div>
</template>

<script>
export default {
	props: ["partners"]
};
</script>

<style>
</style>
