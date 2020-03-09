import fs from 'fs'

export const postProduct = (title, price, employee, category, description, review) => {
  try {
    const product = {
      "title": title,
      "price": price,
      "employee": employee,
      "category": category,
      'description': description,
      'review': review
    }
    let products = {}
    try {
      products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
    } catch (e) {
      throw {"error":e, "message":"Unable to read json from file!"}
    }
    addProduct(product, products)
    try {
      fs.writeFileSync('./products.json', JSON.stringify(products))
    } catch (e) {
      throw {"error":e, "message":"Unable to write json to file!"}
    }
  } catch (e) {
    throw {"error":e, "message":"Unable to add product!"}
  }
}

export const getProducts = _ => {
  try {
    let products = {}
    try {
      products = JSON.parse(fs.readFileSync('./products.json', 'utf-8'))
    } catch (e) {
      throw {"error":e, "message":"Unable to read json from file!"}
    }
    return products
  } catch (e) {
    throw {"error":e, "message":"Unable to get products!"}
  }
}

const addProduct = (product, products) => {
  if (Object.keys(products).length != 0) {
    products[calculateNextId(products)] = product
  } else {
    products["1"] = product
  }
}

const calculateNextId = object => {
  return ""+(+Object.keys(object)[Object.keys(object).length - 1] + 1)
}
