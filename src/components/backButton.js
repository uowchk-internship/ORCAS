import Link from 'next/link'


export default function ReturnButton() {
    return (
        <>
            <section className="page-content grid-container uw-text-block">
                <span id="d.en.105001"></span>
                <div className="grid-x grid-padding-x">
                    <div className="cell large-auto">
                        <p style={{ textAlign: "right" }}>
                            <Link href="/">
                                Back
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}