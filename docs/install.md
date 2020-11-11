# 手动安装划词翻译到 Chrome/Edge 浏览器

由于部分用户可能打不开 [Chrome 扩展商店](https://chrome.google.com/webstore/detail/ikhdkkncnoglghljlkmcimlnlhkeamad)，或者有时候官方审核很慢，所以额外提供了下载离线安装包手动安装的方式。

## 一、下载离线安装包

### 在网盘里下载离线安装包

链接: [https://pan.baidu.com/s/17zF7AksigMwLh8McRBVG0w](https://pan.baidu.com/s/17zF7AksigMwLh8McRBVG0w)
提取码: `hmat`

每次提交划词翻译的审核后，我会将离线安装包上传到这个网盘，这样做的好处是即使最新版本的划词翻译由于在审核当中而没有上架 Chrome/Edge 扩展商店，你也可以先通过网盘下载到。

### 通过 Crx4Chrome 网站下载离线安装包

1. 打开 [https://www.crx4chrome.com/extensions/ikhdkkncnoglghljlkmcimlnlhkeamad/](https://www.crx4chrome.com/extensions/ikhdkkncnoglghljlkmcimlnlhkeamad/)
2. 点击 “Download”，此时会跳转到一个新页面，然后点击页面中的 “Download crx file from Crx4Chrome >”

Crx4Chrome 提供的版本可能会比 Chrome 扩展商店的版本低。

### 在 GitHub 里下载离线安装包

目前 GitHub 只提供 v6.4.12 的离线安装包，v7.0 及以上版本的离线安装包请使用上面的下载方式。

1. 打开 [https://github.com/lmk123/crx-selection-translate/releases/latest](https://github.com/lmk123/crx-selection-translate/releases/latest)
2. 在 “Assets” 区域下载 Selection-Translator-{版本号}.crx 文件。

## 二、手动安装

1. 有了离线安装包之后，在 Chrome/Edge 浏览器里打开 `chrome://extensions/`
2. 将离线安装包拖放到这个页面

大功告成！

注意：

- 使用这种方式安装的划词翻译在 Chrome 中也会自动更新。
- 虽然 Edge 也可以安装这个离线安装包，但会显示为“来自其他源 Chrome Web Store”，我不确定它未来会不会自动更新，所以最好在 Edge 扩展商店上架最新版本后，使用 Edge 扩展商店的版本。
- 如果你想永久停留在 v6.4.12 版本，请参考[这个方法](https://github.com/lmk123/crx-selection-translate/issues/759#issuecomment-704015327)，但是旧版本不会再更新，有问题也不会修复了，所以请尽量使用新版本。如果觉得新版本不好用，欢迎在公众号内反馈给我。

<global-footer />
