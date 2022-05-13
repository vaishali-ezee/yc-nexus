<template>
  <div class="yc-container">
    <div class="yc-row yc-justify-center">
      <div class="yc-col yc-col-12 yc-text-align_center yc-p-top_45 yc-p-bottom_45">
        <div class="yc-title-logo-bg" id="login-pms-logo" />
      </div>
      <div class="yc-col yc-col-6">
        <div class="yc-left-logo-bg" id="login-left-bg" />
      </div>
      <div class="yc-col yc-col-6">
        <div class="yc-card yc-p-all_0 yc-m-left_33">
          <div class="yc-text-heading_x-large" v-html="ycTextData.title"></div>
          <div class="yc-m-top_12 yc-text-heading">{{ ycTextData.subTitle }}</div>
          <div class="yc-m-top_36 yc-m-bottom_20">
            <a :href="loginUrl" class="yc-button-large yc-link">
              <span class="yc-button-large_title">
                {{ ycTextData.loginButtonText }}
              </span>
            </a>
          </div>
          <a :href="signupUrl" class="yc-text-signup" target="_blank">
            <span>{{ ycTextData.signupUrlText }}</span>
          </a>
        </div>
      </div>
    </div>
    <footer class="yc-footer-large">
      <div class="yc-card yc-p-all_0">
        <div class="yc-address yc-text-body yc-p-top_24 yc-p-bottom_72">
          <span class="yc-text-color_white">{{ ycTextData.contactName }}</span> 
          <span class="yc-p-left_7 yc-p-right_7 yc-text-font_bold">{{ ycTextData.contactNo }}</span> 
          <span>{{ ycTextData.operationTime }}</span>
        </div>
        <span class="yc-text-body">{{ ycTextData.copyrightText }}</span>
      </div>
    </footer>
  </div>
</template>

<script>
import configs from '../config'
import locale from '../locales'

export default {
  name: 'LoginPms',

  props: {
    env: {
      type: String,
      required: true
    },
    language: {
      type: String
    },
  },
  data() {
    return { 
      loginUrl: configs(this.env).pmsURL + window.location.href,
      signupUrl: configs(this.env).pmsRegisterURL + window.location.href,
      ycTextData: {
        loginButtonText: locale[this.language].commonText.loginButtonText,
        title: locale[this.language].yflux.title,
        subTitle: locale[this.language].yflux.subTitle,
        signupUrlText: locale[this.language].yflux.signupUrlText,
        copyrightText: locale[this.language].yflux.copyrightText,
        contactName: locale[this.language].yflux.contactName,
        operationTime: locale[this.language].yflux.operationTime,
        contactNo: '1544-7563',
      },
    }
  },
}
</script>
