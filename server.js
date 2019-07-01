require('dotenv').config();

const fetch = require('isomorphic-fetch');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const parseMarkdown = require('./utils/parseMarkdown');

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/post/:slug', (req, res) => {
      return app.render(req, res, '/post', { slug: req.params.slug });
    });

    server.get('/v1/changelog', async (req, res) => {
      try {
        const response = await fetch(
          'https://api.github.com/gists/5702c079a98014c1479da4a47f755b4c',
        );
        const data = await response.json();
        const files = data.files;
        const { content } = files[Object.keys(files)[0]];
        const formatedJson = parseMarkdown(content);

        res.send(formatedJson);
      } catch (e) {
        console.log(e);
      }
    });

    server.get('*', async (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
