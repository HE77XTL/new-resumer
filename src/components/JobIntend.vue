<template>
	<div class="jobIntend">
		<label for="">
			<p>意向岗位</p>
			<input type="text" v-model="resumer.jobIntend.intendPost">		
		</label>
		<label for="">
			<p>意向城市</p>
			<input type="text" v-model="resumer.jobIntend.intendCity">		
		</label>
		<label for="">
			<p>职业类型</p>
			<input type="text" v-model="resumer.jobIntend.jobType">		
		</label>
	</div>
</template>
<script>
	export default {
		props:['resumer']
	}
</script>