import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation";
import ExternalLink from "@/components/ExternalLink";

export default function Resources() {
    return (
        <div>
            <Navigation />
            <Heading heading="Resources" />

            <div className="body flex flex-col justify-center">
                <div className="m-auto text-3xl">Safe Websites for Information</div>
                <ul className="m-auto mt-4 text-xl">
                    <li>
                        <ExternalLink 
                            link="https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects" 
                            name="American Heart Association"
                        />
                    </li>
                    <li>
                        <ExternalLink 
                            link="https://www.cdc.gov/ncbddd/heartdefects/index.html" 
                            name="Center for Disease Control and Prevention"
                        />
                    </li>
                    <li>
                        <ExternalLink 
                            link="https://www.luriechildrens.org/en/specialties-conditions/complex-congenital-heart-disease-care-center/" 
                            name="Lurie Children&apos;s Hospital"
                        />
                    </li>
                    <li>
                        <ExternalLink 
                            link="https://www.stanfordchildrens.org/en/topic/default?id=congenital-heart-disease-90-P02346" 
                            name="Standford Children&apos;s Hospital"
                        />
                    </li>
                    <li>
                        <ExternalLink 
                            link="https://mendedhearts.org/" 
                            name="Mended Hearts"
                        />
                    </li>
                    <li>
                        <ExternalLink 
                            link="https://theohhf.org/" 
                            name="Ollie Hinkle Heart Foundation"
                        />
                    </li>
                </ul>
            </div>
        </div>
    )
}