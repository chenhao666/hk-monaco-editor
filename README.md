<!--
 * @Description: hk-monaco-editor
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-17 11:09:44
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-20 14:39:00
-->
# main.js全局安装
import hkMonacoEditor from 'hk-monaco-editor'  
Vue.use(hkMonacoEditor)

## Install
1.npm安装：npm install hk-monaco-editor --save  

2.yarn安装：yarn add hk-monaco-editor

3.引用 hk-monaco-editor.js

## Quick Start

<hk-monaco-editor :completList="completList" ref="monaco" @change="changeContent" readOnly></hk-monaco-editor>

* @description: 基于Monaco Editor 组件

 * @param {Array|Object} completList 自动补全数组 自定义提示内容 当为Object时params:{   [keyWords]:{values:Array,key:sring}},keyWords为触发关键字

 * @param {Boolean} readOnly 是否为只读 default:false

 * @param {Boolean} closeMineMap 是否关闭右侧小地图 default:false

 * @param {Boolean} mouseWheelZoom 是否开启缩放 default:false

 * @param {Boolean} dragAndDrop 是否开启拖拽 default:false

 * @param {String} defaultCode 默认展示代码 default:''

 * @param {String} oldCode 默认旧代码展示 default:'' ---如果存在则会创建diff编辑器

 * @param {String} language 代码语言类型 default:'sql' 
 * 
 * @function: updateOptions() 修改编辑器配置

 * @function: updateOriginalOptions() 修改旧代码编辑器配置--适用于diff编辑器

 * @function: updateModifiedOptions() 修改新代码编辑器配置--适用于diff编辑器

 * @function: setOriginalValue() 修改旧代码编辑器配置的值--适用于diff编辑器

 * @function: formatSql() 编辑器的内容格式化（sql）

 * @function: getValue() 获取当前编辑器的内容

 * @function: setValue(Value:string) 设置当前编辑器的内容

 * @function: destroyEditor() 销毁当前编辑器
 
 * @function: change() 监听变化


## main.js全局安装
import hkMonacoEditor from 'hk-monaco-editor' 

Vue.use(hkMonacoEditor)
