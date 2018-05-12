<template>
	<div class="topbarWrap">
		<div class="topbar" v-bind:class="{ 'active': isActive }">
			<h2>RESUMER</h2>
			<p>hello</p>
			<div class="nav">
				<router-link to="/preview"><button>预览</button></router-link>
				<router-link to="/preview"><button v-on:click="userSave()">保存</button></router-link>
				<router-link to="/login"><button>退出</button></router-link>
			</div>
		</div>
		<div class="topbar" v-bind:class="{ 'active': !isActive }">
			<h2>RESUMER</h2>
			<div class="nav">
				<router-link to="/login"><button>登陆</button></router-link>
				<router-link to="/signup"><button>注册</button></router-link>
				<router-link to="/preview"><button>预览</button></router-link>
				<router-link to="/preview"><button v-on:click="userSave()">保存</button></router-link>
			</div>
		</div>
		<button v-on:click="userSave()">save</button>	
	</div>
</template>
<script>
	export default {
		props: ['userMsg'],
		data(){
			return {
				isActive: this.userMsg.lock
			}
		},
		methods: {
			userSave: function(){
				console.log(123)
			}
		}
	}
</script>
<style lang="scss">
	.topbar.active {
		display: flex;
	}
	.topbar {
		display: none;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
	}
</style>