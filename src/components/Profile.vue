<template>
	<div class="profile">
		<label for="">
			<p>姓名</p>
			<input type="text" v-model="resumer.profile.name">		
		</label>
		<label for="">
			<p>电话</p>
			<input type="text" v-model='resumer.profile.phone'>		
		</label>
		<label for="">
			<p>邮箱</p>
			<input type="text" v-model="resumer.profile.email">		
		</label>
		<label for="">
			<p>学校</p>
			<input type="text" v-model="resumer.profile.school">		
		</label>
		<label for="">
			<p>学历</p>
			<input type="text" v-model="resumer.profile.degree">		
		</label>
		<label for="">
			<p>专业</p>
			<input type="text" v-model="resumer.profile.major">		
		</label>
	</div>
</template>
<script>
	export default {
		props:['resumer']
	}
</script>