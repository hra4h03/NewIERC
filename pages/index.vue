<template>

		<v-container class="mt-12">

		<Slogans :Slogan="Slogan" />
			<v-row>
				<v-col v-for="(card, index) in Cards" :key="index">
					<Card :text="card.text" :image="card.image" />
				</v-col>
			</v-row>
		<v-divider />

		</v-container>
</template>

<script>
import Slogans from "~/components/Slogan";
import Card from "~/components/Card";
import { mapState } from "vuex";
export default {
	components: {
		Slogans,
		Card
	},
	computed: {
		...mapState(["Slogan"])
	},
	data() {
		return {
			Cards: [
				{
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur voluptates veritatis molestiae, eligendi minima expedita illo porro amet accusamus ut officiis nam necessitatibus, deleniti eum. Aspernatur voluptatem unde explicabo.",
					image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				},
				{
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur voluptates veritatis molestiae, eligendi minima expedita illo porro amet accusamus ut officiis nam necessitatibus, deleniti eum. Aspernatur voluptatem unde explicabo.",
					image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				},
				{
					text:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur voluptates veritatis molestiae, eligendi minima expedita illo porro amet accusamus ut officiis nam necessitatibus, deleniti eum. Aspernatur voluptatem unde explicabo.",
					image: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
				}
			]
		};
	}
};
</script>
