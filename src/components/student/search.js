import { Chips, Chip, createStyles, Group, Image } from '@mantine/core';
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

    const [chosenTab, setChosenTab] = useState("")

    return (
        <>
            <section id="search-bar">
                <div id="search-container">
                    <input type="text" placeholder="Please input the keywords" name="search" />
                    <button type="submit" style={{ height: 39 }}>
                        {/* <i className="fa fa-search"></i> */}
                        <Image src="/images/search.png" height={39} width={39} /> 
                    </button>
                </div>
            </section>

            <section className="types-container">
                <div className="row row-cols-auto">
                    <br />

                    <Group>
                        <Chips value={chosenTab} onChange={setChosenTab} multiple size="md" radius="sm" classNames={classes}>
                            <Chip value="journals">Journals Articles (100)</Chip>
                            <Chip value="artsHumanities">Newspapers Articles (100)</Chip>
                            <Chip value="socialScience">Social Science (100)</Chip>
                        </Chips>

                    </Group>

                    {/* <button type="button" className="col" style={{ marginLeft: "20px" }}>
                        Journals Articles ()
                        <div className="arrow" id="arrow1"></div>
                    </button>

                    <button type="button" className="col">
                        Newspapers Articles ()
                        <div className="arrow" id="arrow2"></div>
                    </button>

                    <button type="button" className="col">
                        Videos ()
                        <div className="arrow" id="arrow3"></div>
                    </button>
 */}
                </div>
            </section>

            {/* <section className="search-body">
                <div id="leftDiv">
                    <h2>Filter</h2>
                    <hr id="filter-hr" />

                    <div>
                        <div id="filter-arrow-1" className="filter-arrow"
                            onClick={dropdown('filter-arrow-1', 'checkbox-dropdown-list-1')}></div>
                        <p id="publicationYear">Publication Year</p>

                        <ul id="checkbox-dropdown-list-1">
                            <li><input type="checkbox" /><span className="conT">All</span></li>
                            <li><input type="checkbox" /><span className="conT">Last 6 Years</span></li>
                            <li><input type="checkbox" /><span className="conT">Last 3 Years</span></li>
                            <li><input type="checkbox" /><span className="conT">Last Year</span></li>
                        </ul>
                    </div>

                    <div>
                        <div id="filter-arrow-2" className="filter-arrow"
                            onClick="dropdown('filter-arrow-2', 'checkbox-dropdown-list-2')"></div>
                        <p id="subject">Subject</p>

                        <ul id="checkbox-dropdown-list-2">
                            <li><input type="checkbox" /><span className="conT">Arts & Humanities</span></li>
                            <li><input type="checkbox" /><span className="conT">Science & Technology</span></li>
                            <li><input type="checkbox" /><span className="conT">Business</span></li>
                            <li><input type="checkbox" /><span className="conT">Social Science</span></li>
                        </ul>
                    </div>

                    <button type="button" id="apply">Apply</button>
                </div>

                <div id="rightDiv">
                    <h2>Search Results</h2>

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

                    <nav className="pagination">
                        <div>
                            <button type="button" id="firstPage">&laquo;</button>
                            <button type="button" id="previousPage">PREVIOUS</button>
                            <button type="button" id="firstNum">1</button>
                            <button type="button" id="secondNum">2</button>
                            <button type="button" id="more">...</button>
                            <button type="button" id="lastPageNum">4</button>
                            <button type="button" id="nextPage">NEXT</button>
                            <button type="button" id="lastPage">&raquo;</button>
                        </div>
                    </nav>

                </div>

            </section> */}

        </>
    );
}
