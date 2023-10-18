// import config from "@/tailwind.config";

type Heading = {
    heading: string;
}

export default function Heading({ heading }: Heading) {
    return (
        <div className="hero flex flex-col justify-center mb-20">
            <div className="title text-7xl mx-auto mt-32 mb-16 text-center">{heading}</div>
        </div>
    )
}