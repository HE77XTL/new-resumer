<template>
	<div class="editor">
		<Topbar v-bind:userMsg="data.userMsg" v-on:newuser="newuser()"></Topbar>
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
		newuser: function(){
		      console.log('kkkjkj')
		      this.$emit('newuser')
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