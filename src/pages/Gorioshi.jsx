import DataBuilder from "../components/DataBuilder"


function Gorioshi() {
    return (
        <>
            <div className="mx-auto max-w-screen-lg p-4">
                <p className="font-bold text-2xl">ゴリ押しの会</p>
                <p>
                    成立しないように見える文を、ゴリ押して正しくできるように考えてみる
                </p>
                <DataBuilder />
            </div>
        </>
    )    
}

export default Gorioshi
