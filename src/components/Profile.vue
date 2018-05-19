<template>
<div>
	<div class="profile">
		<div v-for="(value,key,index) in resumer.profile">
			<p>{{resumer.profile[key][1]}}</p>
			<input type="text" v-model="resumer.profile[key][0]">
		</div>
	</div>	
</div>

</template>
<script>
	export default {
		props:['resumer']
	}
</script>

<style lang="scss" scoped>
	.profile {
		padding-left: 30px;
		border: 1px solid #ccc;
		margin-left: 10px;
		border-radius: 4px;
		padding-top: 5px;
		div {
			padding-bottom: 32px;
			position: relative;
		}
		p {
			font-size: 14px;
			line-height: 20px;
			padding-bottom: 4px;
		}
		input {
			outline: none;
			border: none;
			border-bottom: 1px solid #ccc;
			font-size: 14px;
			line-height: 20px;
			width: 240px;
			border-radius:0px;
		}
	}
</style>