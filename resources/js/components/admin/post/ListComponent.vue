<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Post List</h3>
                        <div class="card-tools">
                            <router-link to="/create-post">
                                <button class="btn btn-primary">
                                    Add Post
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                        <table
                            id="example1"
                            class="table table-bordered table-striped text-center"
                        >
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>User Name</th>
                                    <th>Category Title</th>
                                    <th>Post Title</th>
                                    <th>Post Description</th>
                                    <th>Post Photo</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(post, index) in getAllPosts"
                                    :key="post.id"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ post.user.name }}</td>
                                    <td>
                                        {{
                                            post.category.name | shortLength(20)
                                        }}
                                    </td>
                                    <td>
                                        {{ post.title | shortLength(30) }}
                                    </td>
                                    <td>
                                        {{ post.description | shortLength(50) }}
                                    </td>
                                    <td>
                                        <img
                                            :src="postPhoto(post.photo)"
                                            alt="Post Photo"
                                            width="40"
                                            height="40"
                                        />
                                    </td>
                                    <td>{{ post.created_at | dateFormat }}</td>

                                    <td>
                                        <router-link
                                            :to="`/edit-post/${post.id}`"
                                            class="btn btn-sm btn-info"
                                            >Edit</router-link
                                        >
                                        <a
                                            href="#"
                                            class="btn btn-sm btn-danger"
                                            @click.prevent="deletePost(post.id)"
                                            >Delete</a
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <!-- /.card-body -->
                </div>
                <!-- /.col -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.card -->
    </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
    data() {
        return {};
    },
    mounted() {
        this.$store.dispatch("getPosts");
    },
    created() {},
    computed: {
        getAllPosts() {
            return this.$store.getters.getPosts;
        }
    },
    methods: {
        postPhoto(img) {
            return "/upload/" + img;
        },
        deletePost(id) {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes"
            }).then(result => {
                if (result.value) {
                    axios
                        .delete("/api/post/" + id)
                        .then(response => {
                            this.$store.dispatch("getPosts");
                            Toast.fire({
                                icon: "success",
                                title: "Post Deleted Successfully"
                            });
                        })
                        .catch(error => {
                            Toast.fire({
                                icon: "error",
                                title: "Post can't be deleted."
                            });
                        });
                } else {
                    Toast.fire({
                        icon: "info",
                        title: "Post is Safe now!"
                    });
                }
            });
        }
    }
};
</script>

<style></style>
