<template>
	<div class="skill">
		<label for="" v-for="(item, index) in resumer.skill">
			<p>技能</p>
			<input type="text" v-model="item.skill">	
			<button v-on:click="removeSkill(index)">x</button>
		</label>
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