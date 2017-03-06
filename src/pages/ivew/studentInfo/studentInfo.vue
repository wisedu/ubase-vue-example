<template>
  <div class="main">
    <Card :dis-hover="true">
      <p slot="title">
        <Breadcrumb>
          <Breadcrumb-item v-link="{path:'/'}">特殊考生录取</Breadcrumb-item>
          <Breadcrumb-item href="javascript:void(0)">考生报名信息</Breadcrumb-item>
        </Breadcrumb>
      </p>
      <div class="readable-table">
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 姓名</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 性别</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 民族</i-col>
          <i-col span="5" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 出生日期</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span>  籍贯</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 政治面貌</i-col>
          <i-col span="5" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 身份证号</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 高考报名考生号</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 考生类别</i-col>
          <i-col span="5" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 毕业中学</i-col>
          <i-col span="21" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 健康状况</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label">身高(cm)</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label">体重(kg)</i-col>
          <i-col span="5" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label">特长</i-col>
          <i-col span="21" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label">所获奖励或处分</i-col>
          <i-col span="21" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label">联系电话</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 联系手机号</i-col>
          <i-col span="13" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label">第二联系人</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label">第二联系人手机号</i-col>
          <i-col span="13" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span> 通知书邮寄地址</i-col>
          <i-col span="21" class="item">col-12</i-col>
        </Row>
        <Row class="row">
          <i-col span="3" class="item label"><span style="color:red">*</span>  通知书邮寄邮编</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span>  邮寄收件人</i-col>
          <i-col span="5" class="item">col-12</i-col>
          <i-col span="3" class="item label"><span style="color:red">*</span> 收件人手机</i-col>
          <i-col span="5" class="item">col-12</i-col>
        </Row>
        </div>
    </Card>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .main{
    padding:16px;
  }

  .readable-table{
    border-right:1px solid rgba(216, 220, 240, 1);
    border-bottom:1px solid rgba(216, 220, 240, 1);
    margin:16px;
    background-color:#F7F8FC;
  }

  .item{
    border-left:1px solid rgba(216, 220, 240, 1);
    border-top:1px solid rgba(216, 220, 240, 1);
    height: 32px;
    line-height:28px;
    padding:4px;
  }

  .row .item.label{
    background-color:#F0F1F9 ;
  }
</style>
