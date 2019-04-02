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
        }]
    },
    // O opcjach webpacka najlepiej poczytać w dokumentacji
    // To poniżej jest do mapowania błędów
    devtool: 'cheap-module-eval-source-map',
    // devServer
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

// UWAGA! Pamiętaj, żeby restartować webpacka po wrpwoadzonych zmianach bo się wyjebie!