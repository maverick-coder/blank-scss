const {src, dest, watch} = require('gulp');
const {init, stream, reload} = require('browser-sync').create();
const sass = require('gulp-sass');

const scssPath = 'app/scss/**/*.scss';
const htmlPath = 'app/**/*.html';
const jsPath = 'app/script/**/*.js';

const css = () => {
    return src(scssPath)
        .pipe(sass())
        .pipe(dest("app/css"))
        .pipe(stream());
};

const bsInit = () => {
    init({
        server: "./app"
    });
};

const bsReload = cb => {
    reload();
    cb();
};

const serve = () => {

    bsInit();

    watch([scssPath], css);
    watch([htmlPath], bsReload);
    watch([jsPath], bsReload);
};

exports.serve = serve;
exports.default = serve;
