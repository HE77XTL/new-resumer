<template>
	<div class="editor">
		<div class="topBar">
			<h2>RESUMER</h2>
			<router-link to="/login"><button class="login">login</button></router-link>
			<router-link to="/signup"><button class="signup">signup</button></router-link>
			<router-link to="/preview"><button class="preview">preview</button></router-link>
			<button class="save" v-on:click="saveData()">save</button>	
		</div>
		<div class="resumer">
			<ResumeEdit class="resumeLeft" v-bind:resumer="data.resumer"></ResumeEdit>
			<ResumePreview class="resumeRight" v-bind:resumer="data.resumer"></ResumePreview>
		</div>
	</div>
</template>
<script>
import Topbar from '@/components/Topbar'
import ResumeEdit from '@/components/ResumeEdit'
import ResumePreview from '@/components/ResumePreview'
	export default {
		props: ['data'],
		components:{
			Topbar,ResumeEdit,ResumePreview
		},
		methods: {
			saveData: function(){
				alert(123)
				this.$emit('saveData')
			}
		}
	}
</script>
<style lang="scss">
	.resumer {
		display: flex;
		min-width: 800px;

		.resumeLeft {
			width: 40%;
			border: 1px solid #ccc;
		}
		.resumeRight {
			width: 60%;
			border: 1px solid #ccc;
		}
	}
</style>