'use strict';

Vue.component('slideshow-event-container', {
    props: {
        index: {
            type: Number,
            default: 0
        },

        color: {
            type: String,
            default: "black"
        },

        next: Function,
        prev: Function,
        click: Function,
        interval: {
            type: Number,
            default: 0
        },

        keys: {
            type: Boolean,
            default: false 
        }
    },

    data(){
        return {
            metronome: null,
            lastTick: null,
            delta: null,

            isLeftArrowActive: false,
            isRightArrowActive: false,
        };
    },

    mounted(){
        if(this.keys){
            window.addEventListener("keydown", this.onArrow);
        }

        var handler = new Hammer(this.$el);
        handler.on('swipeleft', e => this.next());
        handler.on('swiperight', e => this.prev());

        this.createMetronome(this.interval, this.next);
    },

    beforeDestroy(){
        if(this.keys){
            window.removeEventListener("keydown", this.onArrow);
        }

        this.destroyMetronome();
    },

    methods: Object.assign(
        {
            onArrow(e){
                switch(e.key){
                    case "ArrowLeft":
                        this.prev();
                        break;
                    case "ArrowRight":
                        this.next();
                        break;
                    default:
                        break;
                }
            },

            activateLeftArrow(){
                this.isLeftArrowActive = true;
                this.destroyMetronome();
            },
            deactivateLeftArrow(){
                this.isLeftArrowActive = false;
                this.createMetronome(this.interval, this.prev);
            },
            activateRightArrow(){
                this.isRightArrowActive = true;
                this.destroyMetronome();
            },
            deactivateRightArrow(){
                this.isRightArrowActive = false;
                this.createMetronome(this.interval, this.next);
            },

            createMetronome(interval, f){
                if(!this.interval) return;

                const tick = now => {
                    //console.log(now);
                    if(!this.lastTick){
                        this.lastTick = now;
                    }

                    this.delta = now - this.lastTick;

                    if(this.delta > this.interval){
                        f();

                        this.lastTick = now;
                    }

                    this.metronome = requestAnimationFrame(tick);
                }

                this.metronome = requestAnimationFrame(tick); 
            },

            destroyMetronome(){
                if(!this.interval) return;

                cancelAnimationFrame(this.metronome);
                this.lastTick = null;
            }
        },

        Vuex.mapMutations([
            'changeColor'
        ]),

        Vuex.mapActions([
            'reset'
        ])
    ),

    template: `
          <div class="event-container color-fade">
                <div class="event-area"
                    v-on="{ click: prev, mouseenter: activateLeftArrow, mouseleave: deactivateLeftArrow }"
                >
                    <div class="arrow"
                        :class="{ active: isLeftArrowActive }"
                    >
                        <i class="fa fa-5x fa-angle-left"
                            :class="{ active: isLeftArrowActive }"
                            :style="{ color: color }"
                        >
                        </i>
                    </div>
                </div>
                <div class="event-area"
                    @click="click"
                ></div>
                <div class="event-area"
                    v-on="{ click: next, mouseenter: activateRightArrow, mouseleave: deactivateRightArrow }"
                >
                    <div class="arrow"
                        :class="{ active: isRightArrowActive }"
                    >
                        <i class="fa fa-5x fa-angle-right"
                            :class="{ active: isRightArrowActive }"
                            :style="{ color: color }"
                        >
                        </i>
                    </div>
                </div>
            </div>
    `
});
