require('dotenv').config();

const fs = require('fs');
const fetch = require('isomorphic-fetch');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const next = require('next');
const app = next({ dev });
const handle = app.getRequestHandler();
const { read, write } = require('to-vfile');

app
  .prepare()
  .then(() => {
    const server = express();

    (async () => {
      try {
        const response = await fetch(
          'https://api.github.com/gists/5702c079a98014c1479da4a47f755b4c',
        );
        const data = await response.json();
        const files = data.files;
        const { fileName, content } = files[Object.keys(files)[0]];

        const dir = './content';

        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir);
        }

        fs.writeFile(`${dir}/changelog.md`, content, function(err) {
          if (err) throw err;
          console.log('File is created successfully.');
        });
      } catch (e) {
        console.log(e);
      }
    })();

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
