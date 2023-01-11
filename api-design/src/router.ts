import { Router } from 'express'
import { body, oneOf, validationResult } from 'express-validator'
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from './handlers/products'
import { createUpdate, deleteUpdate, getUpdate, getUpdates, updateUpdate } from './handlers/update'
import { handleInputErrors } from './middleware'

const router = Router()

// Product
router.get('/products', (req, res) => getProducts)
router.get('/product/:id', getProduct)
router.put("/product/:id", body("name").isString(), handleInputErrors, updateProduct);
router.post('/product',  body("name").isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

// Update
router.get('/updates', getUpdates)
router.get('/update/:id', getUpdate)
router.put('/update/:id', 
  body('title').optional(), 
  body('body').optional(), 
  body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECIATED']), 
  body('version').optional(),
  updateUpdate,
)
router.post('/update', createUpdate)
router.delete('/update/:id', deleteUpdate)

// Update Point
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', 
  body('name').optional(), 
  body('description').optional().isString(), 
  
() => {})
router.post('/updatepoint', 
  body('name').isString(),
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {})
router.delete('/updatepoint/:id', () => {})

export default router