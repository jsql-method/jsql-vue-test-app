CALL cd ../jsql-axios
CALL dev.bat
CALL xcopy dist\jsql-axios.js ..\jsql-vue-test-app\node_modules\jsql-axios /Y
CALL cd ../jsql-vue-test-app
CALL cd node_modules\jsql-axios
CALL del jsql-axios.min.js
CALL rename jsql-axios.js jsql-axios.min.js
CALL cd ..
CALL cd..
CALL npm run serve
