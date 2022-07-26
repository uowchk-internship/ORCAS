import Link from 'next/link'

export default function Homepage() {

    return (
        <>
            <section>
                <svg width="25" height="350" id="left-col">
                    <rect width="30" height="350" style={{ fill: "#ED0A00", strokeWidth: 3, stroke: "#ED0A00" }} />
                </svg>
                <div id="select-part">
                    <a><Link href="/staff/approval">
                        <h2 className="checklink" >
                            Students Approval &nbsp;
                            <span className="icon--chevron-right" style={{ fontSize: 35 }}></span>
                        </h2>
                    </Link></a>
                    <p className="description">Review the learning resources submitted by students</p>

                    <a><Link href="/staff/management">
                        <h2 className="checklink">
                            Management &nbsp;
                            <span className="icon--chevron-right" style={{ fontSize: 35 }}></span>
                        </h2>
                    </Link></a>

                    <p className="description">Manage website’s articles and videos </p>


                    <a><Link href="/staff/upload">
                        <h2 className="checklink" >
                            Upload &nbsp;
                            <span className="icon--chevron-right" style={{ fontSize: 35 }}></span>
                        </h2>
                    </Link></a>
                    <p className="description">Upload learning resources</p>
                </div>
            </section>

            <div style={{ paddingTop: 50, paddingBottom: 50 }}></div>

        </>
    );
}