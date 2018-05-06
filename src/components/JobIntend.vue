<template>
	<div class="jobIntend">
		<label for="">
			<p>意向岗位</p>
			<input type="text" v-model="resumer.jobIntend.intendPost">		
		</label>
		<label for="">
			<p>意向城市</p>
			<input type="text" v-model="resumer.jobIntend.intendCity">		
		</label>
		<label for="">
			<p>职业类型</p>
			<el-select v-model="value" placeholder="请选择">
			<el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
			</el-select>	
		</label>
	</div>
</template>
<script>
	export default {
		props:['resumer'],
	    data() {
	      return {
	        options: [{
	          value: '选项1',
	          label: '全职'
	        }, {
	          value: '选项2',
	          label: '兼职'
	        }, {
	          value: '选项3',
	          label: '实习'
	        }],
	        value: ''
	      }
	    }
	}
</script>