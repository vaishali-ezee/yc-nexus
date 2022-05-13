<template>
  <!-- whole_screen -->
  <div class="yc-ds-main" id="login-signage-bg">
    <!-- middle_box -->
    <div class="yc-ds-box yc-text-align_center">
      <div class="yc-row">
        <div class="yc-col yc-col-12">
          <div class="yc-ds-h1">
            {{ ycTextData.title }}
          </div>
          <div class="yc-m-top_8 yc-ds-body-1">
            <div>{{ ycTextData.subtitle1 }}</div>
            <div>{{ ycTextData.subtitle2 }}</div>
          </div>
          <div class="yc-m-top_28 yc-m-bottom_48 yc-ds-button">
            <a :href="loginUrl" class="yc-link">
              <span class="yc-ds-button-text">
                {{ ycTextData.loginButtonText }}
              </span>
            </a>
          </div>
          <hr class="yc_line" />
          <div class="yc-m-top_20 yc-m-bottom_2 yc-ds-body-1">
            {{ ycTextData.footerText }}
          </div>
          <div>
            <a
              class="yc-text-color_blue yc-ds-body-1"
              :href="`mailto:${ycTextData.mailto}`"
              target="_blank"
            >
              <span>{{ ycTextData.mailto }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import configs from "../config";
import locale from "../locales";

export default {
  name: "LoginSignage",

  props: {
    env: {
      type: String,
      required: true,
    },
    language: {
      type: String,
    },
  },
  data() {
    return {
      loginUrl: configs(this.env).signageURL + window.location.href,
      ycTextData: {
        loginButtonText: locale[this.language].commonText.loginButtonText,
        title: locale[this.language].signage.title,
        subtitle1: locale[this.language].signage.subTitle1,
        subtitle2: locale[this.language].signage.subTitle2,
        footerText: locale[this.language].signage.footerText,
        mailto: "signage@yanolja.com",
      },
    };
  },
};
</script>

