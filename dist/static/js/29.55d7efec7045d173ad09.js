webpackJsonp([29],{"2KtT":function(t,e){},IGic:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={data:function(){return{search_info:"",banner_data:[{num:22,title:"王大虎打伤了王小虎",shotTitle:"恶意伤人事件",status:"已上线",type:"新闻",picture:"图片",upTime:"2018-01-01",createTime:"2018-01-01"},{num:242,title:"区块链到底是什么?关于区块链最深刻的理解哈哈哈哈或或或",shotTitle:"带你认识区块链",status:"已上线",type:"专题",picture:"图片",upTime:"2018-08-01",createTime:"2018-07-01"},{num:29,title:"真的不知道编些啥内容了",shotTitle:"内容",status:"已上线",type:"新闻",picture:"图片",upTime:"2018-01-01",createTime:"2018-01-01"}]}},methods:{deleteRow:function(t,e){var a=this;this.$confirm("此操作将永久删除该新闻, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$message({type:"success",message:"删除成功!"})}).catch(function(){a.$message({type:"info",message:"已取消删除"})}),console.log(t,e)},sort:function(){var t=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}],e=t[2];t[2]=t[3],t[3]=e,console.log(t)}}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-body banner"},[a("div",{staticClass:"page-header clearfix"},[a("el-input",{staticStyle:{width:"220px",margin:"0 20px"},attrs:{placeholder:"请输入内容"},model:{value:t.search_info,callback:function(e){t.search_info=e},expression:"search_info"}}),t._v(" "),a("el-button",{staticClass:"light_btn"},[t._v("搜索")])],1),t._v(" "),a("div",{staticClass:"box"},[a("div",{staticStyle:{"text-align":"right","margin-bottom":"4px"}},[a("router-link",{attrs:{to:{name:"news-add"}}},[a("el-button",{staticClass:"light_btn"},[t._v("添加新闻")])],1),t._v(" "),a("el-button",{staticClass:"light_btn"},[t._v("置顶排序")]),t._v(" "),a("el-button",{staticClass:"light_btn"},[t._v("刷新")])],1),t._v(" "),a("div",{staticClass:"banner_show"},[a("el-table",{attrs:{data:t.banner_data,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",prop:"num",width:"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"原文标题",prop:"title"}}),t._v(" "),a("el-table-column",{attrs:{label:"短标语",prop:"shotTitle"}}),t._v(" "),a("el-table-column",{attrs:{label:"发布状态",prop:"status",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return["已上线"==e.row.status?a("p",{staticClass:"yshx"},[t._v(t._s(e.row.status))]):t._e(),t._v(" "),"待上线"==e.row.status?a("p",{staticClass:"dshx"},[t._v(t._s(e.row.status))]):t._e(),t._v(" "),"已下线"==e.row.status?a("p",{staticClass:"yxx"},[t._v(t._s(e.row.status))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"内容类型",prop:"type",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"图片",prop:"picture",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"上传时间",prop:"upTime",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"createTime",width:"100"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"260",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticStyle:{"margin-right":"8px","vertical-align":"middle"},attrs:{type:"text"},on:{click:function(a){t.deleteRow(e.$index,e.row)}}},[t._v("取消置顶")]),t._v(" "),"已上线"==e.row.status?a("el-button",{staticStyle:{"margin-right":"8px","vertical-align":"middle"},attrs:{type:"text"}},[t._v("下线")]):t._e(),t._v(" "),a("el-button",{attrs:{type:"text"}},[a("i",{staticClass:"iconfont icon-see"})]),t._v(" "),a("el-button",{attrs:{type:"text"}},[a("i",{staticClass:"iconfont icon-share"})]),t._v(" "),a("el-button",{attrs:{type:"text"}},[a("i",{staticClass:"iconfont icon-edit"})]),t._v(" "),a("el-button",{attrs:{type:"text"},nativeOn:{click:function(a){a.preventDefault(),t.deleteRow(e.$index,e.row)}}},[a("i",{staticClass:"iconfont icon-delete"})])]}}])})],1)],1)])])},staticRenderFns:[]};var l=a("VU/8")(s,i,!1,function(t){a("2KtT")},null,null);e.default=l.exports}});
//# sourceMappingURL=29.55d7efec7045d173ad09.js.map