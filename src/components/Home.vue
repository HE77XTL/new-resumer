<template>
	<div class="home">
		<h2>
			Welcome to Resumer
		</h2>
		<p>
			<router-link to="/editor" class="buildNew">create a new resume</router-link>
		</p>
		<div class="nav">
			<router-link to="/login" class="btn">登陆</router-link>
			<router-link to="/signup" class="btn">注册</router-link>
		</div>

	</div>
</template>
<script>
	export default {
		created(){
			// console.log(this.$route.path)
		}
	}
</script>

<style lang="scss" scoped>
	.home {
		text-align: center;
		padding-top: 80px;

		h2 {
			font-size: 30px;
		}
		p {
			padding: 10px;
		}
		.nav {
			letter-spacing: 7px;
		}
		.btn {
			border: 1px solid #ccc;
			font-size: 16px;
			line-height: 32px;
			padding: 4px 8px;
			letter-spacing: 0;
			border-radius: 20px;
		}
	}
	
</style>
