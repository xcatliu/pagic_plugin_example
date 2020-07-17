export default {
  name: 'example',
  insert: 'before:script',
  fn: (pagic) => {
    console.log('Pagic plugin example running!');
    console.log('pagic.theme', pagic.theme);
  }
};
