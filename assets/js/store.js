'use strict';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        routes: [
            {
                name: 'Home',
                path: '/'
            },
            {
                name: 'About',
                path: '/about'
            },
            {
                name: 'Projects',
                path: '/projects'
            }
        ],

        links: [
            {
                icon: 'fa-linkedin',
                url: 'https://www.linkedin.com/in/nkgentile'
            },
            {
                icon: 'fa-twitter',
                url: 'https://twitter.com/nkgentile'
            },
            {
                icon: 'fa-reddit-alien',
                url: 'https://www.reddit.com/user/nkgentile/'
            },

            {
                icon: 'fa-github-alt',
                url: 'https://github.com/nkgentile'
            },
            {
                icon: 'fa-tumblr',
                url: ''
            }
        ],

        projects: [
            {
                name: 'Quick Start Strategies',
                url: 'http://www.qsstrategies.com',
                slug: 'qss',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w',
                thumbnail: 'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w',
                images: [
                	'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w',
                	'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w',
                	'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w',
                	'https://static1.squarespace.com/static/551b5bd3e4b072084062613f/t/57e96f25414fb512c5c26c2b/1474916136968/homepagemarquee.jpg?format=2500w'
                ]
            },
            {
                name: 'The Tomorrow Group',
                url: 'http://www.thetomorrowgroup.com',
                slug: 'the-tomorrow-group',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://thetomorrowgroup.com/wp-content/uploads/2017/04/cropped-pexels-photo-245618-2.jpeg',
                thumbnail: 'http://thetomorrowgroup.com/wp-content/uploads/2017/04/cropped-pexels-photo-245618-2.jpeg'
            },
            {
                name: 'Good Boy Media',
                url: 'http://gdbym.com',
                slug: 'gdbym',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://gdbym.com/assets/thumbs/D.R.A.M---Cha-Cha.jpg',
                thumbnail: 'http://gdbym.com/assets/thumbs/D.R.A.M---Cha-Cha.jpg'
            },
            {
                name: 'Ivan Olita',
                url: 'http://ivanolita.com',
                slug: 'ivan-olita',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://ivanolita.com/wp-content/uploads/2016/03/THE1000DAYS.jpg',
                thumbnail: 'http://ivanolita.com/wp-content/uploads/2016/03/THE1000DAYS.jpg'
            },
            {
                name: 'Jacopo Moschin',
                url: 'https://www.jacopomoschin.com',
                slug: 'jacopo-moschin',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'https://static1.squarespace.com/static/5803859920099e2af76d979a/580388d52994ca4ac20d63fc/58055731f7e0ab69aef908a4/1479324953169/6color.jpg?format=2500w',
                thumbnail: 'https://static1.squarespace.com/static/5803859920099e2af76d979a/580388d52994ca4ac20d63fc/58055731f7e0ab69aef908a4/1479324953169/6color.jpg?format=2500w'
            },
            {
                name: 'Ryan Hughes',
                url: 'http://ryanhugh.es',
                slug: 'ryan-hughes',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://ryanhugh.es/assets/img/Hughes,%20Form%20Model%20Cover.jpg',
                thumbnail: 'http://ryanhugh.es/assets/img/Hughes,%20Form%20Model%20Cover.jpg'
            },
            {
                name: 'Peter Root',
                url: 'http://www.peterrroot.com',
                slug: 'peter-root',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://www.peterrroot.com/wp-content/uploads/2017/09/IMG_4679-768x868.jpg',
                thumbnail: 'http://www.peterrroot.com/wp-content/uploads/2017/09/IMG_4679-768x868.jpg'
            },
            {
                name: 'Ralph Gentile Architects',
                url: 'http://rgastudio.com',
                slug: 'rga',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'http://rgastudio.com/files/project_images/RGA_Vespaio_Jun10_15-23724.jpg',
                thumbnail: 'http://rgastudio.com/files/project_images/RGA_Vespaio_Jun10_15-23724.jpg'
            },
            {
                name: 'UTC-00',
                url: '',
                slug: 'utc-00',
				goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'assets/images/thumbnails/utc00.jpg',
                thumbnail: 'assets/images/thumbnails/utc00.jpg'
            },
            {
                name: 'CONTNT',
                url: '',
                slug: 'contnt',
                goals: '<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Vestibulum a tellus sed enim congue varius at ut sem.</li><li>Praesent faucibus elit id dictum scelerisque.</li><li>Nunc ullamcorper diam bibendum lorem ornare, a vestibulum metus varius.</li><li>Duis quis enim scelerisque, mollis orci sit amet, dignissim urna.</li>',
				problem: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
				solution: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla dui in ligula gravida lacinia non id nibh. Curabitur quam enim, volutpat at mauris eget, feugiat vestibulum mi. Nulla sit amet molestie ex. Integer tellus nisi, gravida nec lacinia sed, pretium ut leo. Phasellus non orci ac arcu dictum cursus. Maecenas pharetra, ligula volutpat dapibus suscipit, erat leo maximus tellus, eget efficitur quam lectus sed sem. Proin varius venenatis odio sed porttitor. Sed orci dui, commodo eu sapien a, rutrum bibendum augue. Sed fringilla, massa eu convallis posuere, sem felis scelerisque odio, porttitor egestas ex ipsum a sem. Cras interdum risus ac odio tincidunt luctus.</p><p>Duis sagittis, quam id tincidunt luctus, mi ligula faucibus dui, sit amet rhoncus neque nisi vel quam. Donec porta faucibus ex ac pellentesque. Proin sem leo, efficitur non varius quis, mattis a ante. Maecenas faucibus sapien sed erat volutpat eleifend. Ut tristique condimentum est, id ultrices dui ullamcorper ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum sit amet magna eu condimentum.</p><p>Nulla orci neque, euismod non tincidunt quis, tincidunt quis mi. Praesent eu urna in velit varius ultrices. Nunc facilisis lacus eget finibus suscipit. Praesent lacinia ut elit ac auctor. Sed mauris.</p>',
                hero: 'assets/images/thumbnails/contnt.jpg',
                thumbnail: 'assets/images/thumbnails/contnt.jpg'
            }
        ],

        profile: {
            bio: '<section><h3>Strengths</h3><ul><li>Levelheaded attitude paired with an efficient, mild manner.</li><li>Strong technical background and knowledge base.</li><li>Able to effectively troubleshoot in high-stress situations.</li><li>Enthusiastic and strong willingness to listen and learn.</li></ul><h3>Development</h3><ul><li>Inexhaustible love for the art of programming.</li><li>Keen emphasis on clean, reusable, efficient, robust code.</li><li>Proficient with HTML5, Javascript, PHP.</li></ul><h3>Photography</h3><ul><li>Proficient knowledge of production and post-production imaging workflows for both commercial and fine art settings.</li><li>Extensive, tactile understanding of imaging software and photography equipment.</li></ul></section><section><h3>Summary</h5><p>My name is Noah Gentile and I am a full-stack developer looking for employment opportunities in Princeton.</p><p>Working as a freelance web developer requires that I run the gamut of web application development: compositing Illustrator mockups, planning database schemas, interfacing with UNIX systems, building out Wordpress themes. Each new project is a chance to both refine and broaden my skill set.</p><p>I hope to join a development team that is engaged in building composed, accessible, open-source web applications. Furthermore, I am eager for mentorship from lead developers and peers alike.</p><p>I deliver maintainable custom solutions for my clients, and I firmly believe that my diverse technological knowledge is a complement to any team.</p><p>I look forward to further discussing your needs.</p></section>',
            skills: [
				{
					name: 'Languages',
					entries: [
						{ name: 'HTML', rating: 100 },
						{ name: 'Javascript', rating: 100 },
						{ name: 'CSS', rating: 100 },
						{ name: 'SQL', rating: 60 },
						{ name: 'PHP', rating: 60 },
						{ name: 'Bash', rating: 45 },
						{ name: 'Swift', rating: 10 }
					]
				},
				{
					name: 'Libraries',
					entries: [
						{ name: 'Underscore.js', rating: 80 },
						{ name: 'RxJS', rating: 60 },
						{ name: 'three.js', rating: 45 },
						{ name: 'Ramda.js', rating: 40 },
						{ name: 'D3.js', rating: 25 },
						{ name: 'Chai.js', rating: 10 }
					]
				},
				{
					name: 'Frameworks',
					entries: [
						{ name: 'Wordpress', rating: 70 },
						{ name: 'Vue.js', rating: 65 },
						{ name: 'React', rating: 50 },
						{ name: 'Drupal', rating: 45 },
						{ name: 'Backbone.js', rating: 40 },
						{ name: 'Express.js', rating: 25 },
						{ name: 'Mocha.js', rating: 20 }
					]
				},
				{
					name: 'Tools',
					entries: [
						{ name: 'Chrome Developer Tools', rating: 90 },
						{ name: 'Adobe CC', rating: 85 },
						{ name: 'Git', rating: 80 },
						{ name: 'Vim', rating: 75 },
						{ name: 'Google Cloud Platform', rating: 70 },
						{ name: 'MySQL Workbench', rating: 60 },
						{ name: 'Unix Terminal', rating: 50 }
					]
				}
			]
        }
    },

    getters: {
    },

    mutations: {
    },

    actions: {
    }
});
