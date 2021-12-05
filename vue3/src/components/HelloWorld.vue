<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodoStore } from '../store/todo';

export default defineComponent({
  setup() {
    const todoStore = useTodoStore();
    const msg = ref('');

    const handleAddTodoItem = () => {
      if (!msg.value) return;
      if (todoStore.items.find((item) => item.value === msg.value)) {
        alert(`${msg.value}已存在，请换一个`);
        return;
      }
      todoStore.addTodo({
        value: msg.value,
        finished: false,
      });
      msg.value = '';
    };
    return {
      msg,
      todoStore,
      handleAddTodoItem,
    };
  },
});
</script>

<template>
  <template v-if="todoStore.unfinishedItems.length">
    <div>正在进行</div>
    <ul>
      <li
        v-for="(item, index) in todoStore.unfinishedItems"
        @click="todoStore.toggleFinished(item)"
        :key="item.value"
      >
        <input
          :id="item.value"
          :value="item.value"
          type="checkbox"
          v-model="item.finished"
        />
        {{ item.value }}
      </li>
    </ul>
  </template>
  <template v-if="todoStore.finishedItems.length">
    <div>已经做完</div>
    <ul>
      <li
        v-for="(item, index) in todoStore.finishedItems"
        @click="todoStore.toggleFinished(item)"
        :key="item.value"
      >
        <input
          :id="item.value"
          :value="item.value"
          type="checkbox"
          v-model="item.finished"
        />
        {{ item.value }}
      </li>
    </ul>
  </template>

  <input v-model="msg" @keyup.enter="handleAddTodoItem" />
  <button @click="handleAddTodoItem()">添加</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
