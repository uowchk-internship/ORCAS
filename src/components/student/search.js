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
    const [chosenTab, setChosenTab] = useState(["Journals Article", "Newspapers Article", "Video"])
    const [yearFilter, setYearFilter] = useState("0")
    const [subjectFilter, setSubjectFilter] = useState(["Science & Technology", "Arts & Humanities", "Social Science", "Business", "Others"])
    const [sortNew, setSortNew] = useState(false)

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

    useEffect(() => {
        const fetchMaterials = async () => {
            let result = await getWithKeywordsAndStatus("approve", keyword)
            setMaterials(result)
            setCurrentPage(1)
            setTotalPage(Math.ceil(result.length / 10))
        }


        if (!fetched) {
            setFetched(true)
            fetchMaterials();
        }

        //Sort the array with old and new
        // let filtered = []
        // for (const item of materials) {
        //     if (checkFilterMatch(item))
        //         filtered.push(item)
        // }
        let filtered = []
        if (sortNew) {
            console.log("by new")
            filtered = materials.sort((a, b) => a.publishYear - b.publishYear)
        } else {
            console.log("by old")
            filtered = materials.sort((a, b) => b.publishYear - a.publishYear)
        }

        setFilteredMaterials(filtered)

    })

    return (
        <>
            <section id="search-bar" >
                <div id="search-container">
                    <input value={keyword} onChange={(e) => { setKeyword(e.target.value); setFetched(false) }}
                        type="text" placeholder="Please input the keywords" name="search" />
                    <button type="submit" style={{ height: 39 }}>
                        {/* <i className="fa fa-search"></i> */}
                        <Image src="/images/search.png" height={39} width={39} />
                    </button>
                </div>
            </section>
            <div className="uw-search--sort cell large-12">
                <div>
                    <p className="results">Results 1 - 10 of {materials.length} for "{keyword}"</p>
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
                    <Chip value="Journals Article">Journals Articles (100)</Chip>
                    <Chip value="Newspapers Article">Newspapers Articles (100)</Chip>
                    <Chip value="Video">Video (100)</Chip>
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
                                        if (checkFilterMatch(item))
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
