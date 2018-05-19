<template>
<div>
	<div class="experience">
		<div  v-for="(item, index) in resumer.experience">
			<p>公司</p>
			<input type="text" v-model="item.compony">	
			<p class="content">工作内容</p>	
			<textarea name="" id="" cols="30" rows="10" v-model="item.workContent"></textarea>
			<button class="removeBtn" v-on:click="removeExperience(index)">x</button>
		</div>
		<hr>
		<button class="addBtn" v-on:click="addExperience()">增加</button>
	</div>	
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
		padding-left: 30px;
		border: 1px solid #ccc;
		margin-left: 10px;
		border-radius: 4px;
		padding-top: 5px;
		padding-bottom: 32px;

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
			border-radius: 0;
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