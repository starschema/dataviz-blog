import { PortableTextTypeComponentProps } from "@portabletext/react";
import Tableau from "components/Tableau";

type TableauValue = {
    _type?: 'tableau'
    src: string
    alt: string
}
type Props = PortableTextTypeComponentProps<TableauValue>
export default function TableauBlock(props: Props) {
    const { src, alt } = props.value;
    return <Tableau src={src} alt={alt} />
}