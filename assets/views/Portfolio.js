'use strict';

const Portfolio = Vue.extend({
    computed: {
        projects(){
            return this.$store.state.projects;
        }
    },

    methods: {
    },

    template: `
        <section id="portfolio" class="block">
            <card-block v-for="(project, i) in projects"
                :key="i"
                :slug="project.slug"
            >
                <async-image v-if="project.thumbnail" :src="project.thumbnail"></async-image>
                <h4 slot="title">{{ project.name }}</h4>
            </card-block>
        </section>
    `
});
