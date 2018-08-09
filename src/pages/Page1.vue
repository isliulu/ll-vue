<template>
  <div class="userManage jf-content">
    <div class="content-header">
      <div class="title">用户管理</div>
      <div class="action" style="float:right">
        <el-button type="primary" @click="addNum"><i class="el-icon-plus"></i>添加用户</el-button>
      </div>
    </div>
    <div class="content-body">
      <div class="main-content">
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
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">查询</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="reset">重置</el-button>
          </el-form-item>
        </el-form>
        <div class="table">
          <el-table class="margin-top-10"
                    :data="tableData" style="width: 100%"
                    :default-sort="{prop: 'id', order: 'descending'}">
            <el-table-column type="selection">
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
            <el-table-column prop="Authorization" label="权限类型（全部）" sortable>
              <template slot-scope="scope">
                <span class="table-text-blue">{{ scope.row.token}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="vSum" label="可用语音（分钟）" sortable>
              <template slot-scope="scope">
                <span class="table-text-blue">{{ scope.row.availableVsum }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="mSum" label="可用短信（条）" sortable>
              <template slot-scope="scope">
                <span class="table-text-blue">{{ scope.row.availableMsum }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="time" label="添加时间" sortable>
              <template slot-scope="scope">
                <span class="table-text-blue">{{ scope.row.time }}</span>
              </template>
            </el-table-column>
            <el-table-column prop="handle" label="操作" sortable>
              <template slot-scope="scope">
                <el-button type="text" @click="stop" class="stopAuth">停用权限</el-button>
                <el-button type="text" @click="edit">编辑</el-button>
                <el-button type="text" @click="reset">重置密码</el-button>
                <el-button type="text" @click="addCharge">充值</el-button>
              </template>
            </el-table-column>
          </el-table>
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
    <addUser :showAddUser.sync="showAddUser"></addUser>
    <editUserIfo :editUserIfo.sync="editUserIfo"></editUserIfo>
    <resetPassword :showReset.sync="showReset"></resetPassword>
    <recharge :showCharge.sync="showCharge"></recharge>
  </div>
</template>

<script>
import addUser from '../components/addUser';
import editUserIfo from '../components/editUserIfo';
import resetPassword from '../components/resetPassword';
import recharge from '../components/recharge';
  export default {
    name: "userManage",
    components:{
      addUser,
      editUserIfo,
      resetPassword,
      recharge
    },
    data() {
      return {
        value: '',
        tableData: [
          { account:'q1',
            name:'ll',
            token:'无权限',
            availableVsum:'200',
            availableMsum:'300',
            time:'2018年7月30日'
          }
        ],
        currentPage: 1,
        start: 1,
        pageSize: 10,
        totalCount: 100,
        showAddUser: false,
        editUserIfo: false,
        showReset:false,
        showCharge:false,
      }
    },
    methods: {
      //每页显示数据量变更
      handleSizeChange(val) {
        this.pageSize = val;
        this.responseData();
        console.log(`每页 ${val} 条`);
      },

      //页码变更
      handleCurrentChange(val) {
        this.currentPage = val;
        this.responseData();
        console.log(`当前页: ${val}`);
      },

    /*  responseData(){

        var param = {
          pageSize:'',
          page: "",
          sort: "",
          totalCount:'',
          number:'',
        };

        //$http.get($api.query_user, param).then(res => {
          // console.log(this.tableData);
          //this.tableData = res.content;
         // this.totalCount = res.totalElements;
        },*/

      addNum () {
        this.showAddUser= true
      },
      edit() {
        this.editUserIfo = true
      },
      reset() {
        this.showReset = true
      },
      addCharge() {
        this.showCharge = true
      },
      stop() {

        this.$message({
          message: '禁用成功',
          type: 'warning'
        });
      }
    },
    created() {
     // this.responseData();
    }
  }

</script>

<style scoped>
  .stopAuth{
    cursor: pointer;
  }
</style>
