<template>
	<v-card dark flat tile>
		<v-row class="mx-12">
			<v-col class="col-md-4 col-sm-12">
				<v-card-title>Հետադարձ կապ</v-card-title>
				<p v-for="(item, index) in links" :key="index">
					<v-btn dark fab x-small color="deep-orange darken-4">
						<v-icon dark>{{ item.icon }}</v-icon>
					</v-btn>
					<v-btn text dark>{{ item.text }}</v-btn>
				</p>
			</v-col>
			<v-col class="col-md-4 col-sm-12">
				<v-text-field
					dark
					v-for="(item, index) in fields"
					autofocus
					:key="index"
					class
					:label="item"
					outlined
					placeholder
					flat
					color="deep-orange darken-4"
				></v-text-field>
				<v-card-actions>
					<v-spacer />
					<v-btn color="deep-orange darken-4">Ուղարկել</v-btn>
				</v-card-actions>
			</v-col>
			<v-col class="col-md-4 col-sm-12">
				<iframe
					class="mx-12"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.136656605085!2d44.29580731534788!3d40.161510979395594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406a94d7cd99fd25%3A0xede5f615737dc62a!2sCross%20of%20Armenian%20Unity%20NGO!5e0!3m2!1sen!2s!4v1579802995154!5m2!1sen!2s"
					frameborder="0"
					style="border:0;"
					allowfullscreen
				></iframe>
			</v-col>
		</v-row>
		<v-divider dark />
	</v-card>
</template>

<script>
export default {
	data() {
		return {
			links: [
				{
					icon: "mdi-phone",
					text: "+374 94 949 264"
				},
				{
					icon: "mdi-mail",
					text: "info@ierc.am"
				},
				{
					icon: "mdi-place",
					text: " Շահումյան 36"
				}
			],
			fields: ["Անուն", "Էլ․ փոստ", "Հաղորդագրություն"]
		};
	}
};
</script>

<style>
</style>
