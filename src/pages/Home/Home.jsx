import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { useState, useEffect } from "react"
import { allBlogs } from "../../queries/allBlogs"
import style from "./Home.module.scss"

export const Home = () => {
    const twoNewestPosts = useQuery({
        queryKey: ['getTwoBlogs'],
        queryFn: async () => request(`https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clnbdeq138a3801uk3zh7fmbl/master`,
            allBlogs)
    })

    const [sortedPost, setSortedPost] = useState([]);

    useEffect(() => {
        if (twoNewestPosts.isSuccess) {
            const sortedPosts = [...twoNewestPosts.data.blogPosts];
            sortedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
            setSortedPost(sortedPosts);
        }
    }, [twoNewestPosts.isSuccess]);


    console.log("sortedPost", sortedPost);


    if (twoNewestPosts.isLoading) return (<p>Loading...</p>)

    return (
        <section className={style.home}>
            <article>
                <h2>Velkommen til vores blog om Kvinder gennem tiden</h2>
                <p>Dyk ned i fortidens skatkammer af inspirerende kvinder, der har skabt forandring og efterladt deres uforglemmelige aftryk i historien. Fra dronninger og opdagelsesrejsende til kunstnere og videnskabskvinder - disse bemærkelsesværdige skikkelser har brudt grænser, udfordret normer og banet vejen for fremtidige generationer.</p>
                <p>Vores blog vil tage dig med på en rejse gennem århundreder og kontinenter for at udforske kvindernes utrolige bedrifter, der har formet verden, som vi kender den i dag. Gå ikke glip af de utrolige historier om mod, intelligens og udholdenhed, der vil efterlade dig oplyst og inspireret.</p>
            </article>
            {sortedPost?.slice(0, 2).map((item, index) => {
                return (
                    <article key={index}>
                        <figure>
                            <img src={item.image.url} alt={item.title} />
                        </figure>
                        <div className={style.text}>
                            <p className={style.link} to="/">{item.title}</p>
                            <p style={{ fontSize: "12px", marginBottom: "1em" }}>{item.date}</p>
                            <p>{item.summary}</p>
                        </div>
                    </article>

                )
            })}
        </section>
    )
}