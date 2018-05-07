<template>
	<div class="topbar">
		<h2>RESUMER</h2>
		<div class="nav">
			<router-link to="/login"><button>登陆</button></router-link>
			<router-link to="/signup"><button>注册</button></router-link>
			<router-link to="/preview"><button>预览</button></router-link>
		</div>
	</div>
</template>
<script>
	
</script>
<style lang="scss">
	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #ccc;
	}
</style>