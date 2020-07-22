import {ObserverAdapter, OnChangeCallback} from '@enbock/state-value-observer/ValueObserver';
import StorageAdapter from './StorageAdapter';

describe('Storage.StorageAdapter', () => {
  it('Calls callback and base adapter on change', () => {
    const baseAdapter: ObserverAdapter<string> = {onChange: jest.fn()};
    const callback: OnChangeCallback<string> = jest.fn();

    const adapter: StorageAdapter<string> = new StorageAdapter<string>(baseAdapter, callback);
    adapter.onChange('new');

    expect(baseAdapter.onChange).toHaveBeenCalledWith('new');
    expect(callback).toHaveBeenCalledWith('new');
  });
});
