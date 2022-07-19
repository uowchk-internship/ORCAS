import { Chips, Chip, createStyles, Image, Accordion, Group } from '@mantine/core';
import { useState, useEffect } from 'react'

import { getWithKeywordsAndStatus } from '../../functions/materials'
import SearchItem from './searchItem'
import PageNumber from '../page'

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

    const [fetched, setFetched] = useState(false)
    const [materials, setMaterials] = useState([])
    const [filteredMaterials, setFilteredMaterials] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

    const [keyword, setKeyword] = useState("")
    const [oldKeyword, setOldKeyword] = useState("")

    //filters
    const [chosenTab, setChosenTab] = useState(["Journals Article", "Newspapers Article", "Video"])
    const [yearFilter, setYearFilter] = useState("0")
    const [subjectFilter, setSubjectFilter] = useState(["Science & Technology", "Arts & Humanities", "Social Science", "Business", "Others"])
    const [sortNew, setSortNew] = useState(false)

    //for monitoring changes in filter
    const [oldChosenTab, setOldChosenTab] = useState(["Journals Article", "Newspapers Article", "Video"])
    const [oldYearFilter, setOldYearFilter] = useState("0")
    const [oldSubjectFilter, setOldSubjectFilter] = useState(["Science & Technology", "Arts & Humanities", "Social Science", "Business", "Others"])
    const [oldSortNew, setOldSortNew] = useState(false)

    const checkFilterChanged = () => {
        let result = true;

        if (chosenTab !== oldChosenTab) {
            setOldChosenTab(chosenTab)
        } else if (yearFilter !== oldYearFilter) {
            setOldYearFilter(yearFilter)
        } else if (subjectFilter !== oldSubjectFilter) {
            setOldSubjectFilter(subjectFilter)
        } else if (sortNew !== oldSortNew) {
            setOldSortNew(sortNew)
        } else {
            result = false
        }

        return result
    }

    const checkFilterMatch = (item) => {
        let result = false;

        //checking type
        for (const tab of chosenTab)
            if (item.type.includes(tab))
                result = true;

        if (result) {
            result = false;

            //checking subject
            for (const subject of subjectFilter)
                if (item.subject.includes(subject))
                    result = true;
        }

        if (result && yearFilter !== "0") {
            result = false;

            //checking year
            let targetYear = new Date().getFullYear() - parseInt(yearFilter)
            if (item.publishYear >= targetYear)
                result = true
        }

        return result;
    }

    const filterAndSort = () => {
        //filter and sort the array
        let filtered = []
        for (const item of materials) {
            if (checkFilterMatch(item)) {
                filtered.push(item)
            }
        }

        if (sortNew) {
            filtered.sort((a, b) => b.publishYear - a.publishYear)
        } else {
            filtered.sort((a, b) => a.publishYear - b.publishYear)
        }

        setFilteredMaterials(filtered)
        setCurrentPage(1)
        setTotalPage(Math.ceil(filtered.length / 10))
    }

    const fetchMaterials = async (keyword_) => {
        let result = await getWithKeywordsAndStatus("approve", keyword_)
        setMaterials(result)
        setFetched(true)
    }



    useEffect(() => {

        if (!fetched) {
            fetchMaterials("")
            filterAndSort()
        }

        if (checkFilterChanged()) {
            filterAndSort()
        }

    })

    return (
        <>
            <section id="search-bar" >
                <div id="search-container">
                    <input value={keyword} onChange={(e) => {
                        setKeyword(e.target.value);
                        fetchMaterials(e.target.value);
                        filterAndSort()
                    }}
                        type="text" placeholder="Please input the keywords" name="search" />
                    <a onClick={() => setFetched(false)}>
                        <Image src="/images/search.png" height={39} width={39} />
                    </a>
                </div>
            </section>
            <div className="uw-search--sort cell large-12">
                <div>
                    <p className="results">
                        Results &nbsp;
                        <b>
                            {(currentPage - 1) * 10 + 1} -&nbsp;
                            {(filteredMaterials.length < currentPage * 10) ?
                                filteredMaterials.length : currentPage * 10}
                        </b>
                        &nbsp;of <b>{filteredMaterials.length}</b> for "<b>{keyword}</b>"
                    </p>
                </div>
                <div className="uw-search--sort-by">
                    <ul>
                        <li><a className={`button-hr ` + (sortNew ? 'selected' : "")} onClick={() => { setSortNew(true) }}>New to old</a></li>
                        <li><a className={`button-hr ` + (!sortNew ? 'selected' : "")} onClick={() => { setSortNew(false) }}>Old to new</a></li>
                    </ul>
                </div>
            </div>

            <div style={{ padding: 10 }}>
                <Chips value={chosenTab} onChange={setChosenTab} multiple size="md" radius="sm" classNames={classes}>
                    <Chip value="Journals Article">Journals Articles ({filteredMaterials.filter(item => (item.type === "Journals Article")).length})</Chip>
                    <Chip value="Newspapers Article">Newspapers Articles ({filteredMaterials.filter(item => (item.type === "Newspapers Article")).length})</Chip>
                    <Chip value="Video">Video ({filteredMaterials.filter(item => (item.type === "Video")).length})</Chip>
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
                                            <Chip value="0">All</Chip>
                                            <Chip value="6">Last 6 Years</Chip>
                                            <Chip value="3">Last 3 Years</Chip>
                                            <Chip value="1">Last Year</Chip>
                                        </Chips>
                                    </div>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion multiple initialItem={0}>
                                <Accordion.Item label="Subject" >
                                    <div>
                                        <Chips value={subjectFilter} onChange={setSubjectFilter} multiple size="md" radius="sm" classNames={classes} >
                                            <Chip value="Science & Technology">Science & Technology</Chip>
                                            <Chip value="Arts & Humanities">Arts & Humanities</Chip>
                                            <Chip value="Social Science">Social Science</Chip>
                                            <Chip value="Business">Business</Chip>
                                            <Chip value="Others">Others</Chip>
                                        </Chips>
                                    </div>
                                </Accordion.Item>
                            </Accordion>

                        </div>



                        <div className="uw-search--results cell large-9" >
                            <h2 style={{ fontSize: 40 }}>Search Results</h2>

                            <div id="result-container">
                                {(filteredMaterials.length > 0) ?
                                    [...filteredMaterials].map((item, i) => {
                                        if (checkFilterMatch(item) &&
                                            ((i <= (currentPage * 10 - 1)) && (i >= ((currentPage - 1) * 10))))
                                            return <SearchItem data={item} key={i} />
                                    }) :
                                    <>
                                        No result
                                    </>
                                }
                            </div>
                            <div >
                                <nav aria-label="pagination">
                                    <ul className="pagination uw-pagination" style={{ textAlign: "center", width: "100%" }}>
                                        <Group>
                                            <PageNumber
                                                currentPage={currentPage}
                                                setCurrentPage={setCurrentPage}
                                                totalPage={totalPage}
                                            />
                                        </Group>
                                    </ul>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}
