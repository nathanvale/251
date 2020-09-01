import path from "path";
import fse from "fs-extra";

const packagePath = process.cwd();
const buildPath = path.join(packagePath, "../ods-icons/src/mui");
const srcPath = path.join(
  packagePath,
  "../../node_modules/@material-ui/icons/esm"
);

async function getAllMUIIcons() {
  const allIcons = await fse.readdirSync(`${buildPath}`, "utf8");
  return allIcons.filter((fileName) => fileName.includes("Icon"));
}

async function copyMUIIconsToODSIcons({
  from,
  to,
  muiIcons = [],
}: {
  from: string;
  to: string;
  muiIcons?: string[];
}) {
  //@ts-ignore
  if (!(await fse.exists(to))) {
    console.warn(`path ${to} does not exists`);
    return [];
  }

  function fileExistsWithCaseSync(filepath: string): boolean {
    const dir = path.dirname(filepath);
    if (dir === "/" || dir === ".") return true;
    const filenames = fse.readdirSync(dir);
    if (filenames.indexOf(path.basename(filepath)) === -1) {
      return false;
    }
    return fileExistsWithCaseSync(dir);
  }

  const files = muiIcons.filter((muiIconFile) =>
    fileExistsWithCaseSync(path.resolve(from, `${muiIconFile}.js`))
  );

  const cmds = files.map((file) => {
    const str = `import ${file} from "@material-ui/icons/${file}";
import { createMUISvgIcon } from "../_private/createMUISvgIcon";
export default createMUISvgIcon("${file}", ${file});`;
    return fse.writeFile(path.resolve(to, `Icon${file}.ts`), str);
  });

  await Promise.all(cmds);
  return files;
}

async function addIconToIndexJs(filenames: string[]) {
  const str = filenames
    .sort()
    .map((filename) => {
      filename = path.parse(filename).name;
      return `export { default as ${filename} } from "./${filename}";\n`;
    })
    .join("");
  await fse.writeFile(`${buildPath}/index.ts`, str);
  return str;
}

async function run() {
  try {
    const muiIcons = process.argv.slice(2);

    //Copy across esm icons from @material-ui/icons
    const filenames = await copyMUIIconsToODSIcons({
      from: srcPath,
      to: buildPath,
      muiIcons,
    });

    console.log("Mui icons added:", filenames);

    const allMuiIcons = await getAllMUIIcons();
    addIconToIndexJs(allMuiIcons);
    console.log("File index.ts rewritten");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run();
