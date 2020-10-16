<template>
  <component :is="type" class="wvc-not-found">
    <WvcNavBar
      active="WvcNotFound"
      :navItems="[
        {name: 'Template', component: 'WvcIndex', href: '/#/'},
        {name: 'Documentation', href: 'http://localhost:6060/'}
      ]"
    />
    <WvcWrapper>
      <WvcHeading>404 Error</WvcHeading>
      <WvcParagraph>Couldn’t find a component that would match the URL you entered. Double check configuration in router/index.js.</WvcParagraph>
    </WvcWrapper>
  </component>
</template>

<script>
/**
 * Shows how to layout and structure an error page.
 */
export default {
  name: "WvcNotFound",
  metaInfo: {
    title: "Page Not Found | Vue Design System",
    htmlAttrs: {
      lang: "en",
    },
  },
  props: {
    /**
     * The html element name used for the component.
     */
    type: {
      type: String,
      default: "div",
    },
  },
}
</script>

<style lang="scss" scoped>
// Design Tokens with local scope
$color-template-background: $color-rich-black;
$color-template-background-top: tint($color-template-background, 5%);
$color-template-background-bottom: shade($color-template-background, 5%);
$color-template-text: $color-white;
$color-template-link: $color-bleu-de-france;

.wvc-not-found {
  @include reset;
  @include inset-space($space-m);
  min-height: $space-xxl * 4;
  background: $color-template-background;
  background: linear-gradient(
    0deg,
    $color-template-background-bottom,
    $color-template-background-top 100%
  );
  text-align: center;
  position: relative;
  float: left;
  height: 100%;
  width: 100%;
  .wvc-heading {
    color: $color-template-text;
  }
  .wvc-paragraph {
    color: $color-template-text;
  }
  .wvc-text-link {
    color: $color-template-link;
  }
  .wvc-wrapper {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: $space-xxl * 4.5;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
  }
}
</style>

<docs>
  ```jsx
  <WvcNotFound />
  ```
</docs>
