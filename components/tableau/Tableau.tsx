import { calculatePngDimensions } from 'lib/calculatePngDimensions';
import { imageUrlFromDashboardUrl } from 'lib/tableauUtils';
import Image from 'next/image';

import Overlay from './Overlay';

interface Props {
    url: string,
    alt?: string
}

export default async function Tableau(props: Props) {
    const imageUrl = imageUrlFromDashboardUrl(props.url);
    const dimensions = await calculatePngDimensions(imageUrl);
    const aspectRatio = dimensions.width / dimensions.height;
    return <div style={{ height: `300px`, aspectRatio: aspectRatio }} className='relative'>
        <Image src={imageUrl} alt={props.alt} height={300} width={300 * aspectRatio} />
        <Overlay url={props.url} alt={props.alt} imageWidth={dimensions.width} imageHeight={dimensions.height} />
    </div>
}