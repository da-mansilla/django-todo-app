
const Note = () => {
    return (
        <div className='my-5 bg-white p-2 rounded-2xl drop-shadow-xl '>
            <h2 className="text-2xl pt-3  ml-7 text-blue-500 ">
                Titulo de la Nota
            </h2>
            <div className="flex justify-center py-5">
                <input className="text-xl rounded-2xl border border-gray-300 w-11/12 h-20" type="textarea" />
            </div>
            <div className="flex justify-end">
                <button className="text-white py-2 px-5 bg-blue-600 hover:bg-blue-700 border-gray-300 text-xl rounded-full " type="button">
                    Guardar
                </button>
            </div>
        </div>
    )
}
export default Note 
