<!--
 * @Description: Monaco Editor组件
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:22:38
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-17 15:11:34
-->
<template>
 <div class="editor">
    <div id="monaco"></div>
 </div>
</template>

<script>
import { format } from 'sql-formatter';
import Editor from '../utils/MEditor'
/**
 * @description: 基于Monaco Editor 组件
 * @param {*} completList 自动补全数组 自定义提示内容 当为Object时params:{[keyWords]:{values:Array,key:sring}},keyWords为触发关键字
 * @param {*} readOnly 是否为只读 default:false
 * @param {*} closeMineMap 是否关闭右侧小地图 default:false
 * @param {*} mouseWheelZoom 是否开启缩放 default:false
 * @param {*} dragAndDrop 是否开启拖拽 default:false
 * @function: formatSql() 编辑器的内容格式化（sql）
 * @function: getValue() 获取当前编辑器的内容
 * @function: setValue(Value:string) 设置当前编辑器的内容
 * @function: destroyEditor() 销毁当前编辑器
 * @function: change() 监听变化
 * @return {*}
 * @function: 这是一个方法函数
 * @author: Chen
 */
export default {
  name: 'hk-monaco-editor',
  props:{
    completList:{
      type:Array | Object,
      default:()=>null
    },
    readOnly:{
      type:Boolean,
      default:false
    },
    closeMineMap:{
      type:Boolean,
      default:false
    },
    mouseWheelZoom:{
      type:Boolean,
      default:false
    },
    dragAndDrop:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
      editor:{}
    }
  },
  created() {
   
  },
  mounted(){
    const { completList,readOnly,closeMineMap,mouseWheelZoom,dragAndDrop }=this;
    const editor=new Editor();
    editor.createEditor('monaco');
    editor.openCompletTip(completList);
    editor.updateOptions({
      readOnly,
      minimap:{
        enabled:!closeMineMap
      },
      mouseWheelZoom,
      dragAndDrop
    })
    this.editor=editor;
    this.change();
  },
  methods:{
    formatSql(){
      let value=this.editor.getValue();
      this.editor.setValue(format(value));
    },
    getValue(){
      return this.editor.getValue();
    },
    setValue(val){
      this.editor.setValue(String(val));
    },
    destroyEditor(){
      this.editor.destroyEditor();
    },
    change() {
      this.editor.listenEditor(val=>{
        this.$emit('change',val)
      })
    }
  }
}
</script>

<style scoped>
 #monaco{
    width: 100%;
    min-height: 200px;
 }
 .editor{

 }
</style>
