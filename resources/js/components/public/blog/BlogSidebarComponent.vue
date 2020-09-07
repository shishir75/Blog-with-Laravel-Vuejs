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
                        />
                        <button type="submit" class="btn btn-square btn-theme">
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
                        <li
                            v-for="(post, index) in getBlogPosts"
                            :key="post.id"
                        >
                            <span v-if="index < 4">
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
                            </span>
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Popular tags</h5>
                    <ul class="tags">
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Trends</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Internet</a></li>
                        <li><a href="#">Tutorial</a></li>
                        <li><a href="#">Development</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    </span>
</template>

<script>
export default {
    data() {
        return {};
    },
    components: {},
    mounted() {
        this.$store.dispatch("sidebarCategories");
        this.$store.dispatch("getBlogPosts");
    },
    created() {},
    computed: {
        categories() {
            return this.$store.getters.sidebarCategories;
        },
        getBlogPosts() {
            return this.$store.getters.getBlogPosts;
        }
    },
    methods: {}
};
</script>

<style></style>
