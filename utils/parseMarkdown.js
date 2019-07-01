const md2json = require('md-2-json');
const slugify = require('slugify');

const getFirstKey = (obj) => {
  return Object.keys(obj)[0];
};

const parseMarkdown = (markdownContent) => {
  const contentJson = md2json.parse(markdownContent);
  const articles = contentJson[Object.keys(contentJson)[0]];

  return Object.keys(articles).map((title) => {
    const slug = slugify(title, { lower: true });
    const date = getFirstKey(articles[title]);
    const type = getFirstKey(articles[title][date]);
    const content = articles[title][date][type]['raw'];

    return {
      slug,
      title,
      date,
      type,
      shortContent: `${content.slice(0, 20)}...`,
      content,
    };
  });
};

module.exports = parseMarkdown;
