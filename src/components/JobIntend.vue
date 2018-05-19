<template>
<div>
	<div class="jobIntend">
		<div>
			<p>意向岗位</p>
			<input type="text" v-model="resumer.jobIntend.intendPost">		
		</div>
		<div>
			<p>意向城市</p>
			<input type="text" v-model="resumer.jobIntend.intendCity">		
		</div>
		<div id="jobChoose">
			<p>职业类型</p>
			<el-select v-model="resumer.jobIntend.jobType" placeholder="请选择">
			<el-option
			  v-for="item in options"
			  :key="item.value"
			  :label="item.label"
			  :value="item.value">
			</el-option>
			</el-select>	
		</div>
	</div>	
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

<style lang="scss" scoped>
	.jobIntend {
		padding-left: 30px;
		border: 1px solid #ccc;
		margin-left: 10px;
		border-radius: 4px;
		padding-top: 5px;
		div {
			padding-bottom: 32px;
			position: relative;
		}
		p {
			font-size: 14px;
			line-height: 20px;
			padding-bottom: 4px;
		}
		input {
			outline: none;
			border: none;
			border-bottom: 1px solid #ccc;
			font-size: 14px;
			line-height: 20px;
			width: 215px;
			border-radius: 0;
		}
	}
</style>