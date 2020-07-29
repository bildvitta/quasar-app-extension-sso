import Vue from 'vue'
import environment from 'extensions'

Vue.prototype.$ssoEnvironment = environment['@bildvitta/sso'] || {}