export default (text) => {
  const h1 = document.createComment('h1');
  h1.html = text;
  return h1;
};
