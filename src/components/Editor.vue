<template>
	<div class="editor">
		<Topbar></Topbar>
		<div class="resumer">
			<ResumeEdit class="resumeLeft" v-bind:resumer="data.resumer"></ResumeEdit>
			<ResumePreview class="resumeRight"></ResumePreview>
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
		}
	}
</script>
<style lang="scss">
	.resumer {
		display: flex;

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