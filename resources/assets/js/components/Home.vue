<template>
<div>
	<div class="columns">
		<nav class="panel column is-8 is-offset-2">
		  <p class="panel-heading">
		    repositories <button class="button is-primary is-link is-outlined " @click="openAdd">
		      Add New
		    </button>
		  </p>
		  <div class="panel-block">
		    <p class="control has-icons-left">
		      <input class="input is-small" type="text" placeholder="search">
		      <span class="icon is-small is-left">
		        <i class="fa fa-search"></i>
		      </span>
		    </p>
		  </div>
	
		  <a class="panel-block is-active" v-for="item,key in lists">
	
		  	<span class="column is-9">{{ item.name }}</span>
		    <span class="has-text-danger panel-icon column is-1">
		      <i class="fa fa-trash"></i>
		    </span>
		    <span class=" has-text-primary panel-icon column is-1">
		      <i class="fa fa-edit"></i>
		    </span>
		    <span class="panel-icon column is-1">
		      <i class="fa fa-eye"></i>
		    </span>
		  </a>
	
		
		  
		</nav>
	</div>

	<add :openmodel="addActive" @closeRequest="close"></add>

</div>
</template>

<script>

  let Add = require('./Add.vue');

  export default{
    components: { Add },
    data(){
    	return {
    		addActive: '',
    		lists: [],
    		errors: {}
    	}
    },
    mounted(){
    	
    	axios.get('/phonebook')
		  .then(response => { 

		  	console.log(response.data);
		    this.lists = response.data
		    
		  })
		  .catch(function (error) {
		     console.log(error);
		  });
    },
    methods:{
    	openAdd(){
    		this.addActive = 'is-active';
    	},
    	close(){
    		this.addActive = '';
    	}
    }
  }
</script>