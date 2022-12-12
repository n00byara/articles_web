<template>
  <div class="flex flex-col border border-solid border-black rounded-[10px] p-[15px]" @click="openArticle(article.id)">
    <h2 class="font-bold text-[32px]">{{article.title}}</h2>
    <p class="text-[16px] text-[#565656]">комменариев {{article.comments.length}}</p>
    <input type="text" class="bg-amber-200">
  </div>
</template>

<script>
export default {
  name: "Articles",
  props: {
    article: {
      type: Object,
      default: {}
    }
  },
  methods:{
    openArticle(id){
      console.log(id)
    }
  }
}
</script>

<style scoped>

</style>