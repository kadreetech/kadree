// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import hero from './components/hero'
import button from './components/button'
import color from './components/color'
import richtext from './components/richtext'
import section from './components/section'
import regularimage from './components/regularimage'
import menu from './components/menu'
import footer from './components/footer'
import address from './components/address'
import link from './components/link'
import stepsgraphic from './components/stepsgraphic'
import stepsgraphics from './components/stepsgraphics'
import testimonials from './components/testimonials'
import testimonial from './components/testimonial'
import mainform from './components/mainform'
import cta from './components/cta'
import iconcard from './components/cards/iconcard'
import textcard from './components/cards/textcard'
import imagecard from './components/cards/imagecard'
import setting from './settings/setting'
import termsAndConditions from './termsAndConditions/termsAndConditions'
import home from './home'
import page from './page'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    color,
    iconcard,
    imagecard,
    cta,
    textcard,
    richtext,
    section,
    testimonials,
    testimonial,
    mainform,
    link,
    menu,
    footer,
    regularimage,
    stepsgraphics,
    stepsgraphic,
    hero,
    button,
    home,
    page,
    setting,
    termsAndConditions,
    address
  ]),
})
