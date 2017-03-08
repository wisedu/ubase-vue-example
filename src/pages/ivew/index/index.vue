<template>
  <ipage :config="pages" v-ref:ipage></ipage>
</template>
<script>
  export default {
    data () {
      return {
        pages: {
          style: {},
          class: '',
          modals: [
            {
              name: 'modal1',
              component: "test",
              options:{},
              title: '普通的Modal对话框标题',
              ok: () => {
              alert()
            }
            }
          ],
          layout: [
            {
              cols: [{
                name: 'topnav',
                component: 'index_fragment_nav',
                style: {'border-bottom': '1px solid #e3e8ee', 'padding-bottom': '16px'}
              }]
            },
            {cols: [{content: '批次：2017年自主单招', style: {'margin-bottom': '16px'}}]},
            {
              cols: [{
                component: 'index_fragment_search', options: {
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
                  ]
                }
              }]
            },
            {
              cols: [{
                content: '当前条件下，共有考生 120 人，已录取 30 人，未录取 90 人',
                style: {'margin-bottom': '16px', 'margin-top': '16px'}
              }]
            },
            {
              cols: [{
                component: 'index_fragment_button',
                style: {'margin-bottom': '16px'},
                events: {
                  'on-test': () => {
                    this.test()
                  },
                  'on-modal': () => {
                    this.$refs.ipage.modal.modal1 = true
                  }
                }
              }]
            },
            {
              cols: [{
                name: 'table',
                component: 'index_fragment_table',
                events: {
                  'on-change': () => {
                    this.changePage()
                  }
                },
                options: {
                  current: this,
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
                                            <ul><li v-for="item in options.tableData1[${index}].portrayal" style="text-align: center;padding: 4px">{{ item }}</li></ul>
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
                                            <ul><li v-for="item in options.tableData1[${index}].people" style="text-align: center;padding: 4px">{{ item.n }}：{{ item.c }}人</li></ul>
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
                        return `{{ options.current.formatDate(options.tableData1[${index}].update) }}`;
                      }
                    }
                  ]
                }
              }]
            }
          ]
        },
        modal1: false,
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
        for (let i = 0; i < 5; i++) {
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
      changePage (a, b, c, d) {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.$refs.ipage.get('table').options.tableData1 = this.mockTableData1();
      }
    }
  }
</script>
