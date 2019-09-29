const path = require('path')

// Great way to reference the root of the project. See this used in `admin.js` around lines 3 and 8
module.exports = path.dirname(process.mainModule.filename)