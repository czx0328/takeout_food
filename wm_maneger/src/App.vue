<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style type="text/css">
	#app{
		overflow: hidden;
	}
	#app .main-container:nth-child(2){
		background-color: rgb(243, 228, 19);
	}
	.app-main{
		padding:1em;
		background-color: white;
	}
	.sidebar-logo-container[data-v-6494804b]{
		background-color: rgb(243, 228, 19) !important;
		border-bottom: 1px solid rgb(187, 42, 42);
		
	}
	.sidebar-logo-container .sidebar-logo-link .sidebar-title[data-v-6494804b] {
		color: #cf2e22 !important;
	}
	#app .sidebar-container {
		border-right: 1px solid rgb(216, 16, 16);
	}
</style>