var gulp = require("gulp");
var del = require('del');
var sourcemaps = require("gulp-sourcemaps");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build-with-sourcemap", function() {
    return 
        gulp.src(['src/*.ts','!src/*.spec.ts'])
        //.pipe(tsProject.src())
        .pipe(sourcemaps.init())
            .pipe(tsProject()).js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist"));
});

gulp.task("clean", function(){
    return del([
        "dist/**"
    ])
})

gulp.task("dev", function(){
    gulp.watch("src/**/*.ts", ["build-with-sourcemap"]);
})

gulp.task("default", ["clean"], function(){
    return  gulp.src(['src/*.ts','!src/*.spec.ts'])
        //.pipe(tsProject.src())
        .pipe(tsProject()).js
        .pipe(gulp.dest("dist"));
})
