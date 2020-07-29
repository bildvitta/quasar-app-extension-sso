module.exports = function (api) {
  api.extendQuasarConf((conf) => {
    const boots = [
      'register-auth',
      'router'
    ]

    boots.forEach(boot => conf.boot.push(`~@bildvitta/quasar-app-extension-sso/src/boot/${boot}.js`))

    conf.build.transpileDependencies.push(/quasar-app-extension-sso[\\/]src[\\/]boot/)
  })

  api.extendWebpack(webpack => {
    webpack.resolve.alias = {
      ...webpack.resolve.alias,

      extensions: api.resolve.app('quasar.extensions.json')
    }
  })
}
