export function setLocalStorage(obj) {
  for (const property in obj) {
    localStorage.setItem(`${obj[ property ].name}`, obj[ property ].value);
  }
}

export function getLocalStorageItem(name) {
  return localStorage.getItem(name);
}