var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");


gulp.task("build-with-sourcemap", function() {
    return gulp.src("src/*.ts")
        .pipe(sourcemaps.init())
            .pipe(tsProject()).js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});

gulp.task("dev", function(){
    gulp.watch("src/**/*.ts", ["build-with-sourcemap"]);
})

gulp.task("default", function(){
    return gulp.src("src/*.ts")
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));
})
