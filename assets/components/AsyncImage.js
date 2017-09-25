'use strict';

Vue.component('async-image', {
    props: {
        src: String
    },

    created(){
        this.image.addEventListener('load', this.onLoad);
        this.image.src = this.src;
    },

    methods: {
        onLoad(){
            this.style.opacity = 1;
            this.image.removeEventListener('load', this.onLoad);
        }
    },

    data(){
        return {
            image: new Image(),
            style: {
                opacity: 0,
                transition: 'opacity 350ms ease-in-out'
            }
        }
    },

    template: `
        <img :src="src" :style="style"/>
    `
});
