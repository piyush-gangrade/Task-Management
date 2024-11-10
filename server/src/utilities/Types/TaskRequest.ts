export interface TaskRequest {
    title: string,
    description: string,
    deadline: Date
}

export interface TaskUpdateRequest {
    title: string,
    description: string,
    deadline: Date
    status: string, 
}

export interface TaskParams {
    id: string
}