<template>
	<div class="topbarWrap">
		<div class="topbar" v-bind:class="{ 'active': isActive }">
			<h2>RESUMER</h2>
			<p>hello</p>
			<div class="nav">
				<router-link to="/preview"><button>预览</button></router-link>
				<router-link to="/"><button v-on:click="userQuit()">退出</button></router-link>
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
	</div>
</template>
<script>
import SaveData from '@/components/SaveData'
import AV from 'leancloud-storage'
	export default {
		props: ['userMsg'],
		components: {
			SaveData
		},
		data(){
			return {
				isActive: this.userMsg.lock
			}
		},
		methods: {
			userQuit: function(){
				console.log('qquit')
				AV.User.logOut();
				window.localStorage.clear()
				this.$emit('newuser')
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