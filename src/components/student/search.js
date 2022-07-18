import { Chips, Chip, createStyles, Image, Accordion } from '@mantine/core';
import { useState } from 'react'

const useStyles = createStyles((theme, _params, getRef) => ({
    iconWrapper: {
        ref: getRef('iconWrapper'),
    },

    checked: {
        backgroundColor: `#001641 !important`,
        color: theme.white,

        [`& .${getRef('iconWrapper')}`]: {
            color: theme.white,
        },
    },
}));


export default function Search() {
    const { classes } = useStyles();

    const [chosenTab, setChosenTab] = useState(["journals", "artsHumanities", "socialScience"])
    const [yearFilter, setYearFilter] = useState("all")
    const [subjectFilter, setSubjectFilter] = useState(["all","scienceTechnology","artsHumanities","socialScience","business","others"])

    return (
        <>
            <section id="search-bar" >
                <div id="search-container">
                    <input type="text" placeholder="Please input the keywords" name="search" />
                    <button type="submit" style={{ height: 39 }}>
                        {/* <i className="fa fa-search"></i> */}
                        <Image src="/images/search.png" height={39} width={39} />
                    </button>
                </div>
            </section>


            <div style={{ padding: 10 }}>
                <Chips value={chosenTab} onChange={setChosenTab} multiple size="md" radius="sm" classNames={classes}>
                    <Chip value="journals">Journals Articles (100)</Chip>
                    <Chip value="artsHumanities">Newspapers Articles (100)</Chip>
                    <Chip value="socialScience">Social Science (100)</Chip>
                </Chips>
            </div>


            <section className="search-body">
                <div className="grid-container">
                    <div className="grid-x grid-margin-x">
                        <div className="uw-search--filter cell large-3" >
                            <h2 style={{ fontSize: 40 }}>Filter</h2>
                            <hr id="filter-hr" />

                            <Accordion multiple initialItem={0}>
                                <Accordion.Item label="Publication Year">
                                    <div>
                                        <Chips value={yearFilter} onChange={setYearFilter} size="md" radius="sm" classNames={classes} >
                                            <Chip value="all">All</Chip>
                                            <Chip value="6year">Last 6 Years</Chip>
                                            <Chip value="3year">Last 3 Years</Chip>
                                            <Chip value="1year">Last Year</Chip>
                                        </Chips>
                                    </div>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion multiple  initialItem={0}>
                                <Accordion.Item label="Subject" >
                                    <div>
                                        <Chips value={subjectFilter} onChange={setSubjectFilter} multiple size="md" radius="sm" classNames={classes} >
                                            <Chip value="all">All</Chip>
                                            <Chip value="scienceTechnology">Science & Technology</Chip>
                                            <Chip value="artsHumanities">Arts & Humanities</Chip>
                                            <Chip value="socialScience">Social Science</Chip>
                                            <Chip value="business">Business</Chip>
                                            <Chip value="others">Others</Chip>
                                        </Chips>
                                    </div>
                                </Accordion.Item>

                            </Accordion>

                        </div>

                        <div className="uw-search--results cell large-9" >
                            <h2 style={{ fontSize: 40 }}>Search Results</h2>

                            <div id="result-container">
                                <div className="row result" id="result-1">
                                    <div className="col-sm-8 title" id="title-1">Science is good.</div>
                                    <div className="col-sm-4 author" id="author-1">Chris Wong<br />ABC Magainze</div>
                                    <div className="detail" id="detail-1">Newspaper Article | Published Online: 19 June 2022 | Views: 100</div>
                                </div>

                                <div className="row result" id="result-2">
                                    <div className="col-sm-8 title" id="title-2"></div>
                                    <div className="col-sm-4 author" id="author-2"><br /></div>
                                    <div className="detail" id="detail-2"></div>
                                </div>

                                <div className="row result" id="result-3">
                                    <div className="col-sm-8 title" id="title-3"></div>
                                    <div className="col-sm-4 author" id="author-3"><br /></div>
                                    <div className="detail" id="detail-3"></div>
                                </div>

                                <div className="row result" id="result-4">
                                    <div className="col-sm-8 title" id="title-4"></div>
                                    <div className="col-sm-4 author" id="author-4"><br /></div>
                                    <div className="detail" id="detail-4"></div>
                                </div>

                                <div className="row result" id="result-5">
                                    <div className="col-sm-8 title" id="title-5"></div>
                                    <div className="col-sm-4 author" id="author-5"><br /></div>
                                    <div className="detail" id="detail-5"></div>
                                </div>
                            </div>

                            <nav aria-label="pagination">
                                <ul class="pagination uw-pagination">

                                    <li class="pagination-previous button backward">
                                        <a href="#" aria-label="Previous Page">
                                            <span class="icon--chevron-left"></span>
                                            Previous<span class="show-for-sr">page</span>
                                        </a>
                                    </li>

                                    <li><a href="#" aria-label="Page 1">1</a></li>

                                    <li class="current"><span class="show-for-sr">You're on page</span>2</li>

                                    <li><a href="#" aria-label="Page 3">3</a></li>

                                    <li><a href="#" aria-label="Page 4">4</a></li>

                                    <li class="pagination-next button">
                                        <a href="#" aria-label="Next Page">
                                            Next<span class="show-for-sr">page</span>
                                            <span class="icon--chevron-right"></span>
                                        </a>
                                    </li>

                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
