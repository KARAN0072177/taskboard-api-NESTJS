import axios from 'axios';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface Task {
  _id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
  status?: TaskStatus;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  status?: TaskStatus;
}

const API_URL = 'http://localhost:3000/tasks';

export const taskApi = {
  getTasks: async () => {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  },

  createTask: async (payload: CreateTaskPayload) => {
    const response = await axios.post<Task>(API_URL, payload);
    return response.data;
  },

  updateTask: async (_id: string, payload: UpdateTaskPayload) => {
    const response = await axios.patch<Task>(`${API_URL}/${_id}`, payload);
    return response.data;
  },

  deleteTask: async (_id: string) => {
    const response = await axios.delete<{ message: string }>(
      `${API_URL}/${_id}`,
    );
    return response.data;
  },
};