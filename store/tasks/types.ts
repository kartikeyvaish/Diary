export interface TasksProps {
    completed: boolean;
    taskName?: string;
    datetime?: string;
    id: string;
}

export interface TasksInitialStateProps {
    tasks: Array<TasksProps>
}

// TasksActionProps interface
export interface TasksActionProps {
    type: string;
    payload?: {
        tasks?: Array<TasksProps>;
        task?: TasksProps;
        task_id?: string;
        taskName?: string;
    };
}