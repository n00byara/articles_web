<template>
    <div class="flex flex-col gap-[10px] w-[80%] mx-auto">
      <Articles
          v-for="article in $store.state.articlesStore.articles"
          :key="article.id"
          :article="article"
      />
    </div>
</template>
<script>
    import Articles from "@/components/ArticlesListComponent/Articles/Articles.vue";

    export default {
        name: 'ArticlesListComponent',
        components: {
          Articles
        },
    }
</script>
<style></style>