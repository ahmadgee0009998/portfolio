class KanbanBoard {
  constructor() {
    this.tasks = {
      todo: [],
      doing: [],
      done: [],
    };

    this.taskIdCounter = 1;
    this.draggedTask = null;
    this.init();
  }

  init() {
    this.loadTasks();
    this.setupEventListeners();
    this.setupDragAndDrop();
    this.updateTaskCounts();
  }

  setupEventListeners() {
    document
      .getElementById("todo-add")
      .addEventListener("click", () => this.addTask("todo"));
    document
      .getElementById("doing-add")
      .addEventListener("click", () => this.addTask("doing"));
    document
      .getElementById("done-add")
      .addEventListener("click", () => this.addTask("done"));

    document.getElementById("todo-input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTask("todo");
    });

    document.getElementById("doing-input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTask("doing");
    });
    document.getElementById("done-input").addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTask("done");
    });
  }

  loadTasks() {
    const savedTasks = localStorage.getItem("kanban-tasks")
    const savedCounter = localStorage.getItem("kanban-counter")

    if (savedTasks) {
      this.tasks = JSON.parse(savedTasks)
    }

    if (savedCounter) {
      this.taskIdCounter = Number.parseInt(savedCounter)
    }

    this.renderTasks()


  }

  saveTasks() {
    localStorage.setItem("kanban-tasks", JSON.stringify(this.tasks))
    localStorage.setItem("kanban-counter", this.taskIdCounter.toString())
  }

  updateTaskCounts() {
    document.getElementById("todo-count").textContent = this.tasks.todo.length
    document.getElementById("doing-count").textContent = this.tasks.doing.length
    document.getElementById("done-count").textContent = this.tasks.done.length
  }

  escapeHtml(text) {
    const div = document.createElement("div")
    div.textContent = text
    return div.innerHTML
  }
}