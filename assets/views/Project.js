'use strict';

const Project = Vue.extend({
    beforeRouteEnter(to, from, next){
        next();
    },

    beforeRouteUpdate(to, from, next){
        next();
    },

    computed: {
        slug(){
            return this.$route.params.name;
        },

        project(){
            return R.find(
                R.propEq('slug', this.slug)
            )(this.$store.state.projects);
        }
    },

    template: `
        <section id="project">
            <hero-banner :image="project.hero">
                <h1>{{ project.name }}</h1>
                <h4>
                    <a :href="project.url">{{ project.url }}
                    <i class="fa fa-external-link" aria-hidden="true"></i>
                    </a>
                </h4>
            </hero-banner>
            <case-study :images="project.images">
                <ul slot="goals" v-html="project.goals"></ul>
                <div slot="problem" v-html="project.problem"></div>
                <div slot="solution" v-html="project.solution"></div>

            </case-study>
        </section>
    `
});
