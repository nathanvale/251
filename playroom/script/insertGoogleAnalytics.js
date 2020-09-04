const fs = require("fs");

// this adds the google analytics tag to the playroom html
const gaTag = `
 <!-- Global site tag (gtag.js) - Google Analytics -->
 <!-- Ask Bryce or in #design-system-support for access -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-177238734-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-177238734-1');
</script>`;

const filePath = "./dist/index.html";
const fileEncoding = "utf8";
const fileStr = fs.readFileSync(filePath, fileEncoding);
const endHead = "</head>";
const newFileStr = fileStr.replace(endHead, `${gaTag}${endHead}`);
fs.writeFileSync(filePath, newFileStr, fileEncoding);
// eslint-disable-next-line no-console
console.log(`GA inserted into ${filePath}`);
