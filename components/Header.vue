<template>
	<div>
		<v-toolbar dark color="deep-orange darken-4">
			<v-avatar class="mx-3" @click="$router.push('/')">
				<img src="https://ierc.am/media/IERC.png" alt />
			</v-avatar>
			<v-toolbar-title @click="$router.push('/')">
				<span class="font-weight-bold">
					ԻՆՈՎԱՑԻՈՆ ԷԹՆԻԿ
					<br />ՄԱՐԶԱՅԻՆ ԿԵՆՏՐՈՆ
				</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items>
				<v-btn text to="/about">Մեր մասին</v-btn>
				<v-btn text to="/news">Նորություններ</v-btn>
				<v-btn text to="/events">Միջոցառումներ</v-btn>
				<v-btn text to="/courses">Դասընթացներ</v-btn>
			</v-toolbar-items>

			<v-spacer />
		</v-toolbar>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>
