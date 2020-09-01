<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add New Post</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form
                        @submit.prevent="addPost"
                        enctype="maltipart/form-data"
                    >
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1"
                                    >Post Title</label
                                >
                                <input
                                    type="text"
                                    name="title"
                                    class="form-control"
                                    placeholder="Enter Post Title"
                                    v-model="form.title"
                                    :class="{
                                        'is-invalid': form.errors.has('title')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="name"
                                ></has-error>
                            </div>
                            <div class="form-group">
                                <label for="category_id">Category</label>
                                <select
                                    class="form-control"
                                    name="category_id"
                                    id="category_id"
                                    v-model="form.category_id"
                                    :class="{
                                        'is-invalid': form.errors.has(
                                            'category_id'
                                        )
                                    }"
                                >
                                    <option value="" disabled
                                        >Select Category</option
                                    >
                                    <option
                                        v-for="category in allCategory"
                                        :key="category.id"
                                        :value="category.id"
                                        >{{ category.name }}</option
                                    >
                                </select>
                                <has-error
                                    :form="form"
                                    field="category_id"
                                ></has-error>
                            </div>
                            <div class="form-group">
                                <label for="description1"
                                    >Post Description</label
                                >
                                <markdown-editor
                                    v-model="form.description"
                                    name="description"
                                    id="description"
                                    placeholder="Enter Post Description"
                                    :class="{
                                        'is-invalid': form.errors.has(
                                            'description'
                                        )
                                    }"
                                ></markdown-editor>
                                <has-error
                                    :form="form"
                                    field="description"
                                ></has-error>
                            </div>
                            <div class="form-group">
                                <label for="photo">Post Photo</label>
                                <input
                                    type="file"
                                    class="form-control-file"
                                    name="photo"
                                    id="photo"
                                    :class="{
                                        'is-invalid': form.errors.has('photo')
                                    }"
                                    @change="changePhoto($event)"
                                />
                                <img
                                    v-if="form.photo"
                                    :src="form.photo"
                                    alt="Post Photo"
                                    width="80"
                                    height="80"
                                />
                                <has-error
                                    :form="form"
                                    field="photo"
                                ></has-error>
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button
                                type="submit"
                                class="btn btn-primary float-right"
                            >
                                Add Post
                            </button>
                        </div>
                    </form>
                </div>
                <!-- /.card -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                title: "",
                category_id: "",
                description: "",
                photo: ""
            })
        };
    },
    mounted() {
        this.$store.dispatch("getCategory");
    },
    computed: {
        allCategory() {
            return this.$store.getters.getCategory;
        }
    },
    methods: {
        changePhoto(event) {
            let file = event.target.files[0];
            let reader = new FileReader();
            reader.onload = e => {
                this.form.photo = e.target.result;
            };

            reader.readAsDataURL(file);
        },
        addPost() {
            this.form
                .post("/api/post")
                .then(response => {
                    this.$router.push("/post");
                    Toast.fire({
                        icon: "success",
                        title: "Post Created Successfully"
                    });
                })
                .catch(error => {
                    Toast.fire({
                        icon: "error",
                        title: "Post does not Create!"
                    });
                });
        }
    }
};
</script>

<style></style>
