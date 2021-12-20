<!--
 * @Description: 这是一个描述
 * @Version: 2.0
 * @Autor: Chen
 * @Date: 2021-12-16 10:41:56
 * @LastEditors: Chen
 * @LastEditTime: 2021-12-17 16:50:31
-->
# 使用库
npm install monaco-editor --save 
monaco-editor/esm/vs/editor/editor.api.js 基础API库
monaco-editor/esm/vs/editor/edcore.main.js editor 基础库集合(包含API库)
monaco-editor/esm/vs/basic-languages/mysql/mysql mysql语言基础库 .contribution 注册语言
monaco-editor/esm/vs/basic-languages/sql/sql sql语言基础库 .contribution 注册语言

# Methods --editor.api.d.ts  --editor.api.js
namespace editor{
    creat(domElement: HTMLElement, options, override)  创建编辑器
    onDidCreateEditor(domElement: HTMLElement, options, override) 创建编辑器时发出。*创建差异编辑器可能会导致使用两个编辑器调用此侦听器
    createDiffEditor(domElement: HTMLElement, options, override) 在“DomeElement”下创建一个新的差异编辑器。
    createDiffNavigator(diffEditor, opts)//创建差异指南

    createModel(value,language,uri) 创建一个编辑器模型
    setModelLanguage(model, languageId) 更改模型语言
    setModelMarkers(model, owner, markers) 设置模型标记
    getModelMarkers(filter) 获取模型标记  return list of markers
    onDidChangeMarkers((e)=>{}) 监听模型变化
    getModel(uri) 获取具有uri的模型
    getModels() 获取所有模型
    onDidCreateModel((e)=>{}) 创建模型回调监听
    onWillDisposeModel((e)=>{}) 销毁模型回调
    onDidChangeModelLanguage(e=>{}) 设置不同模型语言回调
    createWebWorker(options) 创建具有内置模型同步功能的新web worker

    colorizeElement(domNode: HTMLElement, options) 使用属性“data lang”为“domNode”的内容着色。
    colorize(text: string, languageId: string, options) 使用语言为文本着色。
    colorizeModelLine(model, lineNumber: number, tabSize?: number) 为模型中的线着色
    tokenize(text: string, languageId: string) 使用语言为文本着色
    defineTheme(themeName: string, themeData) 定义或更新主题
    setTheme(themeName: string) 切换主题
    remeasureFonts() 清理缓存并重新测量字体

    registerCommand(id: string, (accessor: any, ...args: any[]) => void) 注册一个命令
}

namespace languages{
    register(language) 注册新语言
    getLanguages() 获取所有注册语言的信息。
    getEncodedLanguageId(languageId: string) 获取语言id return number
    onLanguage(languageId: string, callback: () => void) 首次需要某种语言时发出的事件(例如，模型已设置)

    setLanguageConfiguration(languageId: string, configuration) 设置语言的编辑配置
    setColorMap(colorMap: string[] | null) 更改用于标记颜色的颜色贴图。*支持的格式(十六进制)：#RRGGBB、$RRGGBBAA、#RGB、#RGBA
    setTokensProvider(languageId: string, provider) 设置语言的令牌(手动实现)
    setMonarchTokensProvider(languageId: string, languageDef) 设置语言的令牌(Monator实现)

    registerReferenceProvider(languageId: string, provider) 注册参考提供者(用于参考搜索)
    registerRenameProvider(languageId: string, provider) 注册重命名(例如，由重命名符号使用)。
    registerSignatureHelpProvider(languageId: string, provider) 注册签名帮助(用于参数提示等)
    registerHoverProvider(languageId: string, provider) 注册悬停(例如编辑器悬停使用)。
    registerDocumentSymbolProvider(languageId: string, provider) 注册文档符号(例如大纲使用)
    registerDocumentHighlightProvider(languageId: string, provider) 注册文档突出显示(用于突出显示事件)。
    registerDefinitionProvider(languageId: string, provider) 注册一个定义(例如，由go to definition使用)
    registerImplementationProvider(languageId: string, provider)注册一个实施提供商(例如，由go to implementation使用)
    registerTypeDefinitionProvider(languageId: string, provider) 注册一个类型定义(例如，转到类型定义)
    registerCodeLensProvider(languageId: string, provider) 注册代码镜头(例如，内联代码镜头使用)
    registerCodeActionProvider(languageId: string, provider,metadata)注册代码操作供程序(例如由quick fix使用)
    registerDocumentFormattingEditProvider(languageId: string, provider) 注册一个只能处理整个模型的格式化程序
    registerDocumentRangeFormattingEditProvider(languageId: string, provider)注册可以处理模型内范围的格式化程序
    registerOnTypeFormattingEditProvider(languageId: string, provider) 注册一个格式化程序，在用户键入时可以进行格式化
    registerLinkProvider(languageId: string, provider) 注册可以在文本中查找链接的链接
    registerCompletionItemProvider(languageId: string, provider) 注册自动补全(例如，建议使用)
    registerColorProvider(languageId: string, provider) 注册文档颜色(由颜色选择器、颜色装饰器使用)
    registerFoldingRangeProvider(languageId: string, provider) 注册一个折叠范围提供者
    registerDeclarationProvider(languageId: string, provider) 注册声明
    registerSelectionRangeProvider(languageId: string, provider) 注册选择范围
    registerDocumentSemanticTokensProvider(languageId: string, provider)注册文档语义标记
    registerDocumentRangeSemanticTokensProvider(languageId: string, provider)注册文档范围语义标记
    registerInlineCompletionsProvider(languageId: string, provider)注册内联自动补全完成
    registerInlayHintsProvider(languageId: string, provider) 注册提示
}

