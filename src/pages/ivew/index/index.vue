<template>
  <div class="main">
    <Card :dis-hover="true">
      <p slot="title">
        <Breadcrumb>
          <Breadcrumb-item href="javascript:void(0)">特殊考生录取</Breadcrumb-item>
        </Breadcrumb>
      </p>
      <Row style="margin-bottom: 16px;">
        <i-col span="12">批次：2017年自主单招</i-col>
      </Row>
      <Card :dis-hover="true" style="background-color: #F7F8FC;">
        <Row class="row">
          <i-col span="4" class="search-item label">关键字：</i-col>
          <i-col span="4" class="search-item">
            <i-input :value.sync="value" placeholder="请输入..."></i-input>
          </i-col>
          <i-col span="4" class="search-item label">单招类别：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">报考科类：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">生源地：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">特殊考生类型：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取专业：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row class="row">
          <i-col span="4" class="search-item label">录取志愿：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取状态：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
          <i-col span="4" class="search-item label">录取方式：</i-col>
          <i-col span="4" class="search-item">
            <i-select :model.sync="model1">
              <i-option v-for="item in cityList" :value="item.value">{{ item.label }}</i-option>
            </i-select>
          </i-col>
        </Row>
        <Row>
          <i-button type="primary">查询</i-button>
          <i-button>重置</i-button>
        </Row>
      </Card>
      <Row style="margin-top: 16px; margin-bottom: 16px;">
        当前条件下，共有考生 120 人，已录取 30 人，未录取 90 人
      </Row>
      <Row style="margin-bottom: 16px;">
        <i-button type="primary" @click="test()">自动录取</i-button>
        <i-button v-link="{path:'/studentInfo'}">手动录取</i-button>
        <i-button>导出</i-button>
        <Dropdown>
          <i-button>取消录取
            <Icon type="arrow-down-b"></Icon>
          </i-button>
          <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        <Dropdown>
          <i-button>
            <Icon type="locked"></Icon>
            锁定
            <Icon type="arrow-down-b"></Icon>
          </i-button>
          <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        <Dropdown>
          <i-button>
            <Icon type="unlocked"></Icon>
            解锁
            <Icon type="arrow-down-b"></Icon>
          </i-button>
          <Dropdown-menu slot="list">
            <Dropdown-item>驴打滚</Dropdown-item>
            <Dropdown-item>炸酱面</Dropdown-item>
            <Dropdown-item disabled>豆汁儿</Dropdown-item>
            <Dropdown-item>冰糖葫芦</Dropdown-item>
            <Dropdown-item divided>北京烤鸭</Dropdown-item>
          </Dropdown-menu>
        </Dropdown>
        <i-button style="float:right" @click="modal1 = true">
          <Icon type="navicon-round"></Icon>
          自定义显示列
        </i-button>
      </Row>
      <i-table :content="self" :data="tableData1" :columns="tableColumns1" stripe></i-table>
      <div style="margin: 10px;overflow: hidden">
        <div style="float: right;">
          <Page :total="100" :current="1" @on-change="changePage" show-sizer></Page>
        </div>
      </div>
    </Card>
    <Modal
      :visible.sync="modal1"
      title="普通的Modal对话框标题"
      @on-ok="ok"
      @on-cancel="cancel">
      <Checkbox-group :model.sync="social">
        <Checkbox value="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
        <Checkbox value="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
        <Checkbox value="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
        <Checkbox value="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
        <Checkbox value="twitter">
          <Icon type="social-twitter"></Icon>
          <span>Twitter</span>
        </Checkbox>
        <Checkbox value="facebook">
          <Icon type="social-facebook"></Icon>
          <span>Facebook</span>
        </Checkbox>
        <Checkbox value="github">
          <Icon type="social-github"></Icon>
          <span>Github</span>
        </Checkbox>
        <Checkbox value="snapchat">
          <Icon type="social-snapchat"></Icon>
          <span>Snapchat</span>
        </Checkbox>
      </Checkbox-group>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        modal1:false,
        self: this,
        tableData1: this.mockTableData1(),
        tableColumns1: [
          {
            title: '名称',
            key: 'name'
          },
          {
            title: '状态',
            key: 'status',
            render (row) {
              const color = row.status == 1 ? 'blue' : row.status == 2 ? 'green' : 'red';
              const text = row.status == 1 ? '构建中' : row.status == 2 ? '构建完成' : '构建失败';
              return `<tag type="dot" color="${color}">${text}</tag>`;
            }
          },
          {
            title: '画像内容',
            key: 'portrayal',
            render (row, column, index) {
              return `<Poptip trigger="hover" title="${row.portrayal.length}个画像" placement="bottom">
                                        <tag>${row.portrayal.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in tableData1[${index}].portrayal" style="text-align: center;padding: 4px">{{ item }}</li></ul>
                                        </div>
                                    </Poptip>`;
            }
          },
          {
            title: '选定人群数',
            key: 'people',
            render (row, column, index) {
              return `<Poptip trigger="hover" title="${row.people.length}个客群" placement="bottom">
                                        <tag>${row.people.length}</tag>
                                        <div slot="content">
                                            <ul><li v-for="item in tableData1[${index}].people" style="text-align: center;padding: 4px">{{ item.n }}：{{ item.c }}人</li></ul>
                                        </div>
                                    </Poptip>`;
            }
          },
          {
            title: '取样时段',
            key: 'time',
            render (row) {
              return `近${row.time}天`
            }
          },
          {
            title: '更新时间',
            key: 'update',
            render (row, column, index) {
              return `{{ formatDate(tableData1[${index}].update) }}`;
            }
          }
        ],
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        model1: ''
      }
    },
    methods: {
      test(){
        this.$Notice.open({
          title: '这是通知标题',
          desc: '这条通知不会自动关闭，需要点击关闭按钮才可以关闭。',
          duration: 0
        });
      },
      mockTableData1 () {
        let data = [];
        for (let i = 0; i < 10; i++) {
          data.push({
            name: '商圈' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            portrayal: ['城市渗透', '人群迁移', '消费指数', '生活指数', '娱乐指数'],
            people: [
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              },
              {
                n: '客群' + Math.floor(Math.random() * 100 + 1),
                c: Math.floor(Math.random() * 1000000 + 100000)
              }
            ],
            time: Math.floor(Math.random() * 7 + 1),
            update: new Date()
          })
        }
        return data;
      },
      formatDate (date) {
        const y = date.getFullYear();
        let m = date.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
      },
      changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.tableData1 = this.mockTableData1();
      }
    }
  }
</script>
<style scoped>
  .main {
    padding: 16px;
  }

  .search-item {
    height: 32px;
    line-height: 32px;
  }

  .search-item.label {
    padding-left: 16px;
  }

  .row {
    padding-bottom: 16px;
  }
</style>
