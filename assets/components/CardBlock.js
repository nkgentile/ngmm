'use strict';

Vue.component('card-block', {
    props: {
        slug: String 
    },

    template: `
        <router-link :to="slug" tag="figure" class="card" append>
            <slot></slot>
            <figcaption>
                <slot name="title"></slot>
                <slot name="caption"></slot>
            </figcaption>
        </router-link>
    `
});
