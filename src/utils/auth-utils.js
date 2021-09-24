export function isLogin(condition) {
  return condition === 'true';
}

export function logout() {
  const localStorageKeys = [Object.keys(localStorage)];
  
  for (const key of localStorageKeys[0]) {
    localStorage.removeItem(key);
  }

  window.location.href = '/'
}