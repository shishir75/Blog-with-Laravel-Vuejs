<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Add New Category</h3>
                    </div>
                    <!-- /.card-header -->
                    <!-- form start -->
                    <form @submit.prevent="addCategory">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1"
                                    >Category Name</label
                                >
                                <input
                                    type="text"
                                    name="name"
                                    class="form-control"
                                    placeholder="Enter Category Name"
                                    v-model="form.name"
                                    :class="{
                                        'is-invalid': form.errors.has('name')
                                    }"
                                />
                                <has-error
                                    :form="form"
                                    field="name"
                                ></has-error>
                            </div>
                        </div>
                        <!-- /.card-body -->

                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">
                                Create
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
                name: ""
            })
        };
    },
    methods: {
        addCategory() {
            this.form
                .post("/api/category", this.form)
                .then(result => {
                    this.form.name = "";
                    this.$router.push("/category");
                    Toast.fire({
                        icon: "success",
                        title: "Category Created Successfully"
                    });
                })
                .catch(err => {
                    Toast.fire({
                        icon: "error",
                        title: "Category Not Created"
                    });
                });
        }
    }
};
</script>

<style scoped></style>
