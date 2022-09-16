# provide/inject 依赖注入

## 为什么会出现provide/inject 依赖注入
在通常情况下，父组件向子组件传递数据，会使用 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>props</code> 。想象一下：如果有多层嵌套的组件，形成一颗巨大的组件树，某个更深层次的组件需要获得祖先组件的数据时，只能使用  <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>props</code> 来一级一级的向下传递，这样会非常麻烦。
![props逐级向下传递](/images/props.png)

<code style='background: #f1f1f1;border-radius:4px;'>provide</code> 和 <code style='background: #f1f1f1;border-radius:4px;'>inject</code> 很好的解决了这种问题，<code style='background: #f1f1f1;border-radius:4px;'>provide</code> 可以直接由父组件提供数据，其后代组件都可以用 <code style='background: #f1f1f1;border-radius:4px;'>inject</code> 来接收父组件提供的数据。
![provideInject](/images/provide-inject.png)


## Provide(提供)
要为后代组件提供数据，需要用到 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>provide</code> 选项：

<code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>provide</code> 接收两个参数
是key属性名，value是提供属性值
```js
provide(key: sting | number | InjectionKey<Ref<string>>, value:Ref<string>):void
```

### 组件中使用
```js
// parent component
provide('message', hello)
```

## 应用层的Provide
除了在组件中提供依赖，还可以在整个应用层提供依赖：
```js
import { createApp } from 'vue'
const app = createApp(App);

app.provide(/* 注入名 */ 'app', /* 值 */'App-Provide')
```
在应用层提供的数据在所有组件都可以注入。



## inject(注入)
要注入上层组件提供的数据，需要使用 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>inject</code> 选项：

<code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>inject</code> 接收一个上层提供数据的key 和 一个默认值
```js
inject<T>(key: InjectionKey<T> | string, default: unknown): T | undefined;
```

## 使用 Symbol 作注入名 (安全注入)
可以通过 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>InjectionKey</code> 在提供者和注入者之间，同步注入值的类型。

首先需要在 <code style='background: #f2f2f2;color:#c7254e;border-radius:4px;'>@/key</code> 创建注入索引：
```ts
import { InjectionKey, Ref } from 'vue'
export interface UserInfo {
  username: string;
}
export const userInfoKey: InjectionKey<Ref<UserInfo | undefined>> = Symbol();
```

父组件中 <code style='background: #f1f1f1;color:#33a06f;border-radius:4px;'>project</code> 使用这些key代替字符串索引，这样在提供时会进行一次校验，以防提供错误的类型
```ts
import { ref, provide } from ''
import { userInfoKey, UserInfo } from "@/key";

setup() {
  const msg = ref<UserInfo>({ username: "uu" });

  provide(userInfoKey, msg);
}
```

在后代组件中直接注入提供的key
```ts
import { inject } from 'vue'
import { userInfoKey } from "@/key";

setup() {
  const info = inject(userInfoKey);
  // -> logs { "username": "uu" }
}
```