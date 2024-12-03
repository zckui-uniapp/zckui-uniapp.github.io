# 常见问题

这里列举了一些已知问题和暂时的解决方案

::: details 支持的平台
目前只有微信小程序与 H5是经过我们测试的，支付宝小程序目前存在一些问题，其他小程序平台后续也会逐步适配
:::

::: details 无法自定义组件的class和 style
默认情况下，uniapp在小程序环境组件的 class 和 style 不会被成功编译，如果你想自定义某些组件的 class 或 style，请传递props customClass和customStyle

另外，也可以在manifest.json的mp-weixin字段下添加 `"mergeVirtualHostAttributes": true` 配置，用于合并组件虚拟节点外层属性，之后大部分单根节点的组件即可支持 class 及 style 属性
:::

::: details cli样式引入无效
请详细参考文档  [快速上手](/guide/quick-start)
:::

::: details 某些组件在小程序有一些问题，仅支持 H5
如 tour等这些在文档中有标注 <Badge type="warning">H5</Badge> 的组件，代表仅支持 H5
:::

::: details 为什么使用某些插槽需要传递一个 props 属性
由于 uni-app混乱的插槽机制，导致在微信小程序平台中某些具有默认内容的具名插槽无法正常使用，因此只能增加一个属性判断是否使用该插槽，具体可以查看这个 [issue](https://github.com/dcloudio/uni-app/issues/4229#issuecomment-1612487232)
:::
