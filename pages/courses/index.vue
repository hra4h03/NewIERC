<template>
	<v-container class="mt-12">
		<span class="text-uppercase font-weight-bold red--text display-1">ԴԱՍԸՆԹՑՆԵՐ</span>
		<Slogan :Slogan="Courses" :col="4" />
	</v-container>
</template>

<script>
import { mapState } from "vuex";
import Slogan from "~/components/Slogan";
export default {
	components: {
		Slogan
	},
	computed: {
		...mapState(["Courses"])
	}
};
</script>

<style>
</style>
