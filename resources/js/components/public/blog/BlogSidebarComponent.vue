<template>
    <span>
        <div class="span4">
            <aside class="right-sidebar">
                <div class="widget">
                    <form class="form-search">
                        <input
                            placeholder="Type something"
                            type="text"
                            class="input-medium search-query"
                            v-model="keyword"
                            @keyup="RealSearch"
                        />
                        <button
                            type="submit"
                            @click.prevent="RealSearch"
                            class="btn btn-square btn-theme"
                        >
                            Search
                        </button>
                    </form>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Categories</h5>
                    <ul class="cat">
                        <li v-for="category in categories" :key="category.id">
                            <i class="icon-angle-right"></i>
                            <router-link
                                v-if="category"
                                :to="`/category/${category.id}`"
                            >
                                {{ category.name }}
                            </router-link>
                            <span> ({{ category.posts.length }})</span>
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                        <li v-for="post in getLatestPosts" :key="post.id">
                            <img
                                :src="`/upload/${post.photo}`"
                                class="pull-left"
                                :alt="post.title"
                                style="width: 65px; height:65px"
                            />
                            <h6>
                                <router-link :to="`/blog/${post.id}`">{{
                                    post.title | shortLength(30)
                                }}</router-link>
                            </h6>
                            <p>
                                {{ post.description | shortLength(70) }}
                            </p>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    </span>
</template>

<script>
import _ from "lodash";
export default {
    data() {
        return {
            keyword: ""
        };
    },
    components: {},
    mounted() {
        this.$store.dispatch("sidebarCategories");
        this.$store.dispatch("getLatestPosts");
    },
    created() {},
    computed: {
        categories() {
            return this.$store.getters.sidebarCategories;
        },
        getLatestPosts() {
            return this.$store.getters.getLatestPosts;
        }
    },
    methods: {
        RealSearch: _.debounce(function() {
            this.$store.dispatch("searchPosts", this.keyword);
        }, 1000)
    }
};
</script>

<style></style>
