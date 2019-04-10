// Ten plik musi być w ścieżce gdzie jest aplikacja (root folder)

// entry -> output (must have)

// __dirname - zawiera ścieżkę do aktualnej pozycji
console.log(__dirname);

// Do uzyskania całkowitej ścieżki wyjściowej, użyjemy __dirname i modułu path i metody join dostępnej w 'path'
const path = require('path');
console.log(path.join(__dirname, 'public'));

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        // Do css'a (css-loader i style-loader)
        // yarn add style-loader@0.18.2 css-loader@0.28.4
        {
            // yarn add sass-loader@6.0.6 node-sass@4.5.3
            // poniższy test załaduje i css i scss
            test: /\.s?css$/,
            // use pozwala odpalić kilka laoderów
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // O opcjach webpacka najlepiej poczytać w dokumentacji
    // To poniżej jest do mapowania błędów
    devtool: 'cheap-module-eval-source-map',
    // devServer
    devServer: {
        contentBase: path.join(__dirname, 'public'),

        // To jest po to żeby nam nie wyskakiwał "cannot get" w innych podstronach, (do wszystkich 404, zaserwuje nam index.html)
        historyApiFallback: true
    }
};

// UWAGA! Pamiętaj, żeby restartować webpacka po wrpwoadzonych zmianach bo się wyjebie!