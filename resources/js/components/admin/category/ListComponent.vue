<template>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Category List</h3>
                        <div class="card-tools">
                            <router-link to="/category/create">
                                <button class="btn btn-primary">
                                    Add Caregory
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
                                    <th>Category Name</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(category, index) in allCategory"
                                    :key="category.id"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ category.name }}</td>
                                    <td>
                                        {{ category.created_at | dateFormat }}
                                    </td>
                                    <td>
                                        <router-link
                                            :to="
                                                `/edit-category/${category.id}`
                                            "
                                            class="btn btn-sm btn-info"
                                            >Edit</router-link
                                        >
                                        <a
                                            href="#"
                                            class="btn btn-sm btn-danger"
                                            @click.prevent="
                                                deleteCategory(category.id)
                                            "
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
        this.$store.dispatch("getCategory");
    },
    created() {},
    computed: {
        allCategory() {
            return this.$store.getters.getCategory;
        }
    },
    methods: {
        deleteCategory(id) {
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
                        .delete("/api/category/" + id)
                        .then(response => {
                            this.$store.dispatch("getCategory");
                            Toast.fire({
                                icon: "success",
                                title: "Category Deleted Successfully"
                            });
                        })
                        .catch(err => {
                            Toast.fire({
                                icon: "error",
                                title: "Category Not Deleted"
                            });
                        });
                } else {
                    Toast.fire({
                        icon: "info",
                        title: "Category is Safe now!"
                    });
                }
            });
        }
    }
};
</script>

<style scoped></style>
