'use strict';

Vue.component('social-block', {
    computed: {
        links(){
            return this.$store.state.links;
        }
    },

	template: `
        <nav id="social-block">
            <a v-for="(link, index) in links"
                class="fa fa-lg"
                :class="link.icon"
                :href="link.url"
                target="_blank"
            >
            </a>
        </nav>
    `
});
