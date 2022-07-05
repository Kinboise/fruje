(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{667:function(v,t,_){"use strict";_.r(t);var s=_(1),a=Object(s.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"方块字如何电子化-给特正文做字体"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方块字如何电子化-给特正文做字体"}},[v._v("#")]),v._v(" 方块字如何电子化？给"),t("u",[v._v("特正文")]),v._v("做字体")]),v._v(" "),t("p",[t("u",[v._v("特正文")]),v._v("是"),t("u",[v._v("帜和语")]),v._v("的三种官方文字中优先级最高的一种。然而，他是一种方块字，电子化困难，一直依赖手写，使用很受限。近期我终于牺牲了一些优雅性，把"),t("u",[v._v("特正文")]),v._v("字体搞出来了。下面讲讲流程。")]),v._v(" "),t("h2",{attrs:{id:"第一步-确定unicode编码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-确定unicode编码"}},[v._v("#")]),v._v(" 第一步：确定Unicode编码")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("推荐方案")]),v._v(" "),t("p",[v._v("一个编码对应一个"),t("u",[v._v("特正")]),v._v("字，随机顺序，维护一个码表文件就行了")])]),v._v(" "),t("p",[t("u",[v._v("特正文")]),v._v("是一种方块表音文字，造字逻辑有点类似"),t("u",[v._v("谚文")]),v._v("。然而，不像"),t("u",[v._v("谚文")]),v._v("字的总数量有限，"),t("u",[v._v("特正字")]),v._v("理论上是无限多的（无限堆词缀、很长的复辅音等等）。")]),v._v(" "),t("h2",{attrs:{id:"第二步-制作字形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-制作字形"}},[v._v("#")]),v._v(" 第二步：制作字形")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("推荐方案")]),v._v(" "),t("p",[v._v("用平板笔记软件批量手写")])]),v._v(" "),t("p",[v._v("既选择了整字编码，制作字形应该算是最难的一步。如果想做的质量高一些，应该使用电脑上的矢量图编辑软件（如Inkscape、Adobe Illustrator等），然而这个对我来说难度有点高，且工作量太大。")]),v._v(" "),t("p",[v._v("于是我退而求其次。先制作一个8×16的田格纸作背景，使用平板电脑上的笔记软件（享做笔记）手写。写完一批（128个字）就导出为pdf即可。")]),v._v(" "),t("h2",{attrs:{id:"第三步-切割字形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步-切割字形"}},[v._v("#")]),v._v(" 第三步：切割字形")]),v._v(" "),t("p",[v._v("上一步我已经导出了一个写有128个字的pdf。那么，在电脑上用Inkscape去掉田格背景，把字形导入FontForge就可以了。")]),v._v(" "),t("p",[v._v("然而这样工作量还是太大——128个字在同一个文件里，难道我要一个字一个字地复制粘贴进FontForge吗？那必不行，一共一千多字呢。")]),v._v(" "),t("p",[v._v("于是我想到先自动切割然后批量导入。但是我没找到能自动切割矢量图（"),t("code",[v._v(".svg")]),v._v("或"),t("code",[v._v(".pdf")]),v._v("）的程序，而FontForge只收矢量图。")]),v._v(" "),t("p",[v._v("没办法，我选择了这个很不优雅的办法：先把整张矢量图"),t("code",[v._v(".svg")]),v._v("转为整张位图"),t("code",[v._v(".png")]),v._v("，切割位图，切得的位图重新矢量化成"),t("code",[v._v(".svg")]),v._v("。")]),v._v(" "),t("ol",[t("li",[t("code",[v._v(".svg")]),v._v("转"),t("code",[v._v(".png")]),v._v("：直接用Inkscape导出就行")]),v._v(" "),t("li",[v._v("切割位图：我自己写了个Python脚本来自动切割，并重命名")]),v._v(" "),t("li",[t("code",[v._v(".png")]),v._v("转"),t("code",[v._v(".svg")]),v._v("：我找到了vectorizer.com来完成这一步。他的缺点是一次性只能转20张图，不过也算勉强够用了。")])]),v._v(" "),t("h2",{attrs:{id:"第四步-导入字形"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四步-导入字形"}},[v._v("#")]),v._v(" 第四步：导入字形")]),v._v(" "),t("p",[v._v("有了前面的准备，这步就不难了。FontForge支持Python，写个Python脚本就能把刚生产出的一系列字形svg自动导入了。我暂时没研究出来用脚本改字形边界和宽度，好在这俩操作在FontForge的界面里也不难完成。")]),v._v(" "),t("h2",{attrs:{id:"第五步-调整字重"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第五步-调整字重"}},[v._v("#")]),v._v(" 第五步：调整字重")]),v._v(" "),t("p",[v._v("前面的步骤埋了个雷：字太细。于是用FontForge的Elements > Styles菜单中的Change Weight来批量自动加粗。")])])}),[],!1,null,null,null);t.default=a.exports}}]);