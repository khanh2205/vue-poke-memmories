<template>
	<div class="copyright">
		<p>
			This game owend by Khánh Hoàng in Vue 3 course for begginers - 
			<a href="http://cv-me.herokuapp.com">View here</a>
		</p>
	</div>
</template>

<style lang="css" scoped>
	.copyright {
		position: fixed;
		left: 30%;
		transform: translateY(-50%);
		bottom: -0.5rem;
		color: var(--light);
		z-index: 3;
		font-size: 1.5rem;
	}
	.copyright a {
		color: #f4dc26
	}
</style>