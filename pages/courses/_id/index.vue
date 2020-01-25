<template>
	<v-container>
		<span
			class="display-1 font-weight-bold red--text text-uppercase"
		>{{ course.text }} {{ course.subtext }}</span>

		<Slogan :Slogan="Courses[id].branches" />
	</v-container>
</template>

<script>
import { mapState } from "vuex";
import Slogan from "~/components/Slogan";
export default {
	asyncData({ params, store }) {
		return {
			id: params.id,
			course: store.state.Courses[params.id]
		};
	},
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
