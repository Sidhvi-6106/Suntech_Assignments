import {useEffect,useState} from 'react'

function ProductsList() {
    let [products,setProducts]=useState([])
    let [loading,setLoading]=useState(false)
    let [error,setError]=useState(null)
    useEffect(()=>{
        async function getProducts(params){
        setLoading(true) 
            try{
            let res=await fetch("https://fakestoreapi.com/products")
            if(res.status===200){
                //extract json data
                let products=await res.json()
                //update state
                setProducts(products)
            }else{
                throw new Error("Failed to fetch")
            }
        }catch(err){
            setError(err)
        }finally{
            setLoading(false)
        }
            
        }
        getProducts();
    },[])
    if(loading===true){
        return <p className='text-center text-2xl text-blue-200'>Loading...</p>
    }
    if(error!==null){
        return <p className='text-center text-2xl text-red-600'>{error.message}</p>
    }
  return (
    <div className='grid
                    grid-cols-1 
                    sm:grid-cols-2 
                    md:grid-cols-3 
                    lg:grid-cols-4 
                    gap-12 
                    mt-10 
                    text-center'>
        {products.map((productObj)=>(
            <div key={productObj.id} className='shadow md p-10 rounded-2xl'>
            <img src={productObj.image}
            className='h-44 object-contain block mx-auto mb-10' />
            <p>{productObj.title}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductsList