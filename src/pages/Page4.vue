<template>
  <div class="templateManage jf-content">
    <div class="content-header">
      <div class="title">模板管理</div>
      <div class="action" style="float:right">
        <el-button type="primary" @click="addNum"><i class="el-icon-plus"></i>添加用户</el-button>
      </div>
    </div>
    <div class="content-body">
      <div class="main-content">

        </div>
        <div class="page-con" style="margin-top: 20px">
          <el-checkbox style="padding-left:14px;"></el-checkbox>
          <el-button style="margin-left: 20px">删除</el-button>
          <div style="text-align: right;">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-sizes="[10, 20, 30, 40]"
              :page-size="pageSize"
              layout=" prev, pager, next, sizes,jumper"
              :total="totalCount">
            </el-pagination>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Page4"
    }
</script>

<style scoped>

</style>
