<template>
	<v-app v-scroll="scrolled">
		<Header />
		<Carousel />
		<nuxt />
		<v-btn
			max-width="50px"
			min-width="50px"
			elevation="12"
			max-height="60px"
			min-height="60px"
			dark
			color=" deep-orange darken-4"
			class="backToTop"
			tile
			v-if="top"
			@click="scrollTop()"
		>
			<v-icon size="30px">mdi-arrow-up</v-icon>
		</v-btn>
		<Footer />
	</v-app>
</template>

<script>
import Header from "~/components/Header";
import Carousel from "~/components/Carousel";
import Footer from "~/components/Footer";

export default {
	components: {
		Header,
		Carousel,
		Footer
	},
	data() {
		return {
			top: true
		};
	},
	methods: {
		scrollTop() {
			window.scrollTo({ top: 0, behavior: "smooth" });
		},
		scrolled() {
			if (window.scrollY < 100) {
				this.top = false;
			} else {
				this.top = true;
			}
		}
	}
};
</script>
<style scoped>
.backToTop {
	position: fixed;
	right: 10px;
	bottom: 30px;
	z-index: 100;
}
</style>
