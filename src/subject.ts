interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

abstract class Subject implements Subject {
  private _observers: Observer[] = [];

  subscribe(observer: Observer) {
    this._observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    this._observers = this._observers.filter((element) => {
      return observer.id === element.id;
    });
  }

  notify() {
    this._observers.forEach((observer) => {
      observer.update();
    });
  }
}
