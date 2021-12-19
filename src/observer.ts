interface Observer {
  readonly id: any;
  update(): void;
}

abstract class Observer implements Observer {
  constructor(public readonly id: any) {}

  update() {
    console.log(`Updating observer:  ${this.id}`);
  }
}
