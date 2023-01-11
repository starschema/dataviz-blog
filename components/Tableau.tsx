'use client'
import Modal from "components/Modal";
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";

interface Props {
    url: string
    alt: string
}
export default function Tableau(props: Props) {
    const [isZoomed, setIsZoomed] = useState(false);
    const { url, alt } = props;
    // the structure of a tableau public url is basepath/app/profile/<authorname>/viz/<workbookname>/<viewname>
    // we want to extract the workbookname and viewname
    const workbookName = url.split("/")[5];
    const viewName = url.split("/")[6];
    // example tableau public url is https://public.tableau.com/app/profile/julia.borsi/viz/VisitVincent/VisitVincent
    // example fullImageUrl is https://public.tableau.com/static/images/Vi/VisitVincent/VisitVincent/1.png
    const fullImageUrl = `https://public.tableau.com/static/images/${workbookName.slice(0, 2)}/${workbookName}/${viewName}/1.png`;
    //render the preview image by default
    return (
        <div className="relative h-full">
            <Image src={fullImageUrl} fill alt={alt} className='object-contain' />
            {isZoomed && <Modal open={isZoomed} onClose={() => setIsZoomed(!isZoomed)} >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={fullImageUrl} alt={alt} className='object-contain h-full' />
            </Modal>}
            <div className="opacity-0 absolute h-full w-full hover:opacity-100 flex flex-col justify-evenly items-center content-center bg-neutral-700/50">
                <button className="rounded-xl h-8 w-36 bg-neutral-700/50" onClick={() => setIsZoomed(!isZoomed)}>Expand Image</button>
                <button className="rounded-xl h-8 w-36 bg-neutral-700/50">
                    <Link href={url} target={"_blank"}>
                        Open in Tableau
                    </Link>
                </button>
            </div>
        </div>
    );

}