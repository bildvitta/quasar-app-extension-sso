module.exports = function (api) {
  api.compatibleWith('axios', '^0.19.2')
  api.compatibleWith('humps', '^2.0.1')

  api.extendQuasarConf((conf) => {
    const boots = [
      'axios',
      'environment',
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
