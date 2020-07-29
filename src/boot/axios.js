export default async ({ Vue }) => {
  const axios = Vue.prototype.$axios
  const environment = Vue.prototype.$ssoEnvironment

  // URL
  axios.defaults.baseURL = process.env.SERVER_BASE_URL || (environment ? environment.serverBaseURL : '')
}
