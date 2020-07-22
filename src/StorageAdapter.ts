import {ObserverAdapter, OnChangeCallback} from '@enbock/state-value-observer/ValueObserver';

export default class StorageAdapter<Type> implements ObserverAdapter<Type> {
  protected baseAdapter: ObserverAdapter<Type>;
  protected onChangeCallback: OnChangeCallback<Type>;

  constructor(baseAdapter: ObserverAdapter<Type>, onChangeCallback: OnChangeCallback<Type>) {
    this.baseAdapter = baseAdapter;
    this.onChangeCallback = onChangeCallback;
  }

  onChange(newValue: Type): void {
    this.onChangeCallback(newValue);
    this.baseAdapter.onChange(newValue);
  }
}
