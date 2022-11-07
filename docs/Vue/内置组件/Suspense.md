# Suspense

`<Suspense>` 是一个内置组件，是用来在加载异步组件，自带两个 `slot` 分别是 `default` 和 `fallback`。 顾名思义，当组件加载成功时显示 `default` ,反之退回到 `fallback` 状态

```html

 <Suspense>
      <TableWidget
        :columns="columns"
        :model="tableData"
        title="插槽+超链接"
        @onPageChanged="onPageChanged"
        @tableRowLinkHandler="tableRowLinkHandler"
      >
        <template v-slot:action="scope">
          <span class="flex justify-evenly">
            <a href="" @click="() => scope">new</a>
            <a href="">edit</a>
          </span>
        </template>
        <template v-slot:tag>
          <a-tag color="orange">scope </a-tag>
        </template>
      </TableWidget>
      <template #fallback> 加载中.... </template>
  </Suspense>

<script>
  export default defineComponent({
  name: "HomePage",
  components: {
    TableWidget: defineAsyncComponent(() => {
      return import("@c/widgets/table-widget.vue");
    }),

  }
</script>
```