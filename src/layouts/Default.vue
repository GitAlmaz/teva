<template>
	<div>
		<Header />
		<router-view />
		<Footer />
	</div>
</template>

<script>
import Header from "../components/modules/Header.vue";
import Footer from "../components/modules/Footer.vue";

export default {
	components: {
		Header,
		Footer
	}
};
</script>