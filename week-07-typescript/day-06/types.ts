export type Priority='low'|'medium' |'high';

export interface TaskInput{
    title:string;
    description?:string;
    priority:Priority;
}

export interface ValidatedTaskInput{
    title:string;
    description:string;
    priority:Priority;
}

export interface Task extends ValidatedTaskInput{
    id:string;
    completed:boolean;
    createdAt:string;
}

export interface AddTaskAction{
    type:'ADD_TASK';
    payload:TaskInput & {
        id:string;
        createdAt:string;
    };
}

export interface UpdateTaskAction{
    type:'UPDATE_TASK';
    payload:{
        id:string;
        title?:string;
        description?:string;
        priority?:Priority;
    }
}

export interface ToggleTaskAction{
    type:'TOGGLE_TASK';
    payload:{
        id:string;
    };
}

export interface DeleteTaskAction{
    type:"DELETE_TASK";
    payload:{
        id:string;
    };
}

export type TaskAction= AddTaskAction | UpdateTaskAction | ToggleTaskAction | DeleteTaskAction ;

export type TaskFilter='all'|'active'|'completed';

export type TaskSort='newest'|'oldest'|'priority';

export type TaskUIAction='toggle'|'edit'|'delete';
