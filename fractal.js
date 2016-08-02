'use strict';

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Fractal Demo');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set('path',  __dirname + '/components');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', __dirname + '/docs');

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path',  __dirname + '/public');


fractal.components.set('default.preview', '@preview');
