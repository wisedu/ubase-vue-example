<template>
  <div :class="config.class" :style="config.style">
    <Row v-for="row in config.layout" :class="row.class" :style="row.style">
      <i-col :span="col.span" v-for="col in row.cols" :class="col.class" :style="col.style">
        <div v-if="col.content">{{{col.content}}}</div>
        <div v-if="col.component">
          <component :is="col.component" :options="col.options" :events="col.events"
                     class="{{col.name?('comp-name-'+col.name):''}}"></component>
        </div>
      </i-col>
    </Row>
    <Modal
      :visible.sync="modal[item.name]"
      :title="item.title"
      @on-ok="item.ok"
      @on-cancel="item.cancel" v-for="item in config.modals">
      <component :is="item.component" :options="item.options" :events="item.events" class="{{item.name?('comp-name-'+item.name):''}}"></component>
    </Modal>
  </div>
</template>
<script>
  export default {
    props: {config: Object},

    data: function () {
      return {
        modal: {}
      }
    },

    methods: {
      __getComponent(comp, name){
        var res = null
        _.each(comp.$children, (item) => {
          if (res) {
            return false
          }
          if (_.includes(item.$el.classList, 'comp-name-' + name)) {
            res = item
          } else {
            res = this.__getComponent(item, name)
          }
        })
        return res
      },

      get(name){
        return this.__getComponent(this, name)
      }
    },

    created(){
      _.each(this.config.modals, (modal) => {
        this.$set('modal.' + modal.name, false)
      })
    }
  }
</script>
