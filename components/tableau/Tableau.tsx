import { calculatePngDimensions } from 'lib/calculatePngDimensions';
import { imageUrlFromDashboardUrl } from 'lib/tableauUtils';
import Image from 'next/image';
import Link from 'next/link';

import Overlay from './Overlay';

interface Props {
    url: string,
    alt?: string,
    className?: string,
}

export default async function Tableau(props: Props) {
    const imageUrl = imageUrlFromDashboardUrl(props.url);
    const dimensions = await calculatePngDimensions(imageUrl);
    const imageHeight = 300;
    const aspectRatio = dimensions.width / dimensions.height;
    const containerWidth = imageHeight * aspectRatio;
    return <div className={props.className}>
        <Link className='underline text-right block mb-2 underline-offset-2 decoration-blue-600' style={{ width: `${containerWidth}px` }} href={props.url} target='_blank'>Open the viz on Tableau Public</Link>
        <div style={{ height: `${imageHeight}px`, aspectRatio: aspectRatio }} className='relative outline outline-[#C676BD] outline-[5px] rounded-lg overflow-hidden shadow-[#C676BD] shadow-[10px_13px_0px_0px_rgba(0,0,0,1)]'>
            <Image src={imageUrl} alt={props.alt} height={300} width={containerWidth} />
            <Overlay url={props.url} alt={props.alt} imageWidth={dimensions.width} imageHeight={dimensions.height} />
        </div>
    </div>

}