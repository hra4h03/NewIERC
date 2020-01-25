<template>
	<div class="my-5">
		<v-divider color="black" />
		<v-container>
			<div class="mx-12">
				<v-row class="mx-12">
					<v-col v-for="(slogan, index) in Slogan" :key="index" :class="`col-${col}`" class="mx-auto">
						<v-avatar size="230" @click="$router.push(`${$route.path}/${index}`)" :color="slogan.color">
							<div class="white--text">
								<span class="text-uppercase title">
									{{ slogan.text }}
									<br />
									<span class="overline">{{ slogan.subtext }}</span>
								</span>
							</div>
						</v-avatar>
					</v-col>
				</v-row>
			</div>
		</v-container>
		<v-divider color="black" />
	</div>
</template>

<script>
export default {
	props: {
		Slogan: {
			type: Array,
			required: true
		},
		col: {
			type: Number,
			default: 3
		}
	}
};
</script>

<style>
</style>
