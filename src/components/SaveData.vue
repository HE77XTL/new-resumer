<template>
	<div class="saveData">
		<button v-on:click="saveData()">save</button>
	</div>
</template>

<script>

import AV from 'leancloud-storage'
	export default {
		props:['data'],
		methods: {
			saveData: function(){
				console.log(123)
				
			var json_data=JSON.stringify(this.data)
			// 第一个参数是 className，第二个参数是 objectId
			var resumer = AV.Object.createWithoutData('Resumer', this.data.userMsg.id);
			// 修改属性
			resumer.set('userData', json_data);
			// 保存到云端
			resumer.save();				
		}
		}
	}
</script>