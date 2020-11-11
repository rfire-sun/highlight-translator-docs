# 更新日志

## v7.2.0

#### bug 修复

- [#797](https://github.com/lmk123/crx-selection-translate/issues/797) **由于 [https://translate.google.cn](https://translate.google.cn) 站点改版，原有的基于这个站点的谷歌翻译接口不能用了，所以在 v7.2.0 版本中换用了另一种谷歌翻译的接口，但它不提供语音朗读功能。**

#### 新功能

- [#729](https://github.com/lmk123/crx-selection-translate/issues/729) 将网页划词中面板的固定状态和位置改为全局统一

#### 功能改进

- [#783](https://github.com/lmk123/crx-selection-translate/issues/783) 将右键菜单中 PDF 相关的菜单项的加速键改为 P
- [#792](https://github.com/lmk123/crx-selection-translate/issues/792) 在内置 PDF 阅读器页面现在会始终启用网页划词，即使你全局禁用了网页划词也会启用
- [#800](https://github.com/lmk123/crx-selection-translate/issues/800) 在内置 PDF 阅读器页面添加了可以拖放 PDF 文件进来的提示，并添加了复制 PDF 网址的按钮
- [#794](https://github.com/lmk123/crx-selection-translate/issues/794) 在 Chrome 中，如果你拖放进来电脑里的 PDF 文件，然后在右键菜单中选择“在划词翻译中打开”，由于 Chrome 不会提供电脑内文件的地址，所以在之前的划词翻译版本中，此时点了不会有任何反应，或者虽然打开了内置的 PDF 阅读器，但会提示错误；在 v7.2.0 版本中，会始终弹出一个空白的 PDF 阅读器，你可以自行将文件拖放进来
- 将全局禁用 / 启用网页划词的功能放在了扩展图标弹出页里
- 在扩展图标弹出页中添加了打开“内置 PDF 阅读器”和“独立翻译窗口”的按钮
- 减少了约 80KB 安装包大小

## v7.1.7

#### bug 修复

- [#709](https://github.com/lmk123/crx-selection-translate/issues/709) 修复了在 macOS 中网页划词窗口拖动后会固定在网页左上角无法拖动的问题

## v7.1.6

#### 功能改进

- [#385](https://github.com/lmk123/crx-selection-translate/issues/385) 给右键菜单选项添加了加速键，但仅对 Windows 系统有效

#### bug 修复

- [#742](https://github.com/lmk123/crx-selection-translate/issues/742) 修复在 MacOS 的 Chrome 里，键盘右边的 Command 键不能触发翻译的问题
- [#777](https://github.com/lmk123/crx-selection-translate/issues/777) 修复谷歌翻译语音变慢的问题

## v7.1.5

#### 功能改进

- [#697](https://github.com/lmk123/crx-selection-translate/issues/697) 让网址筛选的规则匹配所有端口号
- 给有道翻译添加了荷兰语支持
- 如果语音播放时出现了错误会给用户提示

#### bug 修复

- [#774](https://github.com/lmk123/crx-selection-translate/issues/774) 修复在 Chrome 自带 PDF 阅读器的右键菜单中没有“在划词翻译中打开此 PDF”的选项的问题

## v7.1.4

#### 功能改进

- [#753](https://github.com/lmk123/crx-selection-translate/issues/753) 调整翻译面板布局，让界面更小巧、更紧凑
- 给扩展图标弹窗里的“设置”二字添加链接
- 给网页划词窗口的关闭按钮加上快捷键 Esc 的提示

#### bug 修复

- [#770](https://github.com/lmk123/crx-selection-translate/issues/770) 修复独立翻译窗口没有读取剪切板的问题
- [#744](https://github.com/lmk123/crx-selection-translate/issues/744) 修复在部分网站中点击空白处没有隐藏窗口的问题

## v7.1.3

#### bug 修复

- [#750](https://github.com/lmk123/crx-selection-translate/issues/750) 修复了面板中的文本框遮挡住了语种切换下拉框的问题

## v7.1.2

#### bug 修复

- 修复了扩展图标弹窗中的翻译面板没有自动读取剪切板的问题

## v7.1.1

#### 新功能

- 在设置中添加了调整网页划词弹窗方向的功能

#### 功能改进
- 将面板最小宽度从 300px 改为跟旧版一致的 250px
- 在设置页的“翻译源”部分添加了文本提示，告知用户这里不是用于调整翻译源的以及在哪调整翻译源

#### bug 修复

- [#749](https://github.com/lmk123/crx-selection-translate/issues/749) **修复了上个版本添加的提示窗口导致在所有网站中的输入框中指针聚焦失效的问题**，这个 bug 导致了诸如“B 站 / 微博首页搜索框点击后没有弹出热搜菜单”、“网页中的日历选择器在点击输入框后没有弹出来”等问题

## v7.1.0

### 功能改进

- [#718](https://github.com/lmk123/crx-selection-translate/issues/718) 将翻译按钮尺寸调小
- [#706](https://github.com/lmk123/crx-selection-translate/issues/706) 对界面布局进行了一系列变化：将语种切换等功能放进了点击设置图标后展开的快捷选项面板中，并给了用户一个弹窗提示，告知了界面的变化；让翻译面板变得紧凑一点；去掉了菜单按钮，直接将功能显示在了面板上等
- [#743](https://github.com/lmk123/crx-selection-translate/issues/743) 次要目标语种由固定英文改为可以在设置项中配置

#### bug 修复

- [#726](https://github.com/lmk123/crx-selection-translate/issues/726) 修复 Octotree 插件的侧边栏挡住了网页划词面板的问题

## v7.0.6

- 修复在文本框中选中文本然后按下 Ctrl + Space 切换输入法时会触发翻译的问题
- 在“关于划词翻译”页面添加赞助方式
- 添加按下 ESC 键隐藏网页划词面板的功能
- 将读取剪切板做成设置项，现在可以关闭此功能
- 修复重试按钮被隐藏的 bug
- **修复翻译结果有很多换行的问题**，这些换行同时也导致翻译结果不准确
- 修复独立窗口和扩展图标弹窗中右侧的语种选择弹窗撑开页面的问题

## v7.0.5

- 将黑/白名单改为在 popup 中让用户可以方便的开启、关闭，更易于使用和理解
- 修复多行的翻译结果在复制后变成了一行的问题
- 如果翻译结果提供了音标，则不会在源语种右侧显示翻译按钮了，因为音标右侧会有按钮

## v7.0.4

- 当源语种和目标语种都是中文时，将结果翻译成英语
- 支持配合辅助键 Ctrl / Command 使用网页划词（划词时或划词后按下辅助键）
- 将面板上的图标改为在鼠标移动上去之后才显示
- 进一步去掉复制翻译结果时添加的“音标：”、“词典释义：”这些不属于翻译结果的内容
- 将扩展图标快捷键改为跟 v6 版本一致
- 给翻译结果添加播放功能
- 面板的菜单改为鼠标移动上去就自动打开，无需点击

## v7.0.3

- 当用户从 v6 升级到 v7.0.3 及以上版本时，继承 v6 的设置项
- 如果独立窗口的快捷键被清除了，在扩展图标弹窗中给出提示
- 复制的翻译结果去掉了“翻译结果来自xxx”的文字
- 将复制按钮从菜单中提去出来直接放在面板上
- 打开独立翻译窗口和扩展图标弹窗时，自动选择文本框内的内容并聚焦到文本框内
- 修复文本框不能输入空格和回车符号的 bug

## v7.0.2

- 呼出已有独立窗口时，默认从剪切板粘贴内容并翻译
- 将 popup 中的黑白名单信息改为点击后展开的形式
- 将翻译面板重新加回扩展图标弹窗中，并给支持全局快捷键的用户推荐独立翻译窗口
- 将扩展图标的快捷键和翻译网页中选中的文本的快捷键重新添加回来，跟旧版保持一致

## v7.0.1

全新版本的划词翻译发布！虽然版本号是 v7.0.1，但其实是新版本的第一个发布版本。

新版本有以下改进：

- 全新的、更现代化的界面，可以同时显示多个翻译源的结果
- 新增了独立翻译窗口的翻译模式，可以在任意其他程序中呼出进行翻译

## v6.4.12

v6 版本的更新日志请查看 [https://github.com/lmk123/crx-selection-translate/releases](https://github.com/lmk123/crx-selection-translate/releases)。