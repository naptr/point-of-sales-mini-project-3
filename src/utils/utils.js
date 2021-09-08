export function setLocalStorage(obj) {
  for (const property in obj) {
    localStorage.setItem(`${obj[property].name}`, obj[property].value);
  }
}

export function returnObjectKey(obj, idx) {
  return Object.keys(obj)[idx];
}

export function getLocalStorageItem(name) {
  return localStorage.getItem(name);
}

export function isLogin(condition) {
  return condition === 'true';
} 