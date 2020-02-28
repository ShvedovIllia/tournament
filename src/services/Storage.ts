export interface IStorage {
  get: (key: string) => string | null;
  setInSession: (data: object) => void;
  setInLocal: (data: object) => void;
  clear: (keys: string[]) => boolean;
}

export class Storage implements IStorage {
  private _storages = [
    window.sessionStorage,
    window.localStorage,
  ];

  public get = (key: string) => (this._getItem(0, key) || this._getItem(1, key));

  public setInSession = (data: object) => this._setItem(0, data);

  public setInLocal = (data: object) => this._setItem(1, data);

  public clear = (keys: string[]) => {
    keys.forEach(key =>
      this._storages.forEach(s => s.removeItem(key))
    );

    return true;
  };

  private _getItem = (priority: number, key: string) => this._storages[priority].getItem(key);

  private _setItem = (priority: number, data: object) => {
    if (typeof data !== 'object') {
      throw new Error('Invalid type of data in "_setItem" method');
    }

    return Object.entries(data).forEach(
      ([key, value]) => this._storages[priority].setItem(key, value)
    );
  }
}
