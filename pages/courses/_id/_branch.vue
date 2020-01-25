<template>
	<v-container class="mt-12">
		<span
			class="display-1 font-weight-bold red--text text-uppercase"
		>{{ branchInfo.text }} {{ branchInfo.subtext }}</span>
		<v-divider color="black" />
		<v-row>
			<v-col class="col-md-4 col-sm-6 col-xs-12">
				<v-img width="100%" max-height="300px" :src="branchInfo.image"></v-img>
			</v-col>
			<v-col class="col-md-8 col-sm-6 col-xs-12 text-center">
				<v-btn dark height="100px" class="headline mb-12" tile style="min-width: 100%">ԴԱՍԸՆԹԱՑԱՎԱՐ</v-btn>
				<span class="red--text font-weight-bold display-1 mt-12 mx-auto">{{branchInfo.teacher }}</span>
				<v-divider color="black" />
			</v-col>
		</v-row>
		<v-btn
			style="min-width: 100%"
			class="display-1"
			dark
			color="deep-orange darken-4"
			height="100"
		>ՊԱՅՄԱՆՆԵՐ</v-btn>
		<v-divider color="black" class="my-3" />
		<div v-for="([key, value], index) in Object.entries(branchInfo.details)" :key="index">
			<v-btn dark large icon color=" deep-orange darken-4">
				<v-icon>mdi-checkbox-marked</v-icon>
			</v-btn>
			<span class="text-uppercase font-weight-bold">{{ key }}`</span>
			{{ value }}
		</div>
		<v-divider color="black" class="mb-12" />

		<v-btn style="min-width: 100%" class="display-1" dark height="100">ԱՎԱՐՏԱԿԱՆ ՎԿԱՅԱԿԱՆ</v-btn>
		<v-divider color="black" class="my-3" />
		<div class="mb-12">
			<v-btn dark large icon color=" deep-orange darken-4">
				<v-icon>mdi-checkbox-marked</v-icon>
			</v-btn>
			<span>{{ branchInfo.result }}</span>
		</div>

		<v-btn style="min-width: 100%" class="display-1" dark height="100">ԱՅԼ ԴԱՍԸՆԹԱՑՆԵՐ</v-btn>
		<v-divider color="black" class="my-3" />
		<div class="mb-12">
			<v-btn dark large icon color=" deep-orange darken-4">
				<v-icon>mdi-checkbox-marked</v-icon>
			</v-btn>
			<span v-for="(course, index) in Courses" :key="index">
				<v-btn
					v-for="(item, i) in course.branches"
					text
					@click="$router.push(`/courses/${index}/${i}`)"
					:key="i"
				>{{ item.text }} {{item.subtext}}</v-btn>
			</span>
		</div>
	</v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
	asyncData({ params, store }) {
		return {
			branch: params.branch,
			branchInfo: store.state.Courses[params.id].branches[params.branch]
		};
	},
	layout: "courses",
	computed: {
		...mapState(["Courses"])
	}
};
</script>

<style>
</style>
