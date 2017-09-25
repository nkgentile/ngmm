'use strict';

Vue.component('case-study', {
    props: {
        images: Array
    },

    template: `
        <article class="case-study">
            <aside>
                <h3>Goals</h3>
                <slot name="goals"></slot>
            </aside>
            <section>
                <h3>Problem</h3>
                <slot name="problem"></slot>
            </section>
            <section>
                <h3>Solution</h3>
                <slot name="solution"></slot>
            </section>
            <gallery-block :assets="images"></gallery-block>
        </article>
    `
});
