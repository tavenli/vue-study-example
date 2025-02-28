
<template>
    
    <div>
        <span>{{ noteMsg }}</span>
        <h2>姓名：{{ uname }}</h2>
        <h2>电话：{{ uphone }}</h2>
        
        <h2>地址：{{ userDetail.address }}</h2>
        <h2>完整地址：{{ fullAddress }}</h2>

        <h2>年龄：<input type="text" v-model="userDetail.age"></h2>
        
        <button @click="changeName">修改姓名</button>
        <button @click="changePhone">修改电话</button>
        <button @click="changeAddress">修改地址</button>
        
        <ul>
            <li v-for="item in orders" :key="item.id">
                {{ item.name }}
            </li>
        </ul>
        
    </div>
    
</template>

<script lang="ts" setup>
    import { ref, watch } from 'vue'
    import { reactive } from 'vue';
    import { toRefs, toRef } from 'vue';
    import { computed } from 'vue'
    
    
    let noteMsg = 'hicode'
    let uname = ref('niubi')
    let uphone = ref('18899990000')
    
    let userDetail = reactive({
        name: 'niubi',
        age: 18,
        address: 'beijing'
    })

    let {name, age} = toRefs(userDetail)    
    console.log(name, age)

    let _name = toRef(userDetail, "name")    
    console.log(_name)
    
    let orders = reactive([
        { id: 1, name: 'niubi' },
        { id: 2, name: 'niubi-plus' },
        { id: 3, name: 'niubi-plus-plus' }
    ])

    let fullAddress = computed(() => {
        return userDetail.name + ' ' + uphone.value   + ' ' + userDetail.address
    })

    watch(uname, (newValue, oldValue) => {
        console.log('uname 的值改变了： 由', oldValue, "改为", newValue)
    })

    watch(userDetail, (newValue, oldValue) => {
        console.log('userDetail 的值改变了： 由', oldValue, "改为", newValue)
    })
    
    function changeName() {
        uname.value = 'niubi-plus'

        console.log(uname)
    }
    function changePhone() {
        uphone.value = '13977778888'
    }

    function changeAddress() {
        userDetail.address = 'changsha'
    }
</script>

<style scoped>

</style>

