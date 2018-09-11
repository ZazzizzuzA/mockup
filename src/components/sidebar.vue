<template>


        <div class="block-sidebar">
            <h2 class="block-sidebar__logo">{{titleBigPart}}<span>{{titleSmallPart}}</span></h2>
            <button class="block-sidebar__button-newPost"><span>+</span> NEW POST</button>
            <div id="navigation"></div>
        </div>

</template>


<script>
export default {
  name: "sidebar",
  data() {
    return {
      titleBigPart: `Upvoted.`,
      titleSmallPart: `io`
    };
  }
};
</script>


<style lang="scss">
.block-sidebar__button-newPost{
  span{
    font-size: 22px;
  }
}
</style>

