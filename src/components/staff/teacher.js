export default function Teacher() {
    return (
        <>
            <svg width="30" height="300" id="left-col">
                <rect width="30" height="300" style={{ fill: "#ED0A00", strokeWidth: 3, stroke: "#ED0A00" }} />
            </svg>
            <div id="select-part">
                <h1 className="checklink" >Students Approval <span className="arrow"> &gt; </span> </h1>
                <p className="description">Review the learning resources submitted by students</p>
                <h1 className="checklink">Management <span className="arrow"> &gt; </span> </h1>
                <p className="description">Manage website’s articles and videos </p>
                <h1 className="checklink" >Upload <span className="arrow"> &gt; </span> </h1>
                <p className="description">Upload learning resources</p>
            </div>
        </>
    );
}