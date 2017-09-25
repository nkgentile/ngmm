"use strict";

Vue.component('navigation-block', {
    computed: {
        routes(){
            return this.$store.state.routes;
        }
    },

	template: `
        <nav id="navigation-block">
            <router-link v-for="(route, index) in routes"
                :to="route.path"
                :key="index"
            >{{ route.name }}</router-link>
        </nav>
    `
});
