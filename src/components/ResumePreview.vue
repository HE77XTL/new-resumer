<template>
	<div class="resumePreview">
		<h2>RESUME</h2>
		<div class="profile">
			<table>
				<tbody>
					<tr>
						<td>姓名:</td>
						<td>{{resumer.profile.name[0]}}</td>
						<td>电话:</td>
						<td>{{resumer.profile.phone[0]}}</td>
					</tr>
					<tr>
						<td>邮箱:</td>
						<td>{{resumer.profile.email[0]}}</td>
						<td>学校:</td>
						<td>{{resumer.profile.school[0]}}</td>
					</tr>
					<tr>
						<td>学历:</td>
						<td>{{resumer.profile.degree[0]}}</td>
						<td>专业:</td>
						<td>{{resumer.profile.major[0]}}</td>
					</tr>
				</tbody>
			</table>			
		</div>
		<div class="jobIntend">
			<tr>
				<td>意向岗位: <span>{{resumer.jobIntend.intendPost}}</span></td>
				<td>意向城市: <span>{{resumer.jobIntend.intendCity}}</span></td>
				<td>职业类型: <span>{{resumer.jobIntend.jobType}}</span></td>
			</tr>			
		</div>
		<div class="experience">
			<div class="item" v-for="item in resumer.experience">
				<h3>{{item.compony}}</h3>
				<textarea name="" id="" cols="30" rows="10" v-model="item.workContent"></textarea>
			</div>
		</div>
		<div class="skill">
			<ul>
				<li v-for="item in resumer.skill">{{item.skill}}</li>
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
	.profile {
		tr {
			td {
				align: left;
				border: 1px solid #ccc;
			}			
		}
	}
</style>