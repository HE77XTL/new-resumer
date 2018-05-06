<template>
	<div class="resumeEdit">
		<div class="navTab">
			<ul>
				<li><router-link to="/editor/profile">profile</router-link></li>
				<li><router-link to="/editor/jobintend">jobinrend</router-link></li>
				<li><router-link to="/editor/experience">experience</router-link></li>
				<li><router-link to="/editor/skill">skill</router-link></li>
			</ul>
		</div>
		<router-view class="EditTemplate" v-bind:resumer="resumer"></router-view>
	</div>
</template>
<script>
	export default {
		props: ['resumer']
	}
</script>

<style lang="scss">
	.resumeEdit {
		display: flex;
		.EditTemplate {
			flex: 1;
		}
	}	
</style>