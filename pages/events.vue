<template>
	<v-container>
		<span class="display-1 font-weight-bold red--text text-uppercase">ՄԻՋՈՑԱՌՈՒՄՆԵՐ</span>
		<v-divider color="black" class="mb-12" />
		<v-row>
			<v-col class="col-12">
				<NewsCard v-for="(news, index) in News" :key="index" :info="news" />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapState } from "vuex";
import NewsCard from "~/components/EventAndNews";
export default {
	components: {
		NewsCard
	},
	computed: {
		...mapState(["News"])
	}
};
</script>

<style>
</style>
