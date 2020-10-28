export default (text) => {
  const h1 = document.createElement('h1');
  h1.innerHTML = text;
  return h1;
};
