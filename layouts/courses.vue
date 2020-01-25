<template>
	<v-app>
		<Header />
		<nuxt />
		<Footer />
	</v-app>
</template>

<script>
import Footer from "~/components/Footer";
import Header from "~/components/Header";

export default {
	components: {
		Header,
		Footer
	}
};
</script>

<style>
</style>
