
import React from "react";
import "./shortnews.css";
import news1 from "../../icons/news1.jpg";
import news2 from "../../icons/news2.jpg";
import news3 from "../../icons/news3.jpg";


import {Link} from "react-router-dom"

export function ShortcutOfShortNews() {
    return(
        <div>
            <h2 className="shortNewsh2">News & Events</h2>
            <div className="shortNewsItem">
                <img src={news1} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/%d5%a9%d5%b8%d6%82%d5%b4%d5%b8-%d5%ac%d5%a1%d5%a2%d5%a5%d6%80%d5%ab%d6%81-vxsoft/" target="_blank">Թումո լաբերից` VXSoft. Սասունի <br/>բռտասնամյա թումոյական ճանապարհը</a></h3>
                    <span>22-ամյա Սասունին կարելի է «վետերան թումոցի» կոչել, քանի որ նա անցել 
                    է Թումոյի ամբողջական շղթայով՝ Թումո – Թումո լաբեր – 42 Երևան, իսկ այժմ 
                    համատեղում է ուսումը՝ ՏՏ ընկերությունում աշխատանքի հետ: Բայց այս ամենի 
                    մասին` հերթով:</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news2} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/shortcut-%d5%a4%d5%a5%d5%ba%d5%ab-%d5%bf%d5%bf-%d5%b8%d5%ac%d5%b8%d6%80%d5%bf/" target="_blank">Shortcut դեպի ՏՏ ոլորտ</a></h3>
                    <span>Այս բլոգում մեր խոշորացույցի տակ են հայտնվել Թումո լաբերի առաջին ու 
                    ամենաակտիվ ուսանողներից տվյալագետ Սոնա Գաբրիելյանն ու ծրագրավորող Արթուր 
                    Սահակյանը, որոնք այս կարճ ժամանականակահատվածում հասցրել են առաջ շարժվել և՛ 
                    ուսումնական, և՛ գործնական ոլորտներում:</span>
                </div>
            </div>
            <div className="shortNewsItem">
                <img src={news3} className="newsImg"/>
                <div className="shortNewsPart">
                    <h3><a href="https://tumolabs.am/%d5%ad%d5%a5%d5%ac%d5%a1%d6%81%d5%ab-%d6%84%d5%a1%d5%b2%d5%a1%d6%84/" target="_blank">Խելացի քաղաք</a></h3>
                    <span>Թումո լաբերի և Ագրարային համալսարանի համատեղ նախագծում ուսանողները մշակել 
                    են սենսորներից, շատրվաններից, մուտքի համակարգերից, 
                    լուսացույցներից և ծխի դետեկտորներից բաղկացած խելացի քաղաք:</span>
                </div>
            </div>
            <Link to="/newsevents">Find more</Link>
        </div>
    )
}

export default function Shortnews(){

    return(
        <div className="newsShortContainer">
            <ShortcutOfShortNews />
        </div>
    )
}