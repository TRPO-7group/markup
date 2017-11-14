const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const clean = require('gulp-clean');
const rebaseUrls = require('gulp-css-rebase-urls');


gulp.task('images-clean-dist', () =>
gulp.src('./build/img', {read: false})
    .pipe(clean())
);

gulp.task('js-clean-dist', () =>
gulp.src('./build/js', {read: false})
    .pipe(clean())
);

gulp.task('js', ['js-clean-dist'], () =>
gulp.src('./src/js/**/*')
    .pipe(gulp.dest('./build/js'))
);



gulp.task('images', ['images-clean-dist'], () =>
gulp.src('./src/img/**/*')
    .pipe(gulp.dest('./build/img'))
);




gulp.task('images:watch', ['images'],  () =>
gulp.watch('./src/img/**/*', ['images'])
);

gulp.task('sass', () =>
gulp.src('./src/default.sass')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(rebaseUrls())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'))
);

gulp.task('sass:watch', ['sass'], () =>
gulp.watch('./src/**/*.sass', ['sass'])
);


// common
gulp.task('build', ['sass', 'images', 'js']);
gulp.task('default', ['sass:watch', 'images:watch']);