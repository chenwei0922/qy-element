import { run, pkgRoot, compRoot } from '@chenwei02/build-utils'
import { series, parallel, src, dest, watch } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import autoprefixer from 'gulp-autoprefixer'

// 打包内部样式
// 这里解释一下gulp打包样式的原因:
// vite打包的时候，会将样式文件全部打包到同一个文件，这样的话我们每次都要全量引入所有的样式文件，做不到按需引入效果。
// 因此打包的时候，可以不让vite打包样式文件，而使用gulp对样式文件进行打包
export const buildStyle = () => {
  const sass = gulpSass(dartSass)
  return src(`${compRoot}/src/**/style/**.scss`)
    .pipe(sass.sync())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgRoot}/chenwei02/lib/src`))
    .pipe(dest(`${pkgRoot}/chenwei02/es/src`))
}

// 打包组件
export const buildComponent = () => {
  return run('pnpm run build')
}

// 监听文件变更，重新打包
export const watchModules = () => {
  watch(
    `${compRoot}/src/**`,
    series(async () => {
      run(`rm -rf dist/lib/**`)
      run(`rm -rf dist/es/**`)
    }, parallel(buildStyle, buildComponent))
  )
}

export default parallel(buildStyle, buildComponent)
