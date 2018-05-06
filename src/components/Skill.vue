<template>
	<div class="skill">
		<label for="" v-for="(item,index) in resumer.skill">
			<p>技能特长</p>
			<input type="text" v-model="item.skill">		
		</label>
	</div>
</template>
<script>
	export default {
		props:['resumer']
	}
</script>