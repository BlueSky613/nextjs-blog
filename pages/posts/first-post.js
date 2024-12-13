import Link from "next/link"

export default function FirstPost() {
    return (
        <div>
            <h1>First Post</h1>
            <h1>
                Read <Link href="/posts/first-post">this Page!</Link>
            </h1>
        </div>
    )
}