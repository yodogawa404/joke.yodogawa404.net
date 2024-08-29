import { Link } from "react-router-dom"

function Index() {
    return (
        <>
            <div className="flex flex-col gap-4 mx-auto max-w-screen-lg p-4">
                <p>
                    <span className="font-bold text-2xl">暇つぶしメモ</span>
                    <br />
                    脳内のリソースを無駄遣いするためのサイト
                </p>

                <div>
                    <p>ページ一覧:</p>
                    <ul className="list-disc list-inside">
                        <li>
                            <Link to='/gorioshi'>ゴリ押しの会</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default Index
