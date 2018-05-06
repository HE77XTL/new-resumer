<template>
	<div class="experience">
		<label for="" v-for="(item, index) in resumer.experience">
			<p>公司</p>
			<input type="text" v-model="item.compony">	
			<p>工作内容</p>	
			<textarea name="" id="" cols="30" rows="10" v-model="item.workContent"></textarea>
			<button v-on:click="removeExperience(index)">x</button>
		</label>
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