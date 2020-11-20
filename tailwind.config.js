module.exports = {
    purge: {
    content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
    ],
    options: {
    defaultExtractor (content) {
        const contentWithoutStyleBlocks = content.replace(/<style[^]+?<\/style>/gi, '')
        return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    },
    safelist: [ /-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/, /data-v-.*/ ],
    
    }
  },
    theme: {
        extend: {
            fontFamily: {
                'sans': `"IBM Plex Sans Thai", sans-serif`
            },
            colors: {
                primary: "#283B7C",
                secondary: "#24C200",
                menu: "#A1A1A1",
                "text-gray": "#A4A4A4",
                "text-black": "#595959",
                "text-dark": "#444444"
            }
        }
    }
}
