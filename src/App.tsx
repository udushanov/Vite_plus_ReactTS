import { Product } from './components/Product'
import { products } from './data/product'

function App() {
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <Product product={products[0]}/>
    </div>
  )
}

export default App
