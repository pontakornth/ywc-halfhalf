module.exports = {
    purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
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
