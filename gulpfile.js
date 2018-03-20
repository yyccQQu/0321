var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var fs = require('fs');
var _ = require('lodash');
var rev = require('gulp-rev');
var revFormat = require('gulp-rev-format');
var revCollector = require('gulp-rev-collector');
var clean = require('gulp-clean');
var runSequence = require('gulp-run-sequence');
var $ = require('gulp-load-plugins')() //执行自动加载插件,实例化
var open = require('open')

//第三方 js文件
var scripts = require('./app.scripts.json');

//代码
var adminSource = {
    js: {
        src: [
            // application config
            'app.config.js',
            'src/admin/app.service.config.js',
            'src/admin/host.js',
            // application bootstrap file
            'src/admin/app.js',
            'src/httpSvc.js',
            'src/filter.js',
            'src/directives.js',
            'src/resource.js',
            // module files
            'src/smart/**/module.js',
            'src/admin/**/module.js',

            // other js files [controllers, services, etc.]
            'src/smart/**/!(module)*.js',
            'src/admin/**/!(module)*.js'
        ],
        index: 'src/admin/index.html',
        views: 'src/admin/**/*.html',
        style: 'src/styles/**/*',
        sound:"src/sound/*",
        staticViews: 'src/smart/**/*.html',
        plugin: 'smartadmin-plugin/**/*',
    },
    build: {
        cache: './admin/.cache',
        rev_config: './config/admin/',
        views: './admin/views',
        script: "./admin",
        style: './admin',
        sound:'./admin'
    }
};



// 模版打包
gulp.task('admin:cache-templates', function() {
    var options = {
        removeComments: true, //清除HTML注释
        collapseWhitespace: true, //压缩HTML
        collapseBooleanAttributes: false, //省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
        minifyJS: true, //压缩页面JS
        minifyCSS: true //压缩页面CSS
    };
    return gulp.src([adminSource.js.staticViews, adminSource.js.views])
        .pipe(htmlmin(options))
        .pipe(templateCache('app.js', {
            root: 'views',
            module: 'app'
        }))
        .pipe(gulp.dest(adminSource.build.cache))
});
gulp.task('admin:build', ['admin:cache-templates'], function() {
    adminSource.js.src.push(adminSource.build.cache + '/app.js');
    return es.merge(gulp.src(adminSource.js.src))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(adminSource.build.cache));
});

//js
gulp.task('admin:js', function() {
    //, adminTemplateStream()
    return es.merge(gulp.src(adminSource.js.src))
        .pipe(concat('app.js'))
        .pipe(gulp.dest(adminSource.build.cache))
        .pipe($.connect.reload());
});
//css
gulp.task('admin:style', function() {
    err = gulp.src("src/styles/css/**/*")
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.cache + "/css"))
        .pipe($.connect.reload());

    err1 = gulp.src("src/styles/fonts/**/*")
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.script + "/fonts"))
        .pipe($.connect.reload());
    err2 = gulp.src("src/styles/img/**/*")
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.script + "/img"))
        .pipe($.connect.reload());
    err3 = gulp.src("src/styles/sound/**/*")
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.script + "/sound"))
        .pipe($.connect.reload());
    return err || err1 || err2 || err3;
});

gulp.task('admin:views-index', function() {
    return gulp.src(adminSource.js.index)
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.style))
        .pipe($.connect.reload());
});

gulp.task('admin:views', ['admin:views-index'], function() {
    err1 = gulp.src(adminSource.js.views)
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.views))
        .pipe($.connect.reload());

    err2 = gulp.src(adminSource.js.staticViews)
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.views))
        .pipe($.connect.reload());

    return err1 || err2;
});


gulp.task('admin:plugin', function() {
    return gulp.src(adminSource.js.plugin)
        .on('error', handleError)
        .pipe(gulp.dest(adminSource.build.views));
});


gulp.task('admin:connect', function() {
    $.connect.server({
    root: './admin',
    livereload: true,
    port: 4307
  });
  open('http://localhost:4307');

});


//清空目标文件
gulp.task('admin:cleanDst', function() {
    return gulp.src([adminSource.build.script], { read: false })
        .pipe(clean());
});

gulp.task('admin:cleanCache', function() {
    return gulp.src([adminSource.build.cache], { read: false })
        .pipe(clean());
});

//
gulp.task('admin:rev', function() {
    return gulp.src([adminSource.build.cache + '/**/*.js', adminSource.build.cache + '/**/*.css'])
        .pipe(rev())
        .pipe(gulp.dest(adminSource.build.script))
        .pipe(rev.manifest())
        .pipe(gulp.dest(adminSource.build.rev_config))
        .pipe($.connect.reload());
});
//console.log("最后改html文件，然后就能OK了")
gulp.task('admin:update-version', function() {
    return gulp.src([adminSource.build.rev_config + '/*.json',
            adminSource.build.script + '/**/*.css',
            adminSource.build.script + '/**/*.js',
            adminSource.build.script + '/*.html'
        ])
        .pipe(revCollector({
            replaceReved: true,
            /*
            dirReplacements: {
            'css': '/dist/css',
            '/js/': '/dist/js/',
            'cdn/': function(manifest_value) {
                return '//cdn' + (Math.floor(Math.random() * 9) + 1) + '.' + 'exsample.dot' + '/img/' + manifest_value;
            }
        }*/
        })) //- 根据 .json文件 执行文件内css名的替换
        .pipe(gulp.dest(adminSource.build.script))
        .pipe($.connect.reload());
});

//监听 当页面各元素发生更改时，都会删除（del）打包好了的文件，但是没有重新打包
gulp.task('admin:watch', function() {
    gulp.watch(adminSource.js.src, ['admin:js']);
    gulp.watch(adminSource.js.views, ['admin:js', 'admin:style', 'admin:views','admin:rev']);
    gulp.watch(adminSource.build.cache, ['admin:rev']);
    gulp.watch([adminSource.build.rev_config + '/*.json'], ["admin:update-version"]);
});

//第三方
gulp.task('admin:vendor', function() {
    _.forIn(scripts.chunks, function(chunkScripts, chunkName) {
        var paths = [];
        chunkScripts.forEach(function(script) {
            var scriptFileName = scripts.paths[script];

            if (!fs.existsSync(__dirname + '/' + scriptFileName)) {

                throw console.error('Required path doesn\'t exist: ' + __dirname + '/' + scriptFileName, script);
            }
            paths.push(scriptFileName);
        });
        gulp.src(paths)
            .pipe(uglify())
            .pipe(concat(chunkName + '.js'))
            .pipe(gulp.dest(adminSource.build.cache))
            .pipe($.connect.reload());

    });

});


gulp.task('admin:prod', function(done) {
    runSequence(
        ['admin:cleanDst'], ['admin:vendor', 'admin:style', 'admin:views-index'], ['admin:build'], ['admin:rev'], ['admin:update-version'], ['admin:cleanCache'],
        done);
}); //'admin:connect'
gulp.task('admin:dev', function(done) {
    runSequence(
        ['admin:cleanDst'], ['admin:vendor', 'admin:style', 'admin:views-index'], ['admin:js', 'admin:views'], ['admin:rev'], ['admin:update-version'], ['admin:watch', 'admin:connect'],
        done);
});
gulp.task('default', ['admin:dev']);

var swallowError = function(error) {
    console.log(error.toString());
    this.emit('end');
};

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}
