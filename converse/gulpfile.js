var gulp = require("gulp");


//拷贝html文件

gulp.task("copy-html", function(){
    return gulp.src("index.html")
    .pipe(gulp.dest("dist"))
    .pipe(connect.reload());
})

//拷贝数据

gulp.task("data", function(){
    return gulp.src("data/**/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//拷贝图片  压缩图片 imagemin

var imagemin = require("gulp-imagemin");
gulp.task("images",function(){
    return gulp.src("images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})


var scss = require("gulp-sass-china");
var minifyCSS = require("gulp-minify-css");
var rename = require("gulp-rename");
gulp.task("scss", function(){
    return gulp.src("stylesheet/**/*.scss")
    .pipe(scss())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCSS())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

gulp.task("scripts", function(){
    return gulp.src(["jquery/*.js", "js/*.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

//监听

gulp.task("watch",function(){
    gulp.watch("index.html", ["copy-html"]);
    gulp.watch("*.json", ["data"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("stylesheet/index.scss", ["scss"]);
    gulp.watch(["jquery/*.js", "js/*.js"], ["scripts"]);
})
//启动服务

var connect = require("gulp-connect");
gulp.task("server",function(){
    connect.server({
        root: "dist",
        port: 8888,
        livereload: true
    })
})
gulp.task("build", ["copy-html","data","images","scss","scripts"],function(){
    console.log("编译成功");
})

gulp.task("default", ["watch","server"]);