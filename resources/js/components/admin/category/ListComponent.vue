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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="category in allCategory"
                                    :key="category.id"
                                >
                                    <td>1</td>
                                    <td>{{ category.name }}</td>
                                    <td>
                                        <a href="#" class="btn btn-sm btn-info"
                                            >Edit</a
                                        >
                                        <a
                                            href="#"
                                            class="btn btn-sm btn-danger"
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
    methods: {}
};
</script>

<style scoped></style>
