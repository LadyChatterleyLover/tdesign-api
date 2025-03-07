:: BASE_DOC ::

## API
### Checkbox Props

name | type | default | description | required
-- | -- | -- | -- | --
checkAll | Boolean | false | \- | N
checked | Boolean | false | `v-model` is supported | N
defaultChecked | Boolean | false | uncontrolled property | N
default | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
disabled | Boolean | undefined | \- | N
indeterminate | Boolean | false | \- | N
label | String / Slot / Function | - | Typescript：`string \| TNode`。[see more ts definition](https://github.com/Tencent/tdesign-vue/blob/develop/src/common.ts) | N
name | String | - | \- | N
readonly | Boolean | false | \- | N
value | String / Number / Boolean | - | value of checkbox。Typescript：`string \| number \| boolean` | N
onChange | Function |  | Typescript：`(checked: boolean, context: { e: Event }) => void`<br/> | N
onClick | Function |  | Typescript：`(context: { e: MouseEvent }) => void`<br/>trigger on click | N

### Checkbox Events

name | params | description
-- | -- | --
change | `(checked: boolean, context: { e: Event })` | \-
click | `(context: { e: MouseEvent })` | trigger on click

### CheckboxGroup Props

name | type | default | description | required
-- | -- | -- | -- | --
max | Number | undefined | \- | N
name | String | - | \- | N
options | Array | - | Typescript：`Array<CheckboxOption>` `type CheckboxOption = string \| number \| CheckboxOptionObj` `interface CheckboxOptionObj extends TdCheckboxProps { text?: string; }`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N
value | Array | [] | `v-model` is supported。Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N
defaultValue | Array | [] | uncontrolled property。Typescript：`T` `type CheckboxGroupValue = Array<string \| number \| boolean>`。[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts) | N
onChange | Function |  | Typescript：`(value: T, context: CheckboxGroupChangeContext) => void`<br/>[see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/> | N

### CheckboxGroup Events

name | params | description
-- | -- | --
change | `(value: T, context: CheckboxGroupChangeContext)` | [see more ts definition](https://github.com/Tencent/tdesign-vue/tree/develop/src/checkbox/type.ts)。<br/>`interface CheckboxGroupChangeContext { e: Event; current: string \| number \| boolean; option: CheckboxOption \| TdCheckboxProps; type: 'check' \| 'uncheck' }`<br/>
