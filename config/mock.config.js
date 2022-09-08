const path = require("path")
const fs = require("fs")

const mockMiddleware = (config) => (req, res, next) => {
  const { projectDir, mockDir } = config // 获取传入的参数
  const reqPath = req.path + ".json"

  const filePath = path.join(projectDir, mockDir, reqPath)

  fs.readFile(filePath, "utf-8", (error, content) => {
    if (error) {
      next()
    } else {
      res.type("json")
      res.write(content)
      res.end()
    }
  })
}
module.exports = mockMiddleware
