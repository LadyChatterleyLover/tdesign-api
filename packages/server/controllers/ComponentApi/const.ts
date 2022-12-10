import { MapItem, MapOptions } from '../../../types';

const PC = 1;
const MOBILE = 2;
const MINIPROGRAM = 3;

const VUE = 1;
const REACT = 2;

const STRING = 1;
const NUMBER = 2;
const BOOLEAN = 4;
const OBJECT = 8;
const ARRAY = 16;
const FUNCTION = 32;
const TNODE = 64;
const Date = 128;

const P_VUE_PC = 1;
const P_REACT_PC = 2;
const P_ANGULAR_PC = 4;
const P_VUE_MOBILE = 8;
const P_REACT_MOBILE = 16;
const P_ANGULAR_MOBILE = 32;
const P_MINIPROGRAM = 64;

const API_CATEGORY_PROPS = 1;
const API_CATEGORY_EVENTS = 2;
const API_CATEGORY_FUNCTIONS = 4;
// const API_CATEGORY_PLUGIN_API = 8;
const API_CATEGORY_EXTENDS_API = 16;
const API_CATEGORY_RETURN_API = 32;
const API_CATEGORY_T_API = 64;

export const API_CATEGORY: MapOptions = {
  [API_CATEGORY_PROPS]: 'Props',
  [API_CATEGORY_EVENTS]: 'Events',
  [API_CATEGORY_FUNCTIONS]: 'Functions',
  // [API_CATEGORY_PLUGIN_API]: 'PluginAPI',
  [API_CATEGORY_EXTENDS_API]: 'Extends',
  [API_CATEGORY_RETURN_API]: 'Return',
  [API_CATEGORY_T_API]: '<T>',
};

export const PLATFORM_MAP: MapOptions = {
  [PC]: 'PC',
  [MOBILE]: 'Mobile',
  [MINIPROGRAM]: 'MP',
};

export const FRAMEWORK_MAP: MapOptions = {
  [VUE]: 'Vue',
  [REACT]: 'React',
  [MINIPROGRAM]: 'MP',
};

export const FIELD_TYPE_MAP: MapOptions = {
  [STRING]: 'String',
  [NUMBER]: 'Number',
  [BOOLEAN]: 'Boolean',
  [OBJECT]: 'Object',
  [ARRAY]: 'Array',
  [FUNCTION]: 'Function',
  [TNODE]: 'TNode',
  [Date]: 'Date',
};

export const PLATFORM_FRAMEWORK: MapOptions = {
  [P_VUE_PC]: 'Vue(PC)',
  [P_REACT_PC]: 'React(PC)',
  [P_VUE_MOBILE]: 'Vue(Mobile)',
  [P_REACT_MOBILE]: 'React(Mobile)',
  [P_ANGULAR_PC]: 'Angular(PC)',
  [P_ANGULAR_MOBILE]: 'Angular(Mobile)',
  [P_MINIPROGRAM]: 'Miniprogram',
};

/**
 * Button 纯组件
 * $Message 组件插件
 * FormRule 纯TS类型，非组件
 */
