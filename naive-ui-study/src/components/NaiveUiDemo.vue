<template>

    <!-- naive-ui 按钮-->
    <n-space>
        <n-button>Default</n-button>
        <n-button type="tertiary">
            Tertiary
        </n-button>
        <n-button type="primary">
            Primary
        </n-button>
        <n-button type="info">
            Info
        </n-button>
        <n-button type="success">
            Success
        </n-button>
        <n-button type="warning">
            Warning
        </n-button>
        <n-button type="error">
            Error
        </n-button>
    </n-space>

    <n-divider />

    <n-space>
        <n-button size="small">
            Small
        </n-button>
        <n-button size="medium">
            Medium
        </n-button>
        <n-button size="large">
            Large
        </n-button>
    </n-space>

    <n-space>
        <n-button secondary strong :render-icon="renderIcon">
            +120 元
        </n-button>
        <n-button icon-placement="right" secondary strong>
            <template #icon>
                <n-icon>
                    <CashIcon />
                </n-icon>
            </template>
            +100 元
        </n-button>
    </n-space>

    <n-divider />

    <n-form ref="formRef" inline :label-width="80" :model="formValue" :rules="rules" :size="size">
        <n-form-item label="姓名" path="user.name">
            <n-input v-model:value="formValue.user.name" placeholder="输入姓名" />
        </n-form-item>
        <n-form-item label="年龄" path="user.age">
            <n-input v-model:value="formValue.user.age" placeholder="输入年龄" />
        </n-form-item>
        <n-form-item label="电话号码" path="phone">
            <n-input v-model:value="formValue.phone" placeholder="电话号码" />
        </n-form-item>
        <n-form-item>
            <n-button attr-type="button" @click="handleValidateClick">
                验证
            </n-button>
        </n-form-item>
    </n-form>

    <n-divider />

    <n-dynamic-input v-model:value="customValue" :on-create="onCreate">
        <template #create-button-default>
            随便搞点啥
        </template>
        <template #default="{ value }">
            <div style="display: flex; align-items: center; width: 100%">
                <n-checkbox v-model:checked="value.isCheck" style="margin-right: 12px" />
                <n-input-number v-model:value="value.num" style="margin-right: 12px; width: 160px" />
                <n-input v-model:value="value.string" type="text" />
            </div>
        </template>
    </n-dynamic-input>

    <n-divider />

    <n-alert title="Default 类型" type="default" closable>
        <template #icon>
            <n-icon>
                <IosAirplane />
            </n-icon>
        </template>
        Gee it's good to be back home
    </n-alert>
    <n-alert title="Info 类型" type="info" closable>
        Gee it's good to be back home
    </n-alert>
    <n-alert title="Success 类型" type="success" closable>
        Leave it till tomorrow to unpack my case
    </n-alert>
    <n-alert title="Warning 类型" type="warning" closable>
        Honey disconnect the phone
    </n-alert>
    <n-alert title="Error 类型" type="error" closable>
        I'm back in the U.S.S.R.
    </n-alert>

    <n-divider />

    <n-space>
        <n-button @click="handleConfirm">
            警告
        </n-button>
        <n-button @click="handleSuccess">
            成功
        </n-button>
        <n-button @click="handleError">
            错误
        </n-button>
    </n-space>

</template>

<script setup lang="ts">
import { NSpace } from 'naive-ui'
import { CashOutline as CashIcon } from '@vicons/ionicons5'
import { IosAirplane } from '@vicons/ionicons4'
import { NIcon } from 'naive-ui'
import { ref, h } from 'vue'
import type { FormInst, FormItemInst, FormItemRule, FormRules } from 'naive-ui'
import { useMessage } from 'naive-ui'
import { useDialog } from 'naive-ui'

const formRef = ref<FormInst | null>(null)
const message = useMessage()
const dialog = useDialog()

let size = ref<'small' | 'medium' | 'large'>('medium')

let formValue = ref({
    user: {
        name: '',
        age: ''
    },
    phone: ''
})

let rules = {
    user: {
        name: {
            required: true,
            message: '请输入姓名',
            trigger: 'blur'
        },
        age: {
            required: true,
            message: '请输入年龄',
            trigger: ['input', 'blur']
        }
    },
    phone: {
        required: true,
        message: '请输入电话号码',
        trigger: ['input']
    }
}


function handleValidateClick(e: MouseEvent) {
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            message.success('Valid')
        }
        else {
            console.log(errors)
            message.error('Invalid')
        }
    })
}

function renderIcon() {
    return h(NIcon, null, {
        default: () => h(CashIcon)
    })
}

let customValue = ref([
    {
        isCheck: true,
        num: 1,
        string: '一个字符串'
    }
])

function onCreate() {
    return {
        isCheck: false,
        num: 1,
        string: '一个字符串'
    }
}

function handleConfirm() {
    dialog.warning({
        title: '警告',
        content: '你确定？',
        positiveText: '确定',
        negativeText: '不确定',
        onPositiveClick: () => {
            message.success('确定')
        },
        onNegativeClick: () => {
            message.info('不确定')
        }
    })
}
function handleSuccess() {
    dialog.success({
        title: '成功',
        content: '厉害',
        positiveText: '哇',
        onPositiveClick: () => {
            message.success('耶！')
        }
    })
}
function handleError() {
    dialog.error({
        title: '错误',
        content: '错了',
        positiveText: '啊',
        onPositiveClick: () => {
            message.error('错啦')
        }
    })
}

</script>

<style scoped></style>
