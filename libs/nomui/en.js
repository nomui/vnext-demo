const localization = {
    'Alert': {
        okText: 'Ok'
    },
    'Avatar': {
        alt: 'image'
    },
    'Checkbox': {
        valueText: {
            checked: 'Yes',
            unchecked: 'No',
        },
    },
    'CheckboxTree': {
        checkAllText: 'Select All',
    },
    'DatePicker': {
        weekText: 'Sun Mon Tue Wed Thu Fri Sat',
        nowText: 'Now',
        todayText: 'Today',
    },
    'DateRangePicker': {
        startPickerProps: {
            placeholder: 'Start Date',
        },
        endPickerProps: {
            placeholder: 'End Date',
        },
    },
    'Drawer': {
        okText: 'Ok',
        cancelText: 'Cancel',
    },
    'Empty': {
        description: 'There is nothing here',
    },
    'Grid': {
        columnSettingText: 'Setting',
        totalizeText: 'Total',
        okText: 'Ok',
        cancelText: 'Cancel',
        columnsLimitTitle: 'Warning',
        columnsLimitDescription: 'Please select at least one column',
        selectAllText: 'Select All',
        clearText: 'Clear',
        deselectAllText: 'Deselect All',
        frozenText: 'Frozen',
        unfreezeText: 'Free',
        searchAllText: 'Search in all columns',
        searchAddedText: 'Searcn in added columns',
        shownColumnText: 'Shown columns(Drag to sort)',
        maxColumnText: 'Only {{limit}} columns can be frozen',
        noGroupFronzeText: 'Grouped columns is not freezable',
        columnStatsText: '{{current}} of {{total}}'
    },
    'GroupGrid': {
        addText: 'Add',
        removeText: 'Remove'
    },
    'GroupList': {
        addText: 'Add',
        removeText: 'Remove'
    },
    'GroupTree': {
        addText: 'Add',
        renameText: 'Rename',
        removeNodeText: 'Remove node',
        addRowText: 'Append row',
        newNodeText: 'New node',
        addNodeText: 'Add childnode'
    },
    'List': {
        loadmoreText: 'Loadmore...'
    },
    'MaskInfo': {
        showText: 'Click to show plaintext'
    },
    'Modal': {
        okText: 'Ok',
        cancelText: 'Cancel',
    },
    'Notification': {
        okText: 'Ok'
    },
    'Numberbox': {
        maxPrecisionText: 'Please enter a valid number with a maximum of {{maxPrecision}} decimal places',
        integerText: 'Please enter a valid integer',
        precisionText: 'Please enter a valid number with {{precision}} decimal places'
    },
    'NumberSpinner': {
        integerText: 'Please enter a valid integer',
        precisionText: 'Please enter a valid number with {{precision}} decimal places'
    },
    'Pager': {
        totalText: '{{totalCount}} items',
        pageText10: '10/page',
        pageText20: '20/page',
        pageText30: '30/page',
        pageText40: '40/page',
        pageText50: '50/page',
    },
    'PartialDatePicker': {
        placeholder: 'Choose year',
        selectYearText: 'Please choose a year',
        formatMap: {
            quarter: '$year Q$quarter',
            month: 'yyyy-MM',
            week: '$year Week$week',
        },
        yearText: '{{year}}',
        monthText: '{{month}}',
        quarterText: 'Q{{quarter}}',
        weekText: 'Week{{week}}',
        monthMap: {
            1: 'Jan',
            2: 'Feb',
            3: 'Mar',
            4: 'Apr',
            5: 'May',
            6: 'Jun',
            7: 'Jul',
            8: 'Aug',
            9: 'Sept',
            10: 'Oct',
            11: 'Nov',
            12: 'Dec'
        }
    },
    'PartialDateRangePicker': {
        startPickerProps: {
            placeholder: 'Start Date',
        },
        endPickerProps: {
            placeholder: 'End Date',
        },
    },
    'Popconfirm': {
        okText: 'Ok',
        cancelText: 'Cancel',
    },
    'SlideCaptcha': {
        refreshTitle: 'Change another one',
        tip: 'Slide to complete the puzzle',
    },
    'Switch': {
        unselectedText: 'Off',
        selectedText: 'On',
    },
    'Table': {
        emptyText: 'There is nothing here',
        okText: 'Ok',
        resetText: 'Reset',
        freezeText: 'Freeze',
        unfreezeText: 'Unfreeze'
    },
    'TimePicker': {
        nowText: 'Now',
        resetText: 'Reset'
    },
    'TimeRangePicker': {
        startPickerProps: {
            placeholder: 'Start date',
        },
        endPickerProps: {
            placeholder: 'End date',
        },
    },
    'Tour': {
        prevText: 'Prev',
        nextText: 'Next',
        finishText: 'Finish',
        pageInfoText: '{{current}} of {{total}}'
    },
    'Transfer': {
        selectAllText: 'Select all',
        clearText: 'Clear',
        deselectAllText: 'Deselect',
        countText: `{{current}}/{{total}}`
    },
    'Tree': {
        checkAllText: 'Select all'
    },
    'TreeSelect': {
        placeholder: 'Click to choose',
    },
    'Upload': {
        uploadText: 'Upload',
        uploadFailText: 'Upload failed!',
        unSupportedTypeText: 'This file format is not supported'
    },
    'Uploader': {
        uploadText: 'Upload',
        uploadFailText: 'Upload failed!',
        reUploadText: 'Reupload to overwrite the file',
        unSupportedTypeText: 'This file format is not supported',
        removeText: 'Delete',
        updateText: 'Update',
        updateTimeText: 'Update time'
    }

}

for (const component in localization) {
    const props = localization[component]
    for (const key in props) {
        nomui[component].defaults[key] = { ...nomui[component].defaults[key], ...props[key] }
    }
}