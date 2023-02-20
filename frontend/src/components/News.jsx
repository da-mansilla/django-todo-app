const News = () => {
    return (
        <div className=" flex m-3 items-center p-4 border border-blue-200 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-blue-700">
            </div>
            <div className="flex flex-col px-3">
                <h3 className="text-blue-900 ">Agustin Mansilla</h3> 
                <span className="text-gray-500 text-sm">Hace 30 min</span>
                <p className="text-sm" > Agregó <span className="text-blue-500 font-bold">Ir de Compras</span> </p>
            </div>
        </div>
    )
}

export default News
