<template>
	<v-container>
		<span class="display-2 font-weight-bold red--text text-uppercase">Մեր մասին</span>
		<Slogans :Slogan="Slogan" />
		<Meeting :meeting="Meeting" />
		<Partners :partners="Partners" />
	</v-container>
</template>

<script>
import { mapState } from "vuex";
import Slogans from "~/components/Slogan";
import Meeting from "~/components/Meeting";
import Partners from "~/components/Partners";
export default {
	components: {
		Slogans,
		Meeting,
		Partners
	},
	computed: {
		...mapState(["Slogan", "Meeting", "Partners"])
	}
};
</script>

<style>
</style>
