<template>
  <div class="page-body news">
    <div class="page-header">
      <el-row>
        <el-col :span="10">
          <el-select v-model="value" placeholder="发布状态" style="width:25%">
            <el-option 
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          
          <el-select  v-model="value1" placeholder="发布来源" style="width:32%">
            <el-option
              v-for="item in optionss"
              :key="item.value1"
              :label="item.label"
              :value="item.value1">
            </el-option>
          </el-select>
        
          <el-select v-model="value2" placeholder="时间类型" style="width:32%">
            <el-option
              v-for="item in optionsss"
              :key="item.value2"
              :label="item.label"
              :value="item.value2">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-date-picker style="width:90%"
            v-model="value6"
            type="datetimerange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00']">
          </el-date-picker>
        </el-col>
        <el-col :span="7">
          <el-input v-model="inputs" placeholder="标题、发布账号、文章ID" style="width:70%;margin-right:5%;"></el-input><el-button class="light_btn" style="width:20%;">搜素</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="box">
      <div style="text-align:right;margin-bottom:4px;">
        <router-link :to="{name:'news-add'}" ><el-button class="light_btn">添加新闻</el-button></router-link>
        <el-button class="light_btn">置顶排序</el-button>
        <el-button class="light_btn">刷新</el-button>
      </div>
      <el-table :data="tableData" border stripe>
        <!--<el-table-column label="#" type="index"></el-table-column>-->
        <el-table-column label="序号" prop="num" width='50'></el-table-column>
        <el-table-column label="标题" prop="title">
          <template slot-scope="scope">
            <i class="iconfont icon-zhiding" style="color:#A30001;"></i>
            <el-popover trigger="hover" placement="top" v-if="scope.row.link">
              <p>{{ scope.row.link }}</p>
              <div slot="reference" class="name_wrapper" >
                <i class="iconfont icon-link" style="color:#3658A7;vertical-align: middle;" v-if="scope.row.link"></i>
              </div>
            </el-popover>
            <p style="display:inline-block;">{{ scope.row.title }}</p>
          </template>
        </el-table-column>
        <el-table-column label="创建人" prop="author" width="80"></el-table-column>
        <el-table-column label="发布状态" prop="status" width="80">
          <template  slot-scope="scope">
            <p v-if="scope.row.status=='已上线'" class="yshx">{{scope.row.status}}</p>
            <p v-if="scope.row.status=='待上线'" class="dshx">{{scope.row.status}}</p>
            <p v-if="scope.row.status=='已下线'" class="yxx">{{scope.row.status}}</p>
          </template>
        </el-table-column>
        <el-table-column label="发布来源" prop="source" width="120"></el-table-column>
        <el-table-column label="文章ID" prop="id" ></el-table-column>
        <el-table-column label="操作" width="300" fixed="right">
          <template slot-scope="scope">
            <el-button type="text" style="margin-right:8px;vertical-align:middle;" @click="deleteRow(scope.$index,scope.row)">取消置顶</el-button>
            <el-button type="text" v-if="scope.row.status =='已上线'" style="margin-right:8px;vertical-align:middle;">下线</el-button>
            <el-button type="text"><i class="iconfont icon-see" ></i></el-button>
            <el-button type="text"><i class="iconfont icon-share" ></i></el-button>
            <el-button type="text"><i class="iconfont icon-edit" ></i></el-button>
            <el-button type="text" @click.native.prevent="deleteRow(scope.$index, scope.row)"><i class="iconfont icon-delete" ></i></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:20px;">
        <el-pagination class="text-center"
          background
          @current-change="handleCurrentChange"
          :current-page="currentPage_bidding"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="this.per_page"
          layout="prev, pager, next"
          :total="this.total_pages * this.per_page">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'home',
    data() {
      return {
        per_page:10,
        total_pages:100,
        currentPage_bidding:7, // 页面默认展示的当前页码
        tableData: [{
            num: '1',
            title: '王小虎在北京开演唱会哈哈哈哈或或或',
            author: '管理员1',
            status:'已上线',
            source:'pc后台',
            id:'13823',
            link:'www.baidu.com'
          },
          {
            num: '2',
            title: '北京今日高温41度',
            author: '用户1号',
            status:'已下线',
            source:'app端',
            id:'1234'
          },
          {
            num: '3',
            title: '北京交通运输座谈会今日召开',
            author: '运营1号',
            status:'待上线',
            source:'app端',
            id:'120937866534'
          }],
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项5',
          label: '已上线'
        }, {
          value: '选项6',
          label: '已下线'
        }],
         optionss: [{
          value1: '选项1',
          label: '全部'
        }, {
          value1: '选项2',
          label: 'APP'
        }, {
          value1: '选项3',
          label: '后台发布'
        }, {
          value1: '选项4',
          label: '数据爬取'
        }],
          optionsss: [{
          value2: '选项1',
          label: '上线时间'
        }, {
          value2: '选项2',
          label: '创建时间'
        }, {
          value2: '选项3',
          label: '下线时间'
        }, {
          value2: '选项4',
          label: '审核时间'
        }],
        value6: '',
        inputs: '',
        value: '',
        value1:'',
        value2:'',
        dataList:[],
      }
    },
    methods:{
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
       deleteRow(index, rows) {
       // rows.splice(index, 1);
       this.$confirm('此操作将永久删除该新闻, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
        console.log(index, rows);
      }
    }
  }
</script>
<style type="text/css">
  .el-range-editor.el-input__inner{
    padding:0;
  }
  .el-date-editor .el-range__icon,
  .el-date-editor .el-range-separator{
    line-height:28px;
    height:28px;
  }
  .el-date-editor .el-range__icon{
    padding-left: 4px;
  }
  .iconfont{
    vertical-align:middle;
    cursor: pointer;
  }
  .name_wrapper{
   display: inline-block; 
  }
  .yshx{
    color: #00C621;
  }
  .dshx{
    color: #FEB210;
  }
  .yxx{
    color:#999;
  }
  .el-table,
  .el-table .el-button{
    font-size: 12px;
  }
  .el-table th{
    font-size: 14px;
  }
  .el-table th{
    text-align: center;
  }
  .el-table_1_column_7 .iconfont{
    font-size: 20px;
    vertical-align: middle;
    margin-right: 8px;
  }
  .el-button.el-button--small{
    line-height: 8px;
    padding-top:9px;
    padding-bottom: 9px;
  }
</style>