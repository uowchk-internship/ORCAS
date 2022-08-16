import { useState, useEffect } from 'react'
import { getRandomMaterials } from "../../functions/materials";

import SearchItem from '../student/searchItem'

export default function HomeComponent() {
    const [randomArticle, setRandomArticle] = useState({})
    const [randomVideo, setRandomVideo] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchMaterials = async () => {
            setRandomArticle(await getRandomMaterials("Article"))
            setRandomVideo(await getRandomMaterials("Video"))
            console.log(await getRandomMaterials("Video"))
            setLoaded(true)
        }

        if (!loaded) {
            fetchMaterials();
        }
    })
    return (
        <>
            <section className="page-content grid-container uw-text-block">
                <h2 className="cell js-scroll-reveal--left">Virtual study learning support platform</h2>
                <div className="cell medium-7 large-8 text standard-content-text js-scroll-reveal">
                    <p>
                        This Virtual Student Learning Support Platform provides a collection of information and materials related to student learning skills. The contributors include staff of this College, experts from different areas writing in websites of educational institutes worldwide and, in particular, from those from the University of Wollongong.  Another kind of useful information covered by this centralized depository is the learning support activities organised by the College, different academic units as well as non-College parties.
                    </p>
                </div>
            </section>

            <section className="page-content grid-container uw-text-block">
                <h2 className="cell js-scroll-reveal--left">ORCAS</h2>
                <div className="cell medium-7 large-8 text standard-content-text js-scroll-reveal">
                    <p>
                        Students’ power is huge and infinite; hence we would like to utilize this power and turn it into tools that can benefit more students. PALS had illustrated how students can help others in a very small scale, and the purpose of developing ORCAS is to expand the reach of each portion of power that a student contributes.
                        <br /><br />
                        ORCAS is not just a place where students can find resources, it is a place where students can earn rewards through contribution. Students are encouraged to contribute to the resource banks and forums, and we wish that everyone can be benefitted by ORCAS.

                        <br /><br />
                        The system is named after orcas, or killer whales in a more general sense. Orcas are highly intelligent and social animals; these animals are keen on hunting as a team and they are located at the top of the marine food chain. If orcas are human, they are the ideal type of students that we all wish to have, the name of the system is reflecting our expectation of our students. Orcas are collaborative hunters, and ORCAS is a collaborative system; orcas benefit the herd by strategically group hunts, students collaborate via ORCAS to be benefitted together.
                    </p>
                </div>
            </section>

            <section className="page-content grid-container uw-text-block">
                <table>
                    <thead>
                        <tr>
                            <td>A featured article randomly chosen from the database</td>
                            <td>A featured video randomly chosen from the database</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr valign="top">
                            <td>
                                <SearchItem preview={false} data={randomArticle} />
                            </td>
                            <td>
                                <SearchItem preview={false} data={randomVideo} />

                                {(randomVideo.url !== undefined) ?
                                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${randomVideo.url.split("v=")[1]}`}
                                        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    : <></>
                                }                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>


            <section className="page-content grid-container uw-text-block">
                <span id="d.en.104737"></span>
                <div className="grid-x grid-padding-x">
                    <div className="cell">
                        <h2>Project Team</h2>
                    </div>
                    <div className="cell large-auto">
                        <p><strong>Project Coordinator:</strong></p>
                        <p>Professor Lilian VRIJMOED</p>
                        <p>Vice-President (Academic), UOWCHK</p>
                        <p>&nbsp;</p></div>
                    <div className="cell large-auto">
                        <p><strong>Project Manager:</strong></p>
                        <p>Mr. Andrew MUI</p>
                        <p>Assistant College Secretary</p></div>
                    <div className="cell large-auto">
                        <p><strong>Project Assisant:</strong></p>
                        <p>Mr.&nbsp;Hugo YU</p>
                        <p>Executive Assistant</p></div>
                </div>
            </section>
            <section className="grid-container uw-panel-grid-links">
                <h2 className="uw-h3">Student Learning Support System</h2>
                <span id="d.en.104785"></span>
                <div className="grid-x xsmall-up-2 medium-up-6 xlarge-up-8">


                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/discipline-based-knowledge/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_SBK_Icon_2-747x422.png" ct-id="104759" alt="" />
                            <span>Discipline-based knowledge</span>
                        </a>
                    </div>
                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/student-learning-activities/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_SLA_ICON-750x417.png" ct-id="104767" alt="" />

                            <span>Student learning activities</span>
                        </a>
                    </div>
                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/college-academic-news/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_CAN_ICON-750x417.png" ct-id="104771" alt="" />

                            <span>College academic news</span>
                        </a>
                    </div>
                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/learning-strategy-and-methods/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_LSM_ICON-750x417.png" ct-id="104775" alt="" />

                            <span>Learning strategy and methods</span>
                        </a>
                    </div>
                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/lassi/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_LASSI_ICON-746x422.png" ct-id="104550" alt="" />

                            <span>LASSI</span>
                        </a>
                    </div><div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/peer-assisted-learning-scheme-pals/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_PALS_Icon-746x422.png" ct-id="104779" alt="" />

                            <span>Peer-assisted Learning Scheme</span>
                        </a>
                    </div>
                    <div className="cell uw-study-areas__item">
                        <a href="https://www.uowchk.edu.hk/current-students/student-learning-support-system/supportive-information-for-lassi-attributes-achievements/">
                            <img src="https://www.uowchk.edu.hk/site-assets/uow-college-hong-kong/college/slss/SLSS_Home_TV_ICON-750x417.png" ct-id="104783" alt="" />

                            <span>Training videos</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="page-content grid-container uw-text-block">
                <span id="d.en.104190"></span>
                <div className="grid-x grid-padding-x">
                    <div className="cell">
                        <h2>Enquiry</h2>
                    </div>
                    <div className="cell large-auto">
                        <p>Tel.&nbsp;2707 3127&nbsp;</p>
                        <p>Email:&nbsp;<a href="mailto:uowchk-slss@uow.edu.au">uowchk-slss@uow.edu.au</a></p>
                    </div>
                </div>
            </section>
        </>
    );
}
