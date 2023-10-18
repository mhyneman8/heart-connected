import Link from "next/link";

type Heading = {
    link: string;
    name: string;
}

export default function ExternalLink({ link, name }: Heading) {
    return (
        <Link href={link} target='_blank' className="underline text-blue hover:text-purple">
            {name}
        </Link>
    )
}