# colorId --自定义主题对应的colorID颜色设置
('foreground'); // 整体前景色。此颜色仅在未被组件覆盖时使用。
('errorForeground'); // 错误消息的整体前景色。此颜色仅在未被组件覆盖时使用。
('descriptionForeground'); // 提供附加信息的描述文本的前景色，例如标签。
('focusBorder'); //聚焦元素的整体边框颜色。此颜色仅在未被组件覆盖时使用。
('contrastBorder'); //元素周围有一个额外的边框，将元素与其他元素分隔开来，以获得更大的对比度
('contrastActiveBorder'); //活动元素周围有一个额外的边框，将它们与其他元素分开，以获得更大的对比度。
('selection.background'); //工作台中文本选择的背景色(例如输入字段或文本区域)。请注意，这不适用于编辑器中的选择。
('textSeparator.foreground'); //文本分隔符的颜色
('textLink.foreground'); //文本中链接的前景色。
('textLink.activeForeground'); //文本中活动链接的前景色
('textPreformat.foreground'); //预格式化文本段的前景色
('textBlockQuote.background'); //文本中块引号的背景色。
('textBlockQuote.border'); //文本中块引号的边框颜色。
('textCodeBlock.background'); //文本中代码块的背景色
('widget.shadow'); //在编辑器中查找/替换等小部件的阴影颜色。
('input.background'); //输入框背景
('input.foreground'); //输入框前景
('input.border'); //输入框边框
('inputOption.activeBorder'); //输入字段中激活选项的边框颜色
('input.placeholderForeground'); //占位符文本的输入框前景色
('inputValidation.infoBackground'); //输入信息严重性的验证背景色。
('inputValidation.infoBorder'); //输入信息严重性的验证边框颜色。
('inputValidation.warningBackground'); //为警告信息输入验证背景色。
('inputValidation.warningBorder'); //输入警告严重性的验证边框颜色。
('inputValidation.errorBackground'); //输入错误严重性的验证背景色。
('inputValidation.errorBorder'); //输入错误严重性的验证边框颜色。
('dropdown.background'); //下拉式背景。
('dropdown.foreground'); //下拉前景。
('dropdown.border'); //下拉边框
('list.focusBackground'); //列表/树处于活动状态时，焦点项目的列表/树背景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.focusForeground'); //列表/树处于活动状态时，焦点项目的列表/树前景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.activeSelectionBackground'); // 列表/树处于活动状态时所选项目的列表/树背景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.activeSelectionForeground'); //列表/树处于活动状态时所选项目的列表/树前景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.inactiveSelectionBackground'); //列表/树处于非活动状态时所选项目的列表/树背景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.inactiveSelectionForeground'); //列表/树处于非活动状态时所选项目的列表/树背景色。活动列表/树有键盘焦点，非活动列表/树没有。
('list.hoverBackground'); //使用鼠标悬停在项目上时的列表/树背景。
('list.hoverForeground'); //使用鼠标悬停在项目上方时，列表/树前景。
('list.dropBackground'); //使用鼠标移动项目时，列表/树拖放背景。
('list.highlightForeground'); //列表/树在列表/树内搜索时，匹配的前景色将高亮显示。
('pickerGroup.foreground'); //用于分组标签的快速选择器颜色。
('pickerGroup.border'); //用于分组边框的快速选择器颜色。
('button.foreground'); //按钮前景色。
('button.background'); //按钮背景色。
('button.hoverBackground'); //悬停时的按钮背景色。
('badge.background'); //徽章背景色。徽章是小型信息标签，例如用于搜索结果计数。
('badge.foreground'); //徽章前景色。徽章是小型信息标签，例如用于搜索结果计数。
('scrollbar.shadow'); //滚动条阴影指示视图已滚动。
('scrollbarSlider.background'); //滑块背景色。
('scrollbarSlider.hoverBackground'); //鼠标悬停时的滑块背景色
('scrollbarSlider.activeBackground'); //滑块处于活动状态时的背景色。
('progressBar.background'); //进度条的背景色，可显示长时间运行的操作。
('editor.background'); //编辑器背景色。
('editor.foreground'); //编辑器默认前景色。
('editorWidget.background'); //编辑器小部件的背景色，例如查找/替换
('editorWidget.border'); //编辑器小部件的边框颜色。仅当小部件选择有边框且颜色未被小部件覆盖时，才使用颜色。
('editor.selectionBackground'); //编辑器选择的颜色。
('editor.selectionForeground'); //所选文本的颜色以获得高对比度。
('editor.inactiveSelectionBackground'); //非活动编辑器中所选内容的颜色。
('editor.selectionHighlightBackground'); //与选择内容相同的区域的颜色。
('editor.findMatchBackground'); //当前搜索匹配的颜色。
('editor.findMatchHighlightBackground'); //其他搜索匹配项的颜色。
('editor.findRangeHighlightBackground'); //为限制搜索的范围添加颜色
('editor.hoverHighlightBackground'); //在显示悬停的单词下方高亮显示。
('editorHoverWidget.background'); //编辑器悬停的背景色。
('editorHoverWidget.border'); //编辑器悬停的边框颜色。
('editorLink.activeForeground'); // 活动链接的颜色
('diffEditor.insertedTextBackground'); //插入的文本的背景色
('diffEditor.removedTextBackground'); //已删除文本的背景色。
('diffEditor.insertedTextBorder'); //插入的文本的轮廓颜色。
('diffEditor.removedTextBorder'); //删除的文本的轮廓颜色。
('editorOverviewRuler.currentContentForeground'); //内联合并冲突的当前概览。
('editorOverviewRuler.incomingContentForeground'); //内联合并冲突的传入概览。
('editorOverviewRuler.commonContentForeground'); //内联合并冲突的公共祖先概述。
('editor.lineHighlightBackground'); //光标位置处线条高亮显示的背景色。
('editor.lineHighlightBorder'); //光标位置线周围边框的背景色。
('editor.rangeHighlightBackground'); //高亮显示范围的背景色，如“快速打开”和“查找”功能。
('editorCursor.foreground'); //编辑器光标的颜色。
('editorWhitespace.foreground'); //编辑器中空白字符的颜色。
('editorIndentGuide.background'); //编辑器缩进辅助线的颜色。
('editorLineNumber.foreground'); //编辑器行号的颜色
('editorLineNumber.activeForeground'); //编辑器活动行号的颜色
('editorRuler.foreground'); //编辑器标尺的颜色
('editorCodeLens.foreground'); //编辑器代码镜头的前景色
('editorInlayHint.foreground'); //编辑器嵌入提示的前景色
('editorInlayHint.background'); //编辑器镶嵌提示的背景色
('editorBracketMatch.background'); //匹配括号后的背景色
('editorBracketMatch.border'); //匹配括号和方框的颜色
('editorOverviewRuler.border'); //概览标尺边框的颜色
('editorGutter.background'); //编辑器边沟的背景色。边沟包含字形边距和行号
('editorError.foreground'); //编辑器中错误波形的前景色
('editorError.border'); //编辑器中错误波形的边框颜色。
('editorWarning.foreground'); //编辑器中警告波形的前景色。
('editorWarning.border'); //编辑器中警告波形的边框颜色。
('editorMarkerNavigationError.background'); // 编辑器标记导航小部件错误颜色。
('editorMarkerNavigationWarning.background');//编辑器标记导航小部件警告颜色。
('editorMarkerNavigation.background');//编辑器标记导航小部件背景。
('editorSuggestWidget.background');//建议小部件的背景色。
('editorSuggestWidget.border');//建议小部件的边框颜色。
('editorSuggestWidget.foreground');//建议小部件的前景色。
('editorSuggestWidget.selectedBackground');//“建议”小部件中所选条目的背景色。
('editorSuggestWidget.highlightForeground');//“建议”窗口小部件中突出显示的匹配颜色。
('editor.wordHighlightBackground');//读取访问期间符号的背景色，如读取变量。
('editor.wordHighlightStrongBackground');//写入访问期间符号的背景色，如写入变量。
('peekViewTitle.background');//查看标题区域的背景色。
('peekViewTitleLabel.前台');//查看视图标题的颜色。
('peekViewTitleDescription.前台');//查看标题信息的颜色。
('peekView.border');//查看视图边框和箭头的颜色。
('peekViewResult.background');//查看结果列表的背景色。
('peekViewResult.lineForeground');//peek view结果列表中线条节点的前景色。
('peekViewResult.fileForeground');//peek view结果列表中文件节点的前景色。
('peekViewResult.selectionBackground');//查看结果列表中所选条目的背景色。
('peekViewResult.selectionForeground');//查看结果列表中选定项的前景色。
('peekViewEditor.background');//peek视图编辑器的背景色。
('peekViewEditorGutter.background');//查看视图编辑器中檐槽的背景色。
('peekViewResult.matchHighlightBackground');//匹配peek view结果列表中的突出显示颜色。
('peekViewEditor.matchHighlightBackground');//在peek视图编辑器中匹配高亮显示颜色。
