<template>
	<div class="editor">
		<div class="topBar">
			<h2>RESUMER</h2>
			<p>hello {{data.userMsg.userName}}</p>
			<router-link to="/login" v-show="data.userMsg.notLogin">
				<button class="login btn">登陆</button>
			</router-link>
			<router-link to="/signup" v-show="data.userMsg.notLogin">
				<button class="signup btn">注册</button>
			</router-link>
			<router-link to="/preview">
				<button class="preview btn">预览</button>
			</router-link>
			<button class="save btn" v-on:click="saveData()">保存</button>	
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
<style lang="scss" scoped>
//导航栏
.editor {
	
	min-width: 800px;
	.topBar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 5px;
		h2 {
			flex: 3;
		}
		p {
			flex: 1;
			text-align: center;
		}
		.btn {
			padding: 5px;
			outline: none;
			border: none;
			border-radius: 4px;
			margin-left: 4px;
			cursor: pointer;
			background-color: rgb(233,233,233);
		}

	}
}

//编辑框
.resumer {
	padding: 10px;
	border: 1px solid #ccc;
	display: flex;
	width: 100%;
	padding-top: 16px;
	border-radius: 5px;
	}
	.resumeLeft {
		width: 40%;
		position:relative;

		// &::after {
		// display: block;
		// content: '';
		// position: absolute;
		// width: 2px;
		// height: 200px;
		// background: #ccc;
		// top: 20px;
		// right: -15px;
		// }
	.resumeRight {
		margin-left: 20px;
		width: 60%;
		border: 1px solid #ccc;
		margin-left: 20px;
		border-radius: 4px;
	}
}
</style>