import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request";
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react";
import { allBlogs } from "../../queries/allBlogs";
import style from "./AllBlogs.module.scss";

// import DOMPurify from 'dompurify';
{/* <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.text.html) }}></div> */ }

export const AllBlogs = () => {
    const allBlogsEntries = useQuery({
        queryKey: ['getAllBlogs'],
        queryFn: async () => request(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbdeq138a3801uk3zh7fmbl/master`,
            allBlogs)
    })

    const [sortedPost, setSortedPost] = useState();

    useEffect(() => {
        if (allBlogsEntries.isSuccess) {
            setSortedPost([...allBlogsEntries.data.blogPosts]);
        }
    }, [allBlogsEntries.isSuccess]);

    function dropDown(option) {
        if (option == "1") {
            const dates = [...allBlogsEntries.data.blogPosts];
            dates.sort((a, b) => new Date(b.date) - new Date(a.date));
            // console.log("Sorteret fra nyest til ældst", dates);
            setSortedPost(dates);
        }
        if (option == "2") {
            const titles = [...allBlogsEntries.data.blogPosts];
            titles.sort((a, b) => a.title.localeCompare(b.title));
            // console.log("sorteret i alfabetisk orden", titles);
            setSortedPost(titles);
        }
    }

    if (allBlogsEntries.isLoading) return (<p>Loading...</p>)

    return (
        <section className={style.allblogsStyle}>
            <h2>Artikler</h2>
            <select name="sort" onChange={(event) => dropDown(event.target.value)}>
                <option>Sorter efter</option>
                <option value="1">Dato</option>
                <option value="2">Navn</option>
            </select>
            <div className={style.container}>
                {sortedPost?.map((item, index) => {
                    return (
                        <article key={index}>
                            <figure>
                                <img src={item.image.url} alt={item.title} />
                            </figure>
                            <div className={style.text}>
                                <NavLink className={style.link} to="/">{item.title}</NavLink>
                                <p style={{ fontSize: "12px", marginBottom: "1em" }}>{item.date}</p>
                                <p>{item.summary}</p>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}