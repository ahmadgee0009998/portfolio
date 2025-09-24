class KanbanBoard{
    constructor(){
        this.tasks ={
            Todo:[],
            doing:[],
            done:[],
        };
        this.taskIdCounter = 1;
        this.draggedTask = null;
        this.init();
    }
    init(){
        this.taskIdCounter = 1;
    this.draggedTask = null;
    this.init();
    }
}