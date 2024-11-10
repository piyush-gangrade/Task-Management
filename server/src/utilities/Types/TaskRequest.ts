export interface TaskRequest {
    title: string,
    description: string,
    deadline: Date
}

export interface UpdateTaskRequest {
    id: string, 
    title: string,
    description: string,
    deadline: Date
}

export interface TaskParams {
    id: string
}