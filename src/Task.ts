export class Task {
    id: number;
    title: string;
    description: string;
    isComplete: boolean;
  
    constructor(id: number, title: string, description: string = "") {
      this.id = id;
      this.title = title;
      this.description = description;
      this.isComplete = false;
    }
  
    toggleComplete(): void {
      this.isComplete = !this.isComplete;
    }
  
    update(title: string, description: string): void {
      this.title = title;
      this.description = description;
    }
  }
  