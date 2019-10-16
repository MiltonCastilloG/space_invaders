document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
};