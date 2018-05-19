<template>
<div>
	<div class="skill">
		<div v-for="(item, index) in resumer.skill">
			<p>技能</p>
			<input type="text" v-model="item.skill">	
			<button class="removeBtn" v-on:click="removeSkill(index)">x</button>
		</div>
		<hr>
		<button class="addBtn" v-on:click="addSkill()">增加</button>
	</div>	
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
		padding-bottom: 32px;
		padding-left: 30px;
		border: 1px solid #ccc;
		margin-left: 10px;
		border-radius: 4px;
		padding-top: 5px;
		padding-right: 8px;
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
			width: 215px;
		}
		.content {
			margin-top: 16px;			
		}
		textarea {
			width: 215px;
		}
		.removeBtn {
			position: absolute;
			right: 8px;
			bottom: 35px;
			width: 16px;
		}
		.addBtn {
			margin-top: 16px;
		}

	}
</style>