<template>
	<div class="resumePreview">
		<h2>RESUME</h2>
		<div class="profile">
			<table>
				<tbody>
					<tr class="rowsPro">
						<td>姓名:</td>
						<td>{{resumer.profile.name[0]}}</td>
						<td>电话:</td>
						<td>{{resumer.profile.phone[0]}}</td>
					</tr>
					<tr class="rowsPro">
						<td>邮箱:</td>
						<td>{{resumer.profile.email[0]}}</td>
						<td>学校:</td>
						<td>{{resumer.profile.school[0]}}</td>
					</tr>
					<tr class="rowsPro">
						<td>学历:</td>
						<td>{{resumer.profile.degree[0]}}</td>
						<td>专业:</td>
						<td>{{resumer.profile.major[0]}}</td>
					</tr>
				</tbody>
			</table>			
		</div>
		<hr>
		<div class="jobIntend">
			<tr>
				<td>意向岗位: {{resumer.jobIntend.intendPost}}</td>
				<td>意向城市: {{resumer.jobIntend.intendCity}}</td>
				<td>职业类型: {{resumer.jobIntend.jobType}}</td>
			</tr>			
		</div>
		<div class="experience">
			<div class="item" v-for="item in resumer.experience">
				<h3><span>公司名称：</span>{{item.compony}}</h3>
				<p>工作内容</p>
				<div class="workContent">
					<p>{{item.workContent}}</p>
				</div>
			</div>
		</div>
		<div class="skill">
			<ul>
				<li v-for="item in resumer.skill"><span>技能：</span>{{item.skill}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['resumer']
	}
</script>

<style lang="scss">
	.resumePreview{
		padding: 5px 10px;
		font-size: 14px;
		padding-left: 20px;
		margin-left: 20px;
		border:solid #ccc;
		border-width: 0 0 0 2px;
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
				width: 160px;
			}
			td:nth-child(odd){
				width: 40px;
			}
			
		}
	}
	.jobIntend {
		padding: 20px 0;
		tr {
			td {
				font-size: 14px;
				line-height: 30px;
				width: 150px;
				padding-right: 8px;
				word-wrap: normal;
				word-break:break-all;
			}
						
		}
	}
	.experience {
		word-wrap: normal;
		word-break:break-all;
		h3 {
			padding-bottom: 16px;

		}
		.workContent {
			margin-top: 8px;
			width: 400px;
			min-height: 100px;
			border: 1px solid #ccc;
			padding: 4px;
			line-height:20px;
			text-indent: 2em;
		}
	}
	.skill {
		padding-top: 32px;
		ul {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				padding: 8px 0;
			}
		}
	}
</style>