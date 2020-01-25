<template>
	<v-card max-width="344" dark tile flat class="pa-3">
		<v-img :src="image" height="200px"></v-img>

		<v-card-text>{{ text }}</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn class="text-uppercase" dark color="deep-orange darken-4">շարունակել</v-btn>
			<!-- <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
			</v-btn>-->
		</v-card-actions>

		<!-- <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
		</v-expand-transition>-->
	</v-card>
</template>

<script>
export default {
	props: ["image", "text"]
};
</script>

<style>
</style>
