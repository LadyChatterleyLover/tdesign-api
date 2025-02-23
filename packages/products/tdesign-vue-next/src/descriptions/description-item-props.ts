/* eslint-disable */

/**
 * 该文件为脚本自动生成文件，请勿随意修改。如需修改请联系 PMC
 * */

import { TdDescriptionItemProps } from '../descriptions/type';
import { PropType } from 'vue';

export default {
  /** 描述项字段名 */
  label: {
    type: [String, Function] as PropType<TdDescriptionItemProps['label']>,
  },
  /** 占用的宽度数量 */
  span: {
    type: Number,
    default: 1,
  },
};
