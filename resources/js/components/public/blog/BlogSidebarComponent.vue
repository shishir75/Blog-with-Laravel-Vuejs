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
                            <i class="icon-angle-right"></i
                            ><a v-if="category" href="#">{{ category.name }}</a
                            ><span> (20)</span>
                        </li>
                    </ul>
                </div>
                <div class="widget">
                    <h5 class="widgetheading">Latest posts</h5>
                    <ul class="recent">
                        <li v-for="post in latestPosts" :key="post.id">
                            <img
                                :src="`/upload/${post.photo}`"
                                class="pull-left"
                                :alt="post.title"
                                style="width: 65px; height:65px"
                            />
                            <h6>
                                <a href="#">{{
                                    post.title | shortLength(30)
                                }}</a>
                            </h6>
                            <p>
                                {{ post.description | shortLength(70) }}
                            </p>
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
        this.$store.dispatch("latestPosts");
    },
    created() {},
    computed: {
        categories() {
            return this.$store.getters.sidebarCategories;
        },
        latestPosts() {
            return this.$store.getters.latestPosts;
        }
    },
    methods: {}
};
</script>

<style></style>
