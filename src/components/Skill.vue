<template>
	<div class="skill">
		<label for="">
			<p>技能1</p>
			<input type="text" v-model="resumer.skill.skill_1">		
		</label>
		<label for="">
			<p>技能2</p>
			<input type="text" v-model="resumer.skill.skill_2">		
		</label>
	</div>
</template>
<script>
	export default {
		props:['resumer']
	}
</script>