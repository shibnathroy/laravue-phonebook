<template>
	<nav class="navbar" role="navigation" aria-label="main navigation">
	  <div class="navbar-brand">
	    <a class="navbar-item" href="https://bulma.io">
	      <strong>Laravue Phonebook</strong>
	    </a>

		<router-link class="navbar-item" to="/phonebook/home">Home</router-link>
    	<router-link class="navbar-item" to="/phonebook/about">About</router-link>

	    <div class="navbar-burger">
	      <span></span>
	      <span></span>
	      <span></span>
	    </div>
	  </div>
	</nav>
</template>