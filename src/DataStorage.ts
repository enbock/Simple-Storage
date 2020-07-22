import {ObserverAdapter, OnChangeCallback} from '@enbock/state-value-observer/ValueObserver';
import StorageAdapter from './StorageAdapter';

export interface AdapterDictionary {
  [index: string]: StorageAdapter<any>
}

export default class DataStorage {
  protected domain: string;
  protected storage: Storage;
  protected adapters: AdapterDictionary;

  constructor(domain: string, storage: Storage) {
    this.domain = domain;
    this.storage = storage;
    this.adapters = {};
  }

  attach<Type>(key: string, adapter: ObserverAdapter<Type>): StorageAdapter<Type> {
    const callback: OnChangeCallback<Type> = (newValue: Type) => this.updateStorage(key, newValue);
    const storageAdapter: StorageAdapter<Type> = new StorageAdapter<Type>(adapter, callback);
    this.adapters[key] = storageAdapter;

    return storageAdapter;
  }

  loadData<Type>(key: string, initialValue: Type): Type {
    const serializedJsonData: string | null = this.storage.getItem(this.domain + '::' + key);
    let data: Type = initialValue;
    if (serializedJsonData != null) {
      data = JSON.parse(serializedJsonData) as Type;
    }

    return data;
  }

  protected updateStorage<Type>(key: string, newValue: Type) {
    this.storage.setItem(this.domain + '::' + key, JSON.stringify(newValue));
  }
}
