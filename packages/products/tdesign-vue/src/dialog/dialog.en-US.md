:: BASE_DOC ::

## API
### DialogCard Props

name | type | default | description | required
-- | -- | -- | -- | --
body | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
cancelBtn | String / Object / Slot / Function | - | Typescript：`string \| ButtonProps \| TNode \| null`，[Button API Documents](./button?tab=api)。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts)。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts) | N
closeBtn | String / Boolean / Slot / Function | true | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
confirmBtn | String / Object / Slot / Function | - | Typescript：`string \| ButtonProps \| TNode \| null`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
footer | Boolean / Slot / Function | true | Typescript：`boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
header | String / Boolean / Slot / Function | true | Typescript：`string \| boolean \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
theme | String | default | options：default/info/warning/danger/success | N
onCancel | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onCloseBtnClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N
onConfirm | Function |  | Typescript：`(context: { e: MouseEvent \| KeyboardEvent }) => void`<br/> | N

### DialogCard Events

name | params | description
-- | -- | --
cancel | `(context: { e: MouseEvent })` | \-
close-btn-click | `(context: { e: MouseEvent })` | \-
confirm | `(context: { e: MouseEvent \| KeyboardEvent })` | \-

### Dialog Props

name | type | default | description | required
-- | -- | -- | -- | --
attach | String / Function | - | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
closeOnEscKeydown | Boolean | true | \- | N
closeOnOverlayClick | Boolean | true | \- | N
confirmOnEnter | Boolean | - | confirm on enter | N
destroyOnClose | Boolean | false | \- | N
draggable | Boolean | false | \- | N
mode | String | modal | options：modal/modeless/full-screen | N
placement | String | top | options：top/center | N
preventScrollThrough | Boolean | true | \- | N
showInAttachedElement | Boolean | false | \- | N
showOverlay | Boolean | true | \- | N
top | String / Number | - | \- | N
visible | Boolean | - | \- | N
width | String / Number | - | \- | N
zIndex | Number | - | \- | N
`DialogCardProps` | \- | - | \- | N
onClose | Function |  | Typescript：`(context: DialogCloseContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/><br/>`interface DialogCloseContext { trigger: DialogEventSource; e: MouseEvent \| KeyboardEvent }`<br/> | N
onClosed | Function |  | Typescript：`() => void`<br/> | N
onEscKeydown | Function |  | Typescript：`(context: { e: KeyboardEvent }) => void`<br/> | N
onOpened | Function |  | Typescript：`() => void`<br/> | N
onOverlayClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/> | N

### Dialog Events

name | params | description
-- | -- | --
close | `(context: DialogCloseContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/dialog/type.ts)。<br/>`type DialogEventSource = 'esc' \| 'close-btn' \| 'cancel' \| 'overlay'`<br/><br/>`interface DialogCloseContext { trigger: DialogEventSource; e: MouseEvent \| KeyboardEvent }`<br/>
closed | \- | \-
esc-keydown | `(context: { e: KeyboardEvent })` | \-
opened | \- | \-
overlay-click | `(context: { e: MouseEvent })` | \-

### DialogOptions

name | type | default | description | required
-- | -- | -- | -- | --
attach | String / Function | 'body' | Typescript：`AttachNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
className | String | - | \- | N
style | String / Object | - | Typescript：`string \| Styles`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
`Omit<DialogProps, 'attach'>` | \- | - | \- | N

### DialogInstance

name | params | return | description
-- | -- | -- | --
destroy | \- | \- | required
hide | \- | \- | required
show | \- | \- | required
update | `(props: DialogOptions)` | \- | required

### DialogPlugin

同时也支持 `this.$dialog`。

name | params | default | description
-- | -- | -- | --
options | \- | - | Typescript：`DialogOptions`

插件返回值：`DialogInstance`

### DialogPlugin.confirm

同时也支持 `this.$dialog.confirm`。

name | params | default | description
-- | -- | -- | --
options | \- | - | Typescript：`DialogOptions`

### DialogPlugin.alert

同时也支持 `this.$dialog.alert`。

name | params | default | description
-- | -- | -- | --
options | Object | - | Typescript：`Omit<DialogOptions, 'cancelBtn'>`
