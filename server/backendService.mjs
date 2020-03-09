import express from 'express'
import bodyParser from 'body-parser'

import { postProduct, getProducts } from './backendBusiness.mjs'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type')
    next()
})

app.listen(4000, () => {
    console.log("Server running on port 4000")
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))

const address = '/'

app.post(address + 'products', (req, res) => {
    try {
      postProduct(...Object.values(req.body))
      res.send({"status":"sucess", "method":"post", "path":address + "products", "message":"Product sucessfuly added!"})
    } catch (e) {
      res.send({"status":"fail", "method":"post", "path":address + "products", "error":e})
    }
})

app.get(address + 'products', (req, res) => {
  try {
    res.send({"status":"sucess", "method":"get", "path":address + "products", "products":getProducts()})
  } catch (e) {
    res.send({"status":"fail", "method":"get", "path":address + "products", "error":e})
  }
})
