import Navigation from '../components/Navigation';
import Heading from '../components/Heading';

export default function About() {
    return (
    <div>
        <Navigation />
        <Heading heading="About" />
        <div className="body flex flex-col justify-center mb-10">
            <div className="mission m-auto w-4/5">
                <div className="font-bold text-4xl mb-5">Our Mission:</div>
                <div>
                    Through education, compassion, and a united community, we aim 
                    to transform fear into resilience, uncertainty into hope, and isolation 
                    into connection. Together, we envision a world where the journey of CHD 
                    is met with understanding, strength, and unwavering support.
                </div>
            </div>
            <div className="vision mt-10 m-auto w-4/5">
                <div className="font-bold text-4xl mb-5">Our Vision:</div>
                <div>
                    Our vision at Heart Connected is a world transformed by compassion, 
                    knowledge, and unity. We envision a future where the burden of 
                    congenital Heart Disease (CHD) is significantly reduced, and individuals 
                    and families facing this diagnosis find solace in a community that 
                    understands, empowers, and supports them. In this world, the trauma 
                    response to a CHD diagnosis is replaced with resilience, hope, and 
                    strength. We see a society where every child born with CHD has access 
                    to the best possible care, where their families are equipped with the 
                    information and resources they need to make informed decisions, and where 
                    the journey of CHD is met with unwavering support and camaraderie. With 
                    your partnership, we are working tirelessly to turn this vision into 
                    reality, one heart at a time.
                </div>
            </div>
        </div>
    </div>

    )
}