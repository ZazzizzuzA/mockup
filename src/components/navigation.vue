<template>
    <nav class="block-router">
        <h2 class="block-router__logo">Upvoted.<span>io</span></h2>
    </nav>
</template>


<script>
export default {
  data() {
    return {};
  }
};
</script>


<style lang="scss">
.block-router {
    box-sizing: border-box;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 330px;
    box-shadow: 2px 0px 130px #d3d3d3a9;
    &__logo{
        text-align: center;
        font-size: 30px;
        color: #4989af;
        span{
            font-size: 24px;
        }
    }
}

</style>