export const COMPONENTS_PC: Array<MapItem> = [
  { value: 'Button', label: '按钮' },
  { value: 'Link', label: '链接' },
  { value: 'Input', label: '输入框' },
  { value: 'RangeInput', label: '范围输入框' },
  { value: 'RangeInputPopup', label: '范围输入框触发器' },
  { value: 'TagInput', label: '标签输入框' },
  { value: 'SelectInput', label: '筛选器输入框' },
  { value: 'Pagination', label: '分页' },
  { value: 'Dialog', label: '对话框' },
  { value: 'DialogOptions', label: '对话框插件参数', type: 'TS' },
  { value: 'DialogInstance', label: '对话框插件实例', type: 'TS' },
  { value: '$Dialog', label: '对话框插件', type: 'plugin' },
  { value: '$Dialog.confirm', label: '对话框插件', type: 'plugin' },
  { value: '$Dialog.alert', label: '对话框插件', type: 'plugin' },
  { value: 'Message', label: '全局提醒' },
  { value: 'MessageOptions', label: '全局提醒数据类型', type: 'TS' },
  { value: '$Message', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.close', label: '关闭全局提醒', type: 'plugin' },
  { value: '$Message.closeAll', label: '关闭所有全局提醒', type: 'plugin' },
  { value: '$Message.info', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.success', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.warning', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.error', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.question', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.loading', label: '全局提醒插件', type: 'plugin' },
  { value: '$Message.config', label: '全局提醒插件', type: 'plugin' },
  { value: 'Icon', label: '图标' },
  { value: 'IconSVG', label: '图标（IconSVG）' },
  { value: 'Iconfont', label: '图标（Iconfont）' },
  { value: 'Dropdown', label: '下拉菜单' },
  { value: 'DropdownItem', label: '下拉菜单选项' },
  { value: 'Popup', label: '气泡框' },
  { value: 'Popconfirm', label: '气泡确认框' },
  { value: 'Switch', label: '开关' },
  { value: 'Steps', label: '步骤条' },
  { value: 'StepItem', label: '步骤' },
  { value: 'Checkbox', label: '多选框' },
  { value: 'CheckboxGroup', label: '多选框组' },
  { value: 'Radio', label: '单选框' },
  { value: 'RadioGroup', label: '单选框组' },
  { value: 'Table', label: '表格', type: 'TS' },
  { value: 'TableCol', label: '表格列', type: 'TS' },
  { value: 'TableEditableCellConfig', label: '表格可编辑列配置', type: 'TS' },
  { value: 'TableTreeConfig', label: '表格树形结构配置', type: 'TS' },
  { value: 'TableColumnFilter', label: '表格列过滤条件配置', type: 'TS' },
  { value: 'TableColumnController', label: '表格自定义显示列配置', type: 'TS' },
  { value: 'InfinityScroll', label: '无限滚动配置', type: 'TS' },
  { value: 'BaseTable', label: '基础表格' },
  { value: 'BaseTableCol', label: '基础表格列', type: 'TS' },
  { value: 'PrimaryTable', label: '主表格' },
  { value: 'PrimaryTableCol', label: '主表格列', type: 'TS' },
  { value: 'EnhancedTable', label: '增强表格' },
  { value: 'EnhancedTableCol', label: '增强表格列', type: 'TS' },
  { value: 'TableRowState', label: '表格行数据状态', type: 'TS' },
  { value: 'Select', label: '选择器' },
  { value: 'Option', label: '选择器选项' },
  { value: 'OptionGroup', label: '选择器选项组' },
  { value: 'Tag', label: '标签' },
  { value: 'CheckTag', label: '可选标签' },
  { value: 'Breadcrumb', label: '面包屑' },
  { value: 'BreadcrumbItem', label: '面包屑项' },
  { value: 'Menu', label: '侧边导航菜单' },
  { value: 'HeadMenu', label: '顶部导航菜单' },
  { value: 'Submenu', label: '二级导航' },
  { value: 'MenuItem', label: '导航菜单选项' },
  { value: 'MenuGroup', label: '导航菜单组' },
  { value: 'Alert', label: '警告提示' },
  // { value: 'AlertSwiper', label: '警告提示轮播' },
  { value: 'List', label: '列表' },
  { value: 'Upload', label: '上传' },
  { value: 'UploadFile', label: '上传文件类型', type: 'TS' },
  { value: 'UploadRequestOptions', label: '文件上传参数', type: 'TS' },
  { value: 'Notification', label: '消息通知' },
  { value: 'NotificationOptions', label: '全局提醒数据类型', type: 'TS' },
  { value: '$Notification', label: '消息通知插件', type: 'plugin' },
  { value: '$Notification.close', label: '关闭消息通知', type: 'plugin' },
  { value: '$Notification.closeAll', label: '关闭所有消息通知', type: 'plugin' },
  { value: '$Notification.info', label: '消息通知插件', type: 'plugin' },
  { value: '$Notification.success', label: '消息通知插件', type: 'plugin' },
  { value: '$Notification.warning', label: '消息通知插件', type: 'plugin' },
  { value: '$Notification.error', label: '消息通知插件', type: 'plugin' },
  { value: '$Notification.config', label: '消息通知插件', type: 'plugin' },
  { value: 'Search', label: '搜索' },
  { value: 'Tabs', label: '选项卡' },
  { value: 'TabPanel', label: '选项卡面板' },
  { value: 'Layout', label: '布局' },
  { value: 'Header', label: '布局-头部' },
  { value: 'Aside', label: '布局-侧边栏' },
  { value: 'Content', label: '布局-内容' },
  { value: 'Footer', label: '布局-底部内容' },
  { value: 'Grid', label: '栅格' },
  { value: 'Row', label: '栅格-横向' },
  { value: 'Col', label: '栅格-纵向' },
  { value: 'Divider', label: '分割线' },
  { value: 'Form', label: '表单' },
  { value: 'FormInstance', label: '表单示例', type: 'TS', framework: ['React(PC)', 'React(Mobile)'] },
  { value: 'FormItem', label: '表单元素' },
  { value: 'FormList', label: '动态表单元素' },
  { value: 'FormRule', label: '表单校验规则', type: 'TS' },
  { value: 'FormErrorMessage', label: '表单校验规则', type: 'TS' },
  { value: 'Tree', label: '树' },
  { value: 'TreeNodeState', label: '树节点', type: 'TS' },
  { value: 'TreeNodeModel', label: '树节点类', type: 'TS' },
  { value: 'Tooltip', label: '文字提示' },
  { value: 'TooltipLite', label: '文字提示简版' },
  { value: 'Loading', label: '加载中' },
  { value: '$Loading', label: '加载中插件', type: 'plugin' },
  { value: 'Badge', label: '徽标数' },
  { value: 'DatePicker', label: '日期选择器' },
  { value: 'DateRangePicker', label: '日期范围选择器' },
  { value: 'DatePickerPanel', label: '日期选择器面板' },
  { value: 'DateRangePickerPanel', label: '日期范围选择器面板' },
  { value: 'TimeLine', label: '时间轴' },
  { value: 'TimeLineItem', label: '时间轴' },
  { value: 'TimePicker', label: '时间选择器' },
  { value: 'TimeRangePicker', label: '时间范围选择器' },
  { value: 'TimePickerPanel', label: '时间选择器面板' },
  { value: 'TimeRangePickerPanel', label: '时间范围选择器面板' },
  { value: 'Transfer', label: '穿梭框' },
  { value: 'TreeSelect', label: '树选择' },
  { value: 'Drawer', label: '模态抽屉' },
  { value: 'DrawerOptions', label: '模态抽屉插件参数', type: 'TS' },
  { value: 'DrawerInstance', label: '对话框插件实例', type: 'TS' },
  { value: '$Drawer', label: '对话框插件', type: 'plugin' },
  { value: 'Anchor', label: '锚点' },
  { value: 'AnchorItem', label: '锚点项' },
  { value: 'AnchorTarget', label: '锚点目标' },
  { value: 'Calendar', label: '日历' },
  { value: 'CalendarController', label: '日历控制器', type: 'TS' },
  { value: 'CalendarCell', label: '日历项参数', type: 'TS' },
  { value: 'Cascader', label: '级联选择' },
  { value: 'InputNumber', label: '数字输入框' },
  { value: 'Progress', label: '进度条' },
  { value: 'Slider', label: '滑块' },
  { value: 'Avatar', label: '头像' },
  { value: 'AvatarGroup', label: '头像组' },
  { value: 'Carousel', label: '走马灯' },
  { value: 'Typography', label: '排版' },
  { value: 'Space', label: '间距' },
  { value: 'Swiper', label: '轮播' },
  { value: 'SwiperItem', label: '轮播项' },
  { value: 'SwiperNavigation', label: '轮播导航配置', type: 'TS' },
  { value: 'StepLoading', label: '分步加载' },
  { value: 'StickyTool', label: '侧边固钉' },
  { value: 'StickyItem', label: '侧边固钉项' },
  { value: 'Affix', label: '固钉' },
  { value: 'PageHeader', label: '页头' },
  { value: 'AutoComplete', label: '自动填充' },
  { value: 'Mentions', label: '提及' },
  { value: 'Rate', label: '评分' },
  { value: 'Comment', label: '评论' },
  { value: 'Collapse', label: '折叠' },
  { value: 'CollapsePanel', label: '折叠面板' },
  { value: 'Card', label: '卡片' },
  { value: 'Guide', label:'引导' },
  { value: 'GuideStep', label: '引导步骤' },
  { value: 'Descriptions', label: '描述列表' },
  { value: 'Empty', label: '空状态' },
  { value: 'Statistic', label: '统计数值' },
  { value: 'Result', label: '结果' },
  { value: 'Skeleton', label: '骨架屏' },
  { value: 'Watermark', label: '水印' },
  { value: 'Anchor', label: '锚点' },
  { value: 'BackTop', label: '回到顶部' },
  { value: 'Container', label: '布局容器' },
  { value: 'ColorPicker', label: '颜色选择器' },
  { value: 'InputAdornment', label: '输入装饰器' },
  { value: 'ConfigProvider', label: '全局配置', type: 'TS' },
  { value: 'GlobalConfigProvider', label: '全局配置(是 ConfigProvider 的别名)', type: 'TS' },
  { value: 'PaginationConfig', label: '分页全局配置', type: 'TS' },
  { value: 'InputConfig', label: '输入框全局配置', type: 'TS' },
  { value: 'CalendarConfig', label: '日历全局配置', type: 'TS' },
  { value: 'CascaderConfig', label: '级联选择全局配置', type: 'TS' },
  { value: 'ColorPickerConfig', label: '颜色选择器全局配置', type: 'TS' },
  { value: 'TransferConfig', label: '穿梭框全局配置', type: 'TS' },
  { value: 'TimePickerConfig', label: '时间选择器全局配置', type: 'TS' },
  { value: 'DatePickerConfig', label: '日期选择器全局配置', type: 'TS' },
  { value: 'DialogConfig', label: '对话框全局配置', type: 'TS' },
  { value: 'DrawerConfig', label: '抽屉全局配置', type: 'TS' },
  { value: 'PopconfirmConfig', label: '气泡确认框全局配置', type: 'TS' },
  { value: 'TableConfig', label: '表格全局配置', type: 'TS' },
  { value: 'SelectConfig', label: '选择器全局配置', type: 'TS' },
  { value: 'TreeConfig', label: '树全局配置', type: 'TS' },
  { value: 'TreeSelectConfig', label: '树选择全局配置', type: 'TS' },
  { value: 'UploadConfig', label: '上传组件全局配置', type: 'TS' },
  { value: 'UploadConfigDragger', label: '上传组件全局拖拽配置', type: 'TS' },
  { value: 'UploadConfigProgress', label: '上传组件进度全局配置', type: 'TS' },
  { value: 'UploadConfigFileList', label: '上传组件文件列表全局配置', type: 'TS' },
  { value: 'UploadConfigImage', label: '上传组件图片风格全局配置', type: 'TS' },
  { value: 'UploadConfigFile', label: '上传组件文件风格全局配置', type: 'TS' },
  { value: 'ListConfig', label: '列表全局配置', type: 'TS' },
  { value: 'FormConfig', label: '表单全局配置', type: 'TS' },
  { value: 'TagConfig', label: '标签全局配置', type: 'TS' },
  { value: 'StepsConfig', label: '步骤条全局配置', type: 'TS' },
  { value: 'AlertConfig', label: '警告提醒全局配置', type: 'TS' },
  { value: 'AnchorConfig', label: '锚点全局配置', type: 'TS' },
  { value: 'ActionSheetItem', label: '动作面板项的配置', type: 'TS' },
  { value: 'WatermarkText', label: '水印文字配置', type: 'TS' },
  { value: 'WatermarkImage', label: '水印图片配置', type: 'TS' },
].sort((a, b) => a.value.localeCompare(b.value));

export const COMPONENTS_MOBILE: Array<MapItem> = [
  { value: 'Button', label: '按钮' },
  { value: 'Input', label: '输入框' },
  { value: 'CountDown', label: '倒计时' },
  { value: 'InputNumber', label: '数字输入框' },
  { value: 'Textarea', label: '文本输入框' },
  { value: 'Pagination', label: '分页' },
  { value: 'PaginationMini', label: '迷你分页' },
  { value: 'Dialog', label: '对话框' },
  { value: 'DialogCard', label: '对话框卡片' },
  { value: 'Toast', label: '轻提示' },
  { value: 'Message', label: '消息通知' },
  { value: 'NoticeBar', label: '公告栏' },
  { value: 'Progress', label: '进度条' },
  { value: 'Loading', label: '加载' },
  { value: 'Slider', label: '滑块' },
  { value: 'Switch', label: '开关' },
  { value: 'Checkbox', label: '多选框' },
  { value: 'CheckboxGroup', label: '多选框组' },
  { value: 'Radio', label: '单选框' },
  { value: 'RadioGroup', label: '单选框组' },
  { value: 'Picker', label: '选择器' },
  { value: 'DateTimePicker', label: '日期时间选择器' },
  { value: 'DateTimeRangePicker', label: '日期时间范围选择器' },
  { value: 'Tag', label: '标签' },
  { value: 'Image', label: '图片' },
  { value: 'CheckTag', label: '可选标签' },
  { value: 'DropdownMenu', label: '下拉菜单' },
  { value: 'Rate', label: '评分' },
  { value: 'Stepper', label: '步进器' },
  { value: 'Cell', label: '单元格' },
  { value: 'CellGroup', label: '单元格组' },
  { value: 'List', label: '列表' },
  { value: 'ListItem', label: '列表项' },
  { value: 'ListItemMeta', label: '带图片的列表项' },
  { value: 'SwipeCell', label: '滑动操作' },
  { value: 'PullDownRefresh', label: '下拉刷新' },
  { value: 'ScrollView', label: '滚动容器' },
  { value: 'Sticky', label: '吸顶容器' },
  { value: 'Grid', label: '宫格' },
  { value: 'GridItem', label: '宫格子项' },
  { value: 'Skeleton', label: '骨架屏' },
  { value: 'Badge', label: '徽标' },
  { value: 'Collapse', label: '折叠面板' },
  { value: 'Carousel', label: '走马灯' },
  { value: 'Drawer', label: '抽屉' },
  { value: 'Indexes', label: '索引' },
  { value: 'Navbar', label: '导航条' },
  { value: 'SegmentedControl', label: '分段器' },
  { value: 'Steps', label: '步骤条' },
  { value: 'Tab', label: '选项卡' },
  { value: 'TabBar', label: '标签栏' },
  { value: 'TabBarItem', label: '标签栏选项' },
  { value: 'Fab', label: '悬浮按钮' },
  { value: 'SearchField', label: '搜索框' },
  { value: 'ImageViewer', label: '图片预览' },
  { value: 'Upload', label: '上传' },
  { value: 'ActionSheet', label: '动作面板' },
  { value: 'Table', label: '表格' },
  { value: 'TableCol', label: '表格列' },
  { value: 'Breadcrumb', label: '面包屑' },
  { value: 'BreadcrumbItem', label: '面包屑项' },
  { value: 'Calendar', label: '日历' },
  { value: 'Overlay', label: '遮罩层' },
  { value: 'Transition', label: '动画' },
  { value: 'SideBar', label: '侧边导航' },
  { value: 'SideBarItem', label: '侧边导航项' },
];

export default {
  PLATFORM_MAP,
  FRAMEWORK_MAP,
  FIELD_TYPE_MAP,
  PLATFORM_FRAMEWORK,
  COMPONENTS_PC,
  COMPONENTS_MOBILE,
  API_CATEGORY,
};
