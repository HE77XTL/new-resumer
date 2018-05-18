<template>
	<div class="experience">
		<div  v-for="(item, index) in resumer.experience">
			<p>公司</p>
			<input type="text" v-model="item.compony">	
			<p>工作内容</p>	
			<textarea name="" id="" cols="30" rows="10" v-model="item.workContent"></textarea>
			<button v-on:click="removeExperience(index)">x</button>
		</div>
		<hr>
		<button v-on:click="addExperience()">增加</button>
	</div>
</template>
<script>
	export default {
		props:['resumer'],
		methods: {
			addExperience: function(){
				this.resumer.experience.push({compony: '',workContent:''})
			},
			removeExperience: function(index){
				this.resumer.experience.splice(index,1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.experience {
		div {
			padding-bottom: 32px;
			position: relative;
			// &::after {
			// 	display: block;
			// 	content: '';
			// 	width: 20px;
			// 	height: 40px;
			// 	border: 1px solid #ccc;
			// 	border-width: 0 0 0 1px;
			// 	position: absolute;
			// 	top: 0;
			// 	left: 0;
			// }
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
		}
	}
</style>