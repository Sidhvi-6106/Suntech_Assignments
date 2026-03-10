function Product(props){
    let {image,name,brand,description,price}=props.product;
    return(
        <div className=" bg-blue-200 p-4 rounded-xl shadow ">
            <img src={image} alt={name} className=" mx-auto mb-4 w-40 h-40 object-cover rounded"/>
            <div className="border-2 bg-slate-100 rounded-xl p-4 text-center">
            <p className="text-xl font-semibold">{name}</p>
            <p className="text-lg">{brand}</p>
            <p className="text-md">{description}</p>
            <p className="text-xl font-bold">{price}</p>
            </div>
        </div>
    );
}
export default Product;