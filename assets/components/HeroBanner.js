'use strict';

Vue.component('hero-banner', {
    props: {
        image: String
    },

    template: `
        <header class="hero-banner">
            <img :src="image" />
            <slot></slot>
        </header>
    `
});
