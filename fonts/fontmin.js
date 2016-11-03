const Fontmin = require('fontmin');
const fs = require('fs');

const fonts = JSON.parse(fs.readFileSync('./fonts/font.json', 'utf-8'));

const arr = Object.keys(fonts).map(item => ({
  origin: fonts[item].origin,
  type: fonts[item].type,
  url: fonts[item].url,
  text: fonts[item].text,
  name: item,
}));

let fontmin;

arr.map((item, index) => {

  fontmin = new Fontmin();

  fontmin.use(Fontmin.glyph({
    text: item.text,
    hinting: false         // keep ttf hint info (fpgm, prep, cvt). default = true
  }));

  fontmin.use(Fontmin.ttf2woff());
  // fontmin.use(Fontmin.ttf2svg());
  // fontmin.use(Fontmin.css({
  //   fontPath: './',         // location of font file
  //   base64: true,
  //   fontFamily: item.name,
  //   asFileName: true,
  // }));
  fontmin.src(`./fonts/origin/${item.origin}`);
  fontmin.dest(`./app/fonts/`);

  // callback (err, files)
  fontmin.run((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`font ${item.name} convert successfully !!!`);
    }
  });

  return null;
});
