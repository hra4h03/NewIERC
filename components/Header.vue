<template>
	<div>
		<v-toolbar dark color="deep-orange darken-4">
			<v-menu offset-y>
				<template v-slot:activator="{ on }">
					<v-app-bar-nav-icon class="hidden-md-and-up" v-on="on" />
				</template>
				<v-list>
					<v-list-item v-for="(item, index) in items" :key="index">
						<v-list-item-title @click="$router.push(item.to)">{{ item.title }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>

			<v-avatar class="mx-3" @click="$router.push('/')">
				<img src="https://ierc.am/media/IERC.png" />
			</v-avatar>
			<v-toolbar-title @click="$router.push('/')">
				<span class="font-weight-bold">
					ԻՆՈՎԱՑԻՈՆ ԷԹՆԻԿ
					<br />ՄԱՐԶԱՅԻՆ ԿԵՆՏՐՈՆ
				</span>
			</v-toolbar-title>

			<v-spacer></v-spacer>

			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn v-for="(item, index) in items" :key="index" text :to="item.to">{{ item.title }}</v-btn>
			</v-toolbar-items>

			<v-spacer />
		</v-toolbar>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					title: "Մեր մասին",
					to: "/about"
				},
				{
					title: "Նորություններ",
					to: "/news"
				},
				{
					title: "Միջոցառումներ",
					to: "/events"
				},
				{
					title: "Դասընթացներ",
					to: "/courses"
				}
			]
		};
	}
};
</script>

<style>
</style>
