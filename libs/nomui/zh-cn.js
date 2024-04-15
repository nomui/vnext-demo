const localization = {
    'Alert': {
        okText: '知道了'
    },
    'Avatar': {
        alt: '图片'
    },
    'Checkbox': {
        valueText: {
            checked: '是',
            unchecked: '否',
        },
    },
    'CheckboxTree': {
        checkAllText: '全选',
    },
    'DatePicker': {
        weekText: '日 一 二 三 四 五 六',
        nowText: '此刻',
        todayText: '今天',
        monthMap: {
            1: '一月',
            2: '二月',
            3: '三月',
            4: '四月',
            5: '五月',
            6: '六月',
            7: '七月',
            8: '八月',
            9: '九月',
            10: '十月',
            11: '十一月',
            12: '十二月'
        }
    },
    'DateRangePicker': {
        startPickerProps: {
            placeholder: '开始日期',
        },
        endPickerProps: {
            placeholder: '结束日期',
        },
    },
    'Drawer': {
        okText: '确 定',
        cancelText: '取 消',
    },
    'Empty': {
        description: '暂无内容',
    },
    'Grid': {
        columnSettingText: '列设置',
        totalizeText: '总计',
        okText: '确定',
        cancelText: '取消',
        columnsLimitTitle: '提示',
        columnsLimitDescription: '请至少保留一列',
        selectAllText: '全选',
        clearText: '清空',
        unselectAllText: '取消全选',
        frozenText: '已冻结',
        unfreezeText: '未冻结',
        searchAllText: '搜索所有列',
        searchAddedText: '搜索已添加列',
        shownColumnText: '已显示列（拖动可进行排序）',
        maxColumnText: '最多只能冻结{{limit}}项',
        noGroupFronzeText: '不支持冻结群组',
        columnStatsText: '{{current}}/{{total}}项'
    },
    'GroupGrid': {
        addText: '添加',
        removeText: '移除'
    },
    'GroupList': {
        addText: '添加',
        removeText: '移除'
    },
    'GroupTree': {
        addText: '添加',
        renameText: '重命名',
        removeNodeText: '删除节点',
        addRowText: '在下方插入行',
        newNodeText: '新节点',
        addNodeText: '新增子节点'
    },
    'List': {
        loadmoreText: '加载更多...'
    },
    'Maskinfo': {
        showText: '点击显示完整信息'
    },
    'Modal': {
        okText: '确 定',
        cancelText: '取 消',
    },
    'Notification': {
        okText: '确定'
    },
    'Numberbox': {
        maxPrecisionText: '请输入有效数字，且最多包含{{maxPrecision}}位小数',
        integerText: '请输入有效整数',
        precisionText: '请输入有效数字，且包含{{precision}}位小数'
    },
    'NumberSpinner': {
        integerText: '请输入有效整数',
        precisionText: '请输入有效数字，且包含{{precision}}位小数'
    },
    'Pager': {
        totalText: '共有数据{{totalCount}}条',
        pageText10: '10条/页',
        pageText20: '20条/页',
        pageText30: '30条/页',
        pageText40: '40条/页',
        pageText50: '50条/页',
    },
    'PartialDatePicker': {
        placeholder: '选择年份',
        selectYearText: '请先选择年份',
        formatMap: {
            quarter: '$year年 $quarter季度',
            month: 'yyyy-MM',
            week: '$year年 $week周',
        },
        yearText: '{{year}}年',
        monthText: '{{month}}月',
        quarterText: '第{{quarter}}季度',
        weekText: '第{{week}}周',
    },
    'PartialDateRangePicker': {
        startPickerProps: {
            placeholder: '开始日期',
        },
        endPickerProps: {
            placeholder: '结束日期',
        },
    },
    'Popconfirm': {
        okText: '是',
        cancelText: '否',
    },
    'SlideCaptcha': {
        refreshTitle: '换一张',
        tip: '向右滑动完成拼图',
    },
    'Switch': {
        unselectedText: '关',
        selectedText: '开',
    },
    'Table': {
        emptyText: '暂无内容',
        okText: '确定',
        resetText: '重置',
        freezeText: '固定列',
        unfreezeText: '取消固定'
    },
    'TimePicker': {
        nowText: '此刻',
        resetText: '重置'
    },
    'TimeRangePicker': {
        startPickerProps: {
            placeholder: '开始时间',
        },
        endPickerProps: {
            placeholder: '结束时间',
        },
    },
    'Tour': {
        prevText: '上一步',
        nextText: '下一步',
        finishText: '完成',
        pageInfoText: '{{current}} / {{total}}'
    },
    'Transfer': {
        selectAllText: '全选',
        clearText: '清空',
        unSelectAllText: '反选',
        countText: `{{current}}/{{total}}项`
    },
    'Tree': {
        checkAllText: '全选'
    },
    'TreeSelect': {
        placeholder: '请选择',
    },
    'Upload': {
        uploadText: '上传',
        uploadFailText: '上传失败！',
        unSupportedTypeText: '不支持此格式，请重新上传。'
    },
    'Uploader': {
        uploadText: '上传',
        uploadFailText: '上传失败！',
        reUploadText: '重新上传可完成覆盖。',
        unSupportedTypeText: '不支持此格式，请重新上传。',
        removeText: '删除',
        updateText: '更新',
        updateTimeText: '更新日期'
    }

}

for (const component in localization) {
    const props = localization[component]
    for (const key in props) {
        nomui[component].defaults[key] = { ...nomui[component].defaults[key], ...props[key] }
    }
}