<template>
  <div
    class="abstract-item center"
    @click="$router.push(item.path)">
    <reco-icon v-if="item.frontmatter.sticky" icon="reco-sticky" />
    <div class="title">
      <reco-icon v-if="item.frontmatter.keys" icon="reco-lock" />
      <router-link :to="item.path">{{item.title}}</router-link>
    </div>
    <div class="abstract" v-html="item.excerpt"></div>
    <PageInfo
      :pageInfo="item"
      :currentTag="currentTag">
    </PageInfo>
  </div>
</template>

<script>
import { defineComponent } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import PageInfo from './PageInfo'
export default defineComponent({
  components: { PageInfo, RecoIcon },
  props: ['item', 'currentPage', 'currentTag']
})
</script>
<style>
  .abstract-item {
    background: none;
    border: 0;
    box-sizing: border-box;
    margin: 1em;
    padding: 1em 1em;
    box-shadow: inset 0 0 0 2px #f45e61;
    color: #f45e61;
    font-size: 15px;
    font-weight: 700;
    position: relative;
    vertical-align: middle;
    text-align: center;
    width:100%;
    height:100%;
    line-height: 20px;
  }
  .abstract-item::before, div::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .abstract-item {
    transition: color 0.25s;
  }
  .abstract-item::before, div::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }

  .center:hover {
    color: #6477b9;
  }
  .center::before, .center::after {
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .center::before {
    border-top: 2px solid #6477b9;
    border-bottom: 2px solid #6477b9;
    -webkit-transform: scale3d(0, 1, 1);
    transform: scale3d(0, 1, 1);
  }
  .center::after {
    border-left: 2px solid #6477b9;
    border-right: 2px solid #6477b9;
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
  }
  .center:hover::before, .center:hover::after {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
    transition: transform 0.5s, -webkit-transform 0.5s;
  }

</style>
<style lang="stylus" scoped>

.abstract-item
  position relative
  margin: 0 auto 20px;
  padding: 16px 20px;
  width 100%
  overflow: hidden;
  border-radius: $borderRadius
  box-shadow: var(--box-shadow);
  box-sizing: border-box;
  transition all .3s
  background-color var(--background-color)
  cursor: pointer;
  > * {
    pointer-events: auto;
  }
  .reco-sticky
    position absolute
    top 0
    left 0
    display inline-block
    color $accentColor
    font-size 2.4rem
  &:hover
    box-shadow: var(--box-shadow-hover)
  .title
    position: relative;
    font-size: 1.28rem;
    line-height: 46px;
    display: inline-block;
    a
      color: var(--text-color);
    .reco-lock
      font-size 1.28rem
      color $accentColor
    &:after
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: $accentColor;
      visibility: hidden;
      -webkit-transform: scaleX(0);
      transform: scaleX(0);
      transition: .3s ease-in-out;
    &:hover a
      color $accentColor
    &:hover:after
      visibility visible
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
  .tags
    .tag-item
      &.active
        color $accentColor
      &:hover
        color $accentColor
@media (max-width: $MQMobile)
  .tags
    display block
    margin-top 1rem;
    margin-left: 0!important;
</style>
