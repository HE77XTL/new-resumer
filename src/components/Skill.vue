<template>
	<div class="skill">
		<div v-for="(item, index) in resumer.skill">
			<p>技能</p>
			<input type="text" v-model="item.skill">	
			<button v-on:click="removeSkill(index)">x</button>
		</div>
		<hr>
		<button v-on:click="addSkill()">增加</button>
	</div>
</template>
<script>
	export default {
		props:['resumer'],
		methods: {
			addSkill: function(){
				this.resumer.skill.push({skill:''})
			},
			removeSkill: function(index){
				this.resumer.skill.splice(index,1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.skill {
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
			width: 186px;
		}
	}
</style>