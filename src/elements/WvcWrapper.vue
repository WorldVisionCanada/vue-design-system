<template>
  <component
    :is="type"
    class="wvc-wrapper"
  >
    <slot />
  </component>
</template>

<script>
/**
 * Used to build the outer wrapper of a page, including the page title and
 * associated actions. Wrapper doesn’t provide customizable options.
 */
export default {
  name: 'WvcWrapper',
  status: 'review',
  release: '1.0.0',
  props: {
    /**
     * The html element name used for the wrapper.
     */
    type: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss" scoped>
.wvc-wrapper {
  @include reset;
  @include inset-space($space-l);
  font-family: $font-text;
  font-weight: $weight-normal;
  font-size: $size-m;
  line-height: $line-height-m;
  width: 100%;
  @media #{$media-query-l} {
    @include inset-space($space-xl);
  }
}
</style>

<docs>
  ```jsx
  <WvcWrapper>Wrapper can be used to wrap any components together.</WvcWrapper>
  ```
</docs>
