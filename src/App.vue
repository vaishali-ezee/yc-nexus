<template>
  <div class="yc-app">
    <login-signage
      v-if="loginViewType() === 'signage'"
      :env="setEnv()"
      :language="setLanguageCode()"
    />
    <login-cm
      v-if="loginViewType() === 'cm'"
      :env="setEnv()"
      :language="setLanguageCode()"
    />
    <login-pms
      v-if="loginViewType() === 'pms'"
      :env="setEnv()"
      :language="setLanguageCode()"
    />
  </div>
</template>

<script>
import LoginSignage from './components/LoginSignage.vue'
import LoginPms from './components/LoginPms.vue'
import LoginCm from './components/LoginCm.vue'
import './assets/style/yc-login.scss'

export default {
  name: 'App',
  components: {
    LoginSignage,
    LoginPms,
    LoginCm,
  },
  props: {
    type: {
      type: String,
      required: true,
    },
    env: {
      type: String,
      required: true
    },
    language: {
      type: String,
      default: 'ko'
    }
  },

  methods: {
    loginViewType() {
      return this.type && typeof (this.type) !== 'undefined' ? this.type.toLowerCase().trim() : this.type
    },
    setEnv() {
      return this.env ? this.env.toLowerCase().trim() : this.env
    },
    setLanguageCode() {
      const languageCode = this.language ? this.language.toLowerCase().trim() : this.language
      return (!['en', 'ko'].includes(languageCode)) ? 'ko' : languageCode
    }
  }
}
</script>
