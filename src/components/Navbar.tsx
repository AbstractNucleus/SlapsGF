import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav>
                <Link href="/">
                    <a>
                        <h1>
                            Home
                        </h1>
                    </a>
                </Link>
                <p>
                    Navbar
                </p>
            </nav>
        </>
    )
}