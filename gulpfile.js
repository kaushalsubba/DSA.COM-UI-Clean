var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var pug = require('gulp-pug');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean-css');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var gulpCopy = require('gulp-copy');




// Paths and directories
var paths = {
	sass: {
		src: './src/sass/**/*.scss',
		dest: './assets/css'
	},

	css: {
		src: './src/css/*.css',
		dest: './assets/css'
	},

	html: {
		src: ['src/pug/**/*.pug','src/pug/**/components/*','src/pug/**/templates/*'],
		dest: './'
	},
	
	js: {
		src: './src/js/*.js',
		dest: './assets/js'
	},

	img: {
		src: './src/img/**',
		dest: './assets/img'
	},

	fonts: {
		src: './src/fonts/**',
		dest: './assets/fonts'
	},

	watch: {
		pug: ['./src/pug/*.pug', './src/pug/**/*.pug']
	}
};

// Compiles Sass into CSS
gulp.task('sass', function () {
	return gulp
		.src(paths.sass.src)
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest(paths.sass.dest))
		.pipe(browserSync.stream());
});

// Watches files for change and reloads the browser
gulp.task('browser-sync', function () {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
});

// Compiles pug file into HTML
gulp.task('compileHTML', function(){
	return gulp
		.src(paths.html.src)
		.pipe(pug({
			// beautify: true
		}))
		.pipe(gulp.dest(paths.html.dest));
});

// Optimizes images
gulp.task('minifyImg', function(){
	return gulp
		.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('assets/img'))
});

// Fonts
gulp.task('gulpcopy', function() {
	return gulp.src('src/fonts/**/*')
            .pipe(gulp.dest('assets/fonts'))
});

// Minifies the javascript
gulp.task('minifyJs', function() {
	return gulp
		.src(paths.js.src)
		.pipe(plumber())
		.pipe(babel({
			presets: [
			  ['@babel/env', {
				modules: false
			  }]
			]
		  }))
		.pipe(uglify({
			output: {
				comments: true
			}
		}))
		.pipe(gulp.dest(paths.js.dest));
});

// Minifies the css
gulp.task('minifyCss', function() {
	return gulp
		.src(paths.css.src)
		.pipe(clean())
		.pipe(gulp.dest(paths.css.dest));
});

// reload browser
gulp.task('reloadBrowser', function(done){
	browserSync.reload();
	done();
});

// Watches file for changes and runs the task
gulp.task('watch', function () {
	gulp.watch(paths.sass.src, gulp.series('sass'));
	gulp.watch(paths.watch.pug, gulp.series('compileHTML', 'reloadBrowser'));
	gulp.watch(paths.img.src, gulp.series('minifyImg', 'reloadBrowser'));
	gulp.watch(paths.css.src, gulp.series('minifyCss', 'reloadBrowser'));
	gulp.watch(paths.js.src, gulp.series('minifyJs', 'reloadBrowser'));
	gulp.watch(paths.fonts.src, gulp.series('gulpcopy', 'reloadBrowser'));
});

// Starts the development server
gulp.task('serve', gulp.parallel('browser-sync', 'watch'));
