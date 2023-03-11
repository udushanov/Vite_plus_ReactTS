import { useState } from 'react'
import { CreateProduct } from './components/CreateProduct'
import { ErrorMessage } from './components/ErrorMessage'
import { Loader } from './components/Loader'
import { Modal } from './components/Modal'
import { Product } from './components/Product'
import { IProduct } from './data/models'
import { useProducts } from './hooks/getProducts'

function App() {

  const {loading, error, products, addProduct} = useProducts()
  const [modal, setModal] = useState(true)

  const createHandler = (product: IProduct) => {
    setModal(false)
    addProduct(product)
  } 

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map(product => <Product key={product.id} product={product}/>)}
      {modal && <Modal title="Create new product">
        <CreateProduct onCreate={createHandler}/>
      </Modal>}
    </div>
  )
}

export default App
