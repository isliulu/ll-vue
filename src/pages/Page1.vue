<template>
  <div class="page1">
    <div class="userManage jf-head">
      <el-form :inline="true">
        <el-form-item label="用户账号：">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名：">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="可用语音：">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="可用短信：">
          <el-input placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="添加时间">
          <el-date-picker
            v-model="value"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="reset">重置</el-button>
        </el-form-item>
      </el-form>

    </div>
    <div class="userManage jf-container">
      <el-table class="margin-top-10" :data="tableData" style="width: 100%"
                :default-sort="{prop: 'date', order: 'descending'}">
        <el-table-column>
          <template slot-scope="scope">
            <el-checkbox v-model="checked"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column prop="account" label="用户账号" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.account }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="用户姓名" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="authority" label="权限类型（全部）" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.authority }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="voice" label="可用语音（分钟）" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.voice }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="message" label="可用短信（条）" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.message }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="添加时间" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="handle" label="操作" sortable>
          <template slot-scope="scope">
            <span class="table-text-blue">{{ scope.row.handle }}</span>
          </template>
        </el-table-column>
      </el-table>
      <div style="text-align: right;margin-top: 20px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pickerOptions2: {
          shortcuts: [{
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value: [new Date(2000, 10, 10), new Date(2000, 10, 11)],
        tableData: [{
            account: 'qqqqq',
            number: 10
          },
          {
            name: '会议室1终端',
            number: 10
          },
          {
            authority: '会议室1终端',
            number: 10
          },
          {
            voice: '会议室1终端',
            number: 10
          },
          {
            message: '会议室1终端',
            number: 10
          },
          {
            time: '会议室1终端',
            number: 10
          },
          {
            handle: '会议室1终端',
            number: 10
          },
          {
            name: '会议室1终端',
            number: 10
          },
          {
            name: '会议室1终端',
            number: 10
          },
          {
            name: '会议室1终端',
            number: 10
          }],
      }
    }
  };
</script>

<style scoped>
  .page1 {
    width: 1616px;
    height: 766px;
    padding: 10px;
    margin-left: 15px;
  }
</style>
