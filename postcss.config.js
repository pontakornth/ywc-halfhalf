const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
// const purgecss = require('purgecss')

// const isProduction = process.env.NODE_ENV == 'production'

module.exports = {
    plugins: [
        tailwindcss(),
        autoprefixer(),
        // isProduction && purgecss()
    ]
}
