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
			<el-select v-model="resumer.jobIntend.jobType" placeholder="请选择">
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
	          value: '全职',
	          label: '全职'
	        }, {
	          value: '兼职',
	          label: '兼职'
	        }, {
	          value: '实习',
	          label: '实习'
	        }],
	        value: this.resumer.jobIntend.jobType
	      }
	    }
	}
</script>