import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
import type { CourseData } from '../types/index';
import he from 'he';

type Props = {
    scroll: boolean;
    data: CourseData;
};

export default function Card({ scroll, data }: Props) {
    const decodedTitle = he.decode(data.title.rendered);

    return (
        <div className={`inline-block ${scroll ? 'min-w-courseScroll' : ''}`}>
            <Link
                href={{
                    pathname: '/[country]/[region]/[slug]',
                    query: { country: `${data._embedded['wp:term'][0][1].slug}`, region: `${data._embedded['wp:term'][0][0].slug}`, slug: data.slug }
                }}
            >
                <div
                    className="w-full h-cardImage"
                    style={{
                        backgroundImage: `url(${data.acf.image_carousel[0].url})`,
                        backgroundSize: 'cover'
                    }}
                >
                </div>
            </Link>
            <div className="mt-2">
                <div className="flex flex-col gap-1">
                    <h5 className="font-bold text-sm whitespace-normal">{decodedTitle}</h5>
                    <div className="flex">
                        {data._embedded['wp:term'][0].map((term, index) => (
                            <span className="text-xs mr-2"key={index}>
                                {term.name}
                                {index == 0 ? ',': ''}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center">
                        <FontAwesomeIcon icon={faStar} className={'mr-1.5 w-3 h-3'} />
                    </div>
                </div>
            </div>
        </div>
    )
}