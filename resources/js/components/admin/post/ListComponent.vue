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
                                <tr>
                                    <td>1</td>
                                    <td>User</td>
                                    <td>Category</td>
                                    <td>Post Title</td>
                                    <td>Description</td>
                                    <td>Photo</td>
                                    <td>Date</td>

                                    <td>
                                        <router-link
                                            :to="`/edit-category`"
                                            class="btn btn-sm btn-info"
                                            >Edit</router-link
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
export default {};
</script>

<style></style>
