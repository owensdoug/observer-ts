interface Subject {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

abstract class Subject implements Subject {
  private _observers: Array<Observer> = new Array<Observer>();

  subscribe(observer: Observer): void {
    this._observers.push(observer);
  }

  unsubscribe(observer: Observer): void {
    this._observers = this._observers.filter((element) => {
      return observer.id === element.id;
    });
  }

  notify(): void {
    this._observers.forEach((observer) => {
      observer.update();
    });
  }
}
