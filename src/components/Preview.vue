<template>
<div class="previewWrap">
	<div class="preview">
		<h2>RESUME</h2>
		<div class="profile">
			<table>
				<tbody>
					<tr class="rowsPro">
						<td>姓名:</td>
						<td>{{data.resumer.profile.name[0]}}</td>
						<td>电话:</td>
						<td>{{data.resumer.profile.phone[0]}}</td>
					</tr>
					<tr class="rowsPro">
						<td>邮箱:</td>
						<td>{{data.resumer.profile.email[0]}}</td>
						<td>学校:</td>
						<td>{{data.resumer.profile.school[0]}}</td>
					</tr>
					<tr class="rowsPro">
						<td>学历:</td>
						<td>{{data.resumer.profile.degree[0]}}</td>
						<td>专业:</td>
						<td>{{data.resumer.profile.major[0]}}</td>
					</tr>
				</tbody>
			</table>			
		</div>
		<hr>
		<div class="jobIntend">
			<p>意向岗位: {{data.resumer.jobIntend.intendPost}}</p>
			<p>意向城市: {{data.resumer.jobIntend.intendCity}}</p>
			<p>职业类型: {{data.resumer.jobIntend.jobType}}</p>		
		</div>
		<hr>
		<div class="experience">
			<h3>工作经历</h3>
			<div class="item" v-for="item in data.resumer.experience">
				<p><span>公司名称：</span>{{item.compony}}</p>
				<p>工作内容：</p>
				<div class="workContent">
					<p>{{item.workContent}}</p>
				</div>
			</div>
		</div>
		<hr>
		<div class="skill">
			<ul>
				<li v-for="item in data.resumer.skill"><span>技能：</span>{{item.skill}}</li>
			</ul>
		</div>
	</div>	
	<router-link to="/editor" class="returnBack">返回</router-link>
</div>

</template>

<script>
	export default {
		props: ['data'],

	}
</script>

<style lang="scss" scoped>
	.previewWrap {
		width: 794px;
		min-height: 1123px;
		margin: 32px auto;
		display: flex;
		flex-direction: column;
		position: relative;

	}
	.preview{
		flex: 1;
		padding: 45px 60px;
		font-size: 16px;
		display: flex;
		flex-direction: column;
		box-shadow: -2px 2px 4px 3px #ccc;

	}
	.profile {
		tr {
			td {
				font-size: 14px;
				line-height: 30px;
				// border: 1px solid #ccc;
			}			
		}
		.rowsPro {
			padding: 5px 0;
			td:nth-child(even){
				width: 200px;
			}
			td:nth-child(odd){
				width: 40px;
			}
			
		}
	}
	.jobIntend {
		padding: 20px 0;
		display:flex;
		p {
			max-width: 200px;
			margin-right: 60px;
			position: relative;
			padding-left: 16px;
			&::after {
				display: block;
				content: '';
				position: absolute;
				width: 2px;
				height: 26px;
				background: #ccc;
				top: -3px;
				left: 0;
			}
		}
	}
	.experience {
		word-wrap: normal;
		word-break:break-all;
		flex: 2;
		.item {

		}
		h3 {
			padding: 16px 0;

		}
		p {
			line-height: 24px;
		}
		.workContent {
			margin-bottom: 8px;
			min-width: 480px;
			min-height: 200px;
			border: 1px solid #ccc;
			padding: 4px;
			line-height:20px;
			text-indent: 2em;
		}
	}
	.skill {
		padding-top: 32px;
		flex: 1;
		ul {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				padding: 8px 0;
			}
		}
	}
	.returnBack {
		position: absolute;
		right:20px;
		top: 20px;
		padding: 5px;
		border: 1px solid #ccc;
		border-radius: 6px;
		background: rgba(7,7,7,0.1)
	}
</style>