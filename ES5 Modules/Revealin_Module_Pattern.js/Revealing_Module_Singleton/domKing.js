const domKing = (() => {
  const selector = element => {
    return document.querySelector(`#${element}`);
  };
  const renderer = (element, text) => {
    document.querySelector(`#${element}`).innerHTML = text;
  };
  return { selector, renderer };
})();
