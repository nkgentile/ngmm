'use strict';

const About = Vue.extend({
    computed: {
        profile(){
            return this.$store.state.profile;
        }
    },

    template: `
        <section id="about">
            <section id="headshot">
                <img src="assets/images/originals/headshot.jpg"/>
            </section>
            <article id="profile" v-html="profile.bio"></article>
            <skills-block id="skills"></skills-block>
        </section>
    `
});
