<template>
  <component
    :is="type"
    :aria-label="ariaLabel"
    :class="['wvc-icon', size]"
  >
    <component
      :is="iconName"
      :class="`${name}-icon`"
      :style="{ fill: fill }"
    />
  </component>
</template>

<script>
// import file containing all icons as components
import * as components from '@/assets/icons/index'

/**
 * Icons are used to visually communicate core parts of the product and
 * available actions. They can act as wayfinding tools to help users more
 * easily understand where they are in the product.
 */
export default {
  name: 'WvcIcon',
  status: 'review',
  release: '1.0.0',
  components: {
    ...components
  },
  props: {
    /**
     * The name of the icon to display.
     */
    name: {
      type: String,
      required: true,
      default: 'ready'
    },
    /**
     * The fill color of the SVG icon.
     */
    fill: {
      type: String,
      default: 'currentColor'
    },
    /**
     * Descriptive text to be read to screenreaders.
     */
    ariaLabel: {
      type: String,
      default: 'icon'
    },
    /**
     * The html element name used for the icon.
     */
    type: {
      type: String,
      default: 'span'
    },
    /**
     * The size of the icon. Defaults to medium.
     * @values small, medium, large
     */
    size: {
      type: String,
      default: 'medium',
      validator: value => {
        return value.match(/(small|medium|large)/)
      }
    }
  },
  computed: {
    iconName () {
      return this.name + 'Icon'
    }
  }
}
</script>

<style lang="scss">
// This is here just to provide defaults if the original tokens are removed.
// Can be removed once you’re ready to start defining your own sizes.
@import "../../docs/docs.tokens.scss";

// We don’t want to use scoped since these styles need to cascade down to SVGs.
// We also want to be able to style .icon inside buttons etc.
.wvc-icon {
  @include reset;
  &.large svg {
    width: $space-l;
    height: $space-l;
  }
  &.medium svg {
    width: $space-m;
    height: $space-m;
  }
  &.small svg {
    width: $space-s;
    height: $space-s;
  }
}
</style>

<docs>
  ```jsx
  <WvcIcon name="ready" aria-label="Component is ready" fill="#7cb518" />
  <WvcIcon name="review" fill="rgb(255,186,10)" />
  <WvcIcon name="deprecated" fill="rgb(235,59,36)" />
  <WvcIcon name="prototype" fill="rgb(37,138,239)" />
  ```
</docs>
