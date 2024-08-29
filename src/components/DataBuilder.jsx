import data from "../data"

function DataBuilder() {
    return (
        <>
            {
                data.map((value,key) => {
                    return (
                        <ul className="list-disc list-inside">
                            <li key={key} className="p-4">
                                <span className="font-bold">{value['title']}</span>
                                <div className="p-4">
                                    定義:
                                    <ul className="list-disc list-inside">
                                        {
                                            value['define'].map((value,key) => {
                                                return <li key={key}>{value}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="p-4">
                                    予想:
                                    <ul className="list-disc list-inside">
                                        {
                                            value['answer'].map((value,key)=>{
                                                return <li key={key}>{value}</li>
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    )
                })
            }
        </>
    )
}

export default DataBuilder
