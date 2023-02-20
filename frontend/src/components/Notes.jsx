import Note from "./Note";

const Notes = () => {
    return (
        <>
            <Note />
            <div className='my-5 bg-white p-2 rounded-2xl drop-shadow-xl '>
                <h2 className="text-2xl pt-3  ml-7 text-blue-500 ">
                    Titulo de la Nota
                </h2>
                <div className="flex justify-center py-5 mb-7">
                    <p className="text-xl rounded-2xl border border-gray-300 w-11/12 h-20" type="textarea">
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut 
                    </p>
                </div>
            </div>
            <div className='my-5 bg-white p-2 rounded-2xl drop-shadow-xl '>
                <h2 className="text-2xl pt-3  ml-7 text-blue-500 ">
                    Titulo de la Nota
                </h2>
                <div className="flex justify-center py-5 mb-7">
                    <p className="text-xl rounded-2xl border border-gray-300 w-11/12 h-20" type="textarea">
                        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut 
                    </p>
                </div>
            </div>
        </>
    )
}
export default Notes
