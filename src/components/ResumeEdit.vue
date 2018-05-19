<template>
	<div class="resumeEdit">
		<div class="navTab">
			<ul>
				<li v-bind:class="{ active: navData.isActive[index]}" v-for="(item,index) in navData.routers" v-on:click="changeNav(index)"><router-link :to="navData.routers[index]">
			        <svg class="icon" aria-hidden="true">
			            <use :xlink:href="navData.href[index]"></use>
			        </svg>					
				</router-link></li>
			</ul>
		</div>
		<router-view class="EditTemplate" v-bind:resumer="resumer"></router-view>
	</div>
</template>
<script>
	export default {
		props: ['resumer'],
		data(){
			return {

				navData: {
					routers: ["/editor/profile","/editor/jobintend","/editor/experience","/editor/skill"],
					href: ["#icon-profile","#icon-chaxunzhiwei","#icon-icexperience","#icon-qunfengxingquaihao"],
					isActive: [true,false,false,false]
				}
			}
		},
		methods: {
			changeNav: function(index){
				let _this = this
				console.log(index)
				this.navData.isActive.forEach(function(value,key){
					
					if(key == index){
						_this.navData.isActive[key] =true
					}else{
						_this.navData.isActive[key] = false
					}
				})

			}
		}
	}
</script>

<style lang="scss">
  .icon {
    width: 2em; height: 2em;
    fill: #FFF;
    overflow: hidden;
  }
	.resumeEdit {
		display: flex;
		
		.navTab {
			ul {
				background: #2b2424;
				padding: 7px;

			}
			li {
				margin: 10px 0;
				position: relative;
			}
			li.active::after {
				content: '';
				display: block;
				width: 15px;
				height: 15px;
				border: 1px solid #ccc;
				border-width: 0 0 1px 1px;
				position: absolute;
				top: 5px;
				right: -25px;
				transform: rotate(45deg);
				background: #fff;
			}
			
		}
		.EditTemplate {
			flex: 1;


		}
	}	
</style>