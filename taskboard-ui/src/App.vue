<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { taskApi, type Task, type TaskStatus } from './services/taskApi';
import './task.css';

const tasks = ref<Task[]>([]);
const title = ref('');
const description = ref('');
const status = ref<TaskStatus>('TODO');
const loading = ref(false);
const error = ref('');

const statusOptions: TaskStatus[] = ['TODO', 'IN_PROGRESS', 'DONE'];

const fetchTasks = async () => {
  try {
    loading.value = true;
    error.value = '';
    tasks.value = await taskApi.getTasks();
  } catch {
    error.value = 'Failed to fetch tasks';
  } finally {
    loading.value = false;
  }
};

const createTask = async () => {
  if (!title.value.trim()) {
    error.value = 'Task title is required';
    return;
  }

  try {
    loading.value = true;
    error.value = '';

    const newTask = await taskApi.createTask({
      title: title.value,
      description: description.value,
      status: status.value,
    });

    tasks.value.unshift(newTask);

    title.value = '';
    description.value = '';
    status.value = 'TODO';
  } catch {
    error.value = 'Failed to create task';
  } finally {
    loading.value = false;
  }
};

const updateStatus = async (task: Task, newStatus: TaskStatus) => {
  try {
    error.value = '';

    const updatedTask = await taskApi.updateTask(task.id, {
      status: newStatus,
    });

    tasks.value = tasks.value.map((item) =>
      item.id === task.id ? updatedTask : item,
    );
  } catch {
    error.value = 'Failed to update task';
  }
};

const deleteTask = async (id: string) => {
  try {
    error.value = '';
    await taskApi.deleteTask(id);
    tasks.value = tasks.value.filter((task) => task.id !== id);
  } catch {
    error.value = 'Failed to delete task';
  }
};

const getStatusLabel = (taskStatus: TaskStatus) => {
  if (taskStatus === 'TODO') return 'To Do';
  if (taskStatus === 'IN_PROGRESS') return 'In Progress';
  return 'Done';
};

onMounted(fetchTasks);
</script>

<template>
  <main class="app">
    <section class="hero">
      <div class="heroContent">
        <p class="eyebrow">NestJS + Vue</p>

        <h1>TaskBoard API UI</h1>

        <p class="heroText">
          A clean Vue frontend connected to your NestJS backend. Create, update,
          delete, and manage tasks using real API calls.
        </p>

        <div class="stats">
          <div class="statCard">
            <span>{{ tasks.length }}</span>
            <p>Total Tasks</p>
          </div>

          <div class="statCard">
            <span>{{ tasks.filter((task) => task.status === 'TODO').length }}</span>
            <p>To Do</p>
          </div>

          <div class="statCard">
            <span>{{ tasks.filter((task) => task.status === 'DONE').length }}</span>
            <p>Done</p>
          </div>
        </div>
      </div>
    </section>

    <section class="layout">
      <aside class="panel createPanel">
        <div class="sectionTitle">
          <p class="eyebrow">Create</p>
          <h2>New Task</h2>
        </div>

        <form class="form" @submit.prevent="createTask">
          <div class="fieldGroup">
            <label for="title">Task Title</label>
            <input
              id="title"
              v-model="title"
              type="text"
              placeholder="Example: Build auth module"
            />
          </div>

          <div class="fieldGroup">
            <label for="description">Description</label>
            <textarea
              id="description"
              v-model="description"
              placeholder="Write task details..."
            />
          </div>

          <div class="fieldGroup">
            <label for="status">Status</label>
            <select id="status" v-model="status">
              <option
                v-for="option in statusOptions"
                :key="option"
                :value="option"
              >
                {{ getStatusLabel(option) }}
              </option>
            </select>
          </div>

          <button class="primaryBtn" type="submit" :disabled="loading">
            {{ loading ? 'Saving...' : 'Create Task' }}
          </button>
        </form>

        <p v-if="error" class="error">{{ error }}</p>
      </aside>

      <section class="tasks">
        <div class="tasksHeader">
          <div class="sectionTitle">
            <p class="eyebrow">Board</p>
            <h2>Tasks</h2>
          </div>

          <button class="refreshBtn" type="button" @click="fetchTasks">
            Refresh
          </button>
        </div>

        <p v-if="loading && tasks.length === 0" class="muted">
          Loading tasks...
        </p>

        <p v-else-if="tasks.length === 0" class="emptyState">
          No tasks yet. Create your first task from the form.
        </p>

        <div v-else class="taskGrid">
          <article
            v-for="task in tasks"
            :key="task.id"
            class="taskCard"
          >
            <div class="taskTop">
              <span class="statusBadge" :class="task.status.toLowerCase()">
                {{ getStatusLabel(task.status) }}
              </span>

              <button
                class="iconBtn"
                type="button"
                @click="deleteTask(task.id)"
                title="Delete task"
              >
                ×
              </button>
            </div>

            <div class="taskBody">
              <h3>{{ task.title }}</h3>
              <p>{{ task.description || 'No description added.' }}</p>
            </div>

            <div class="taskFooter">
              <small>
                {{ new Date(task.createdAt).toLocaleString() }}
              </small>

              <select
                :value="task.status"
                @change="
                  updateStatus(
                    task,
                    ($event.target as HTMLSelectElement).value as TaskStatus
                  )
                "
              >
                <option
                  v-for="option in statusOptions"
                  :key="option"
                  :value="option"
                >
                  {{ getStatusLabel(option) }}
                </option>
              </select>
            </div>
          </article>
        </div>
      </section>
    </section>
  </main>
</template>