import { useState } from "react"
import { IProduct } from "../data/models"

interface ProductProps {
  product: IProduct
}

export function Product({product}: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnClasses = details ? 'bg-yellow-400' : 'bg-green-400'
  const classes = ['py-2 px-4 border', btnClasses]

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img src={product.image} alt={product.title} className="w-1/6" />
      <p>{product.title}</p>
      <p className="font-bold">${product.price}</p>
      <button
        className={classes.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        {details ? 'Hide Details' : 'Show details'}
      </button>
      {details && <div>
        <p>{product.description}</p>
        <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>  
      </div>}
    </div>
  )
}