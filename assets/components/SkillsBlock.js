'use strict';

Vue.component('skills-block', {
    computed: {
        skills(){
            return this.$store.state.profile.skills;
        }
    },

    template: `
        <article id="skills">
            <rating-radial v-for="(skill, i) in skills"
                :data="skill.entries"
                :key="i"
            >
                <h3>{{ skill.name }}</h3>
            </rating-radial>
        </article>
    `
});

Vue.component('rating-radial', {
    props: {
        data: Array 
    },

    data(){
        return {
            colors: [
                '#1e73be',
                '#870cd8',
                '#d81c02',
                '#d8a302',
                '#3cd80c',
                '#1816cb',
                '#17c3d5'
            ],
            svg: null,
            width: null,
            height: null,
            radius: null,
            arc: null,
            arcs: null,
            labels: null,
            transition: null,
            caption: null
        };
    },

    computed: {
        element(){
            return d3.select(this.$el);
        },
        ratings(){
            return R.pluck('rating')(this.data);
        },
        names(){
            return R.pluck('name')(this.data);
        }
    },

    methods: {
        others(index){
            return R.remove(index, 1);
        },

        ratingToEndAngle(r){
            return (r * Math.PI) / 50;
        },

        drawArc(d, i){
            return this.svg.append('path')
                .attr('class', 'arc')
                .attr('d', this.arc(d))
                .attr('stroke-dashoffset', 2000)
                .transition()
                .ease(d3.easeCubicIn)
                .duration(300 * (i + 1))
                .delay(300)
                .attr('stroke-dashoffset', 0)
                .attr('stroke', this.colors[i%this.colors.length])
                .selection();
        },

        drawLabel(d, i){
            const label = this.caption
                .append('p')
                .attr('class', 'label');

            label.append('span')
                .style('background-color', this.colors[ i % this.colors.length]);

            label.append('span')
                .text(d.name);

            return label;
        },

        fadeOutOthers(index){
            const fadeOut = a => a.transition()
                    .duration(0)
                    .attr('stroke-dashoffset', 2000);

            const fadeIn = a => a.transition()
                .ease(d3.easeQuadInOut)
                .duration(1000)
                .attr('stroke-dashoffset', 0);

            return () => this.others(index)(this.arcs).map(
                a => a.classed('hidden', true)
            );
        },

        fadeInOthers(index){
            return () => this.others(index)(this.arcs).map(
                a => a.classed('hidden', false)
            );
        },

        highlightLabel(index){
            return () => this.others(index)(this.labels).map( l => l.classed('transparent', true)
            );
        },

        unhighlightLabel(index){
            return () => this.others(index)(this.labels).map(
                    l => l.classed('transparent', false)
            );
        },

        isNotEqualToIndex(index){
            return (a, i) => i !== index;
        },

        setup(){
            this.width = parseInt(this.element.style('width'));
            this.height = parseInt(this.element.style('height'));
            this.radius = Math.min(this.width, this.height) * 0.5;
            this.arc = d3.arc()
                .outerRadius(this.radius - 30)
                .innerRadius(this.radius - 30);

            this.svg = this.element 
                .append('svg')
                .attr('width', this.width)
                .attr('height', this.height)
                .append('g')
                .attr('transform', `translate(${this.width*0.5}, ${this.height*0.5})`);

            this.svg.append('path')
                .attr('class', 'ring')
                .attr('d', this.arc({
                    startAngle: 0,
                    endAngle: 2 * Math.PI
                }));

            this.caption = this.element
                .append('figcaption');
        },

        render(){
           this.arcs = d3.pie()(this.ratings)
                .sort()
                .map(this.drawArc);
           this.labels = this.data.map(this.drawLabel);
        }
    },

    mounted(){
        this.setup();
        this.render();

        this.labels.map( (l, i) =>
            l.on('mouseenter', this.fadeOutOthers(i))
            .on('mouseleave', this.fadeInOthers(i))
        );

        this.arcs.map( (a, i) =>
            a.on('mouseenter', this.highlightLabel(i))
                .on('mouseleave', this.unhighlightLabel(i))
        );
    },

    template: `
        <figure class="skill">
            <slot></slot>
        </figure>
    `
});
