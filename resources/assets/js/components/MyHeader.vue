<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <a class="navbar-item" href="https://bulma.io">
	      <strong>Laravue Phonebook</strong>
	    </a>

		<router-link class="navbar-item" to="/home">Home</router-link>
    	<router-link class="navbar-item" to="/about">About</router-link>

	    <div class="navbar-burger">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>
	</nav>
</template>