/*
 * @Description: Monaco editor使用
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-13 14:14:46
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-17 13:20:54
 */
import { editor, languages } from 'monaco-editor/esm/vs/editor/edcore.main.js';
import 'monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution';
import { language as sqlMap } from 'monaco-editor/esm/vs/basic-languages/sql/sql';
/**
 * @description: Monaco Editor 部分方法使用
 * @param {*}
 * @function: setTheme(themeName:string,options:Object) 配置编辑器主题颜色等
 *              options:{
 *                  base:string,//基础色调：'vs'| 'vs-dark' | 'hc-black';
                    inherit: boolean,//是否继承
                    rules:Array<Object>,//规则[{token: string;foreground?: string;background?: string;fontStyle?: string;}]
                    colors:Object//颜色配置 { [colorId:string]:string }
 *              }
 * @function: createEditor(container_id:string,code:string,language:string) 创建一个编辑器
 *             params:{ container_id:编辑器ID,code:编辑器默认内容,language:编辑器语言 }
 * @function: addNewEditor(code:string,language:string) 随机生成编辑器
 *              params:{ code:编辑器默认内容,language:编辑器语言 }
 * @function: openCompletTip(addSuggestions:Array<string> | Object | undefined,language:string) 开启自动补全提示功能
 *              params:{ 
 *                  addSuggestions:自定义提示内容 当为Object时params:{[keyWords]:{values:Array,key:sring}},keyWords为触发关键字
 *                  language:编辑器语言
 *              }
 * @function: updateOptions(options:Object) 修改当前编辑器属性
 * @function: readOnly() 编辑器只读
 * @function: closeMineMap() 关闭小地图
 * @function: mouseWheelZoom() 开启鼠标控制文本放大缩小
 * @function: dragAndDrop() 开启拖动文本
 * @function: getValue() 获取当前编辑器的内容
 * @function: setValue(Value:string) 设置当前编辑器的内容
 * @function: destroyEditor() 销毁当前编辑器
 * @function: listenEditor() 为当前编辑器设置监听函数
 * @return {Class} 返回Editor类
 * @author: Chen
 */
export default class Editor {
    constructor() {
        // 初始化变量
        // this.fileCounter = 0;
        //当前编辑器
        this.editorObj = {};
        //语法关键字map
        this.keywordsMap = {
            'sql': sqlMap.keywords
        }

        //默认显示代码
        this.defaultCode = [
            'SELECT * FROM Table'
        ].join('\n');

        //默认主题
        this.defaultTheme=editor.defineTheme('defaultTheme', {
            base:'vs',
            inherit: true,
            rules:[{ background: 'EDF9FA' }],
            colors: { 'editor.lineHighlightBackground': '#0000FF20' }
        });
        this.setTheme();
    }

    setTheme(themeName='defaultTheme', options) {
        if(options) editor.defineTheme(themeName,options);
        editor.setTheme(themeName);
    }

    createEditor(container_id, code = this.defaultCode, language = 'sql') {
        let model = editor.createModel(code, language);
        let newEditor = editor.create(document.getElementById(container_id), {
            model: model,
        });
        this.editorObj = newEditor;
        //设置监听
        // this.listenEditor();
    }

    // addNewEditor(code, language='sql') {
    //     let new_container = document.createElement("DIV");
    //     new_container.id = "container-" + this.fileCounter.toString(10);
    //     new_container.className = "container";
    //     document.getElementById("root").appendChild(new_container);
    //     this.createEditor(new_container.id, code, language);
    //     this.fileCounter += 1;
    // }

    openCompletTip(addSuggestions, language = 'sql') {
        //获取默认关键字
        let keyWords = this.keywordsMap[language];
        languages.registerCompletionItemProvider(language, { 
            provideCompletionItems(model, position, context) {
                //判断传入参数是否是数组
                if (addSuggestions.constructor === Array) {
                    return {
                        suggestions: keyWords.concat(addSuggestions).map(v => {
                            return {
                                label: v, // 显示的提示内容
                                kind: languages.CompletionItemKind['Function'], // 用来显示提示内容后的不同的图标
                                insertText: v, // 选择后粘贴到编辑器中的文字
                                detail: '关键字', // 提示内容后的说明
                            }
                        }),
                        incomplete: true
                    };
                }
                //存在关键字 直接返回对应的 如果没有则返回默认关键字
                if (addSuggestions && Object.keys(addSuggestions).length > 0 && addSuggestions[context.triggerCharacter]) {
                    return {
                        suggestions: addSuggestions[context.triggerCharacter].values.map(v => {
                            return {
                                label: v, // 显示的提示内容
                                kind: languages.CompletionItemKind['Function'], // 用来显示提示内容后的不同的图标
                                insertText: v, // 选择后粘贴到编辑器中的文字
                                detail: addSuggestions[context.triggerCharacter].key, // 提示内容后的说明
                            }
                        }),
                        incomplete: true
                    };
                } else {
                    return {
                        suggestions: keyWords.map(v => {
                            return {
                                label: v, // 显示的提示内容
                                kind: languages.CompletionItemKind['Function'], // 用来显示提示内容后的不同的图标
                                insertText: v, // 选择后粘贴到编辑器中的文字
                                detail: '关键字', // 提示内容后的说明
                            }
                        }),
                        incomplete: true
                    };
                }
            },
            triggerCharacters: Object.keys(addSuggestions).concat(' ') // 触发提示的字符，可以写多个
        });
    }

    updateOptions(options) {
        this.editorObj.updateOptions(options);
    }

    readOnly() {
        this.editorObj.updateOptions({
            readOnly: true
        });
    }

    closeMineMap(){
        this.editorObj.updateOptions({
            minimap: {
                enabled:false
            }
        });
    }

    mouseWheelZoom(){
        this.editorObj.updateOptions({
            mouseWheelZoom:true
        });
    }

    dragAndDrop(){
        this.editorObj.updateOptions({
            dragAndDrop:true
        });
    }
    
    getValue() {
        return this.editorObj.getValue();
    }

    setValue(value) {
        this.editorObj.setValue(value);
    }

    destroyEditor() {
        this.editorObj.dispose();
    }
    
    listenEditor(callback) {
        this.editorObj.onDidChangeModelContent(() => {
            // console.log('内容改变', this.getValue());
            // const currentText = this.editor.getValue();
            // let str = currentText.substr(0, this.caretOffset + 1);
            callback(this.getValue())
        });
    }
}