//update-version.js
const path = require('path');
const fs = require('fs');
const newVersion = process.argv[2].replace(/^v/, '');; // 獲取命令行參數中的新版本號,並過濾v字頭
if (!newVersion) {
    console.log('請傳入新版本號,版本號遵循semver規範 .eg: 1.0.0, 1.0.1, 1.1.0');
    process.exit(1);
}
// 獲取當前命令行上下文路徑
const currentDirectory = process.cwd();
// 獲取 package.json 文件中的版本號
const packageJsonPath = path.join(currentDirectory, 'package.json');
const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
const packageJson = JSON.parse(packageJsonContent);
const currentVersion = packageJson.version;
// 更新 package.json 文件中的版本號
packageJson.version = newVersion;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`版本號已從 ${currentVersion} 更新為 ${newVersion}`);