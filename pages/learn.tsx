import ExternalLink from "@/components/ExternalLink";
import Heading from "@/components/Heading";
import Navigation from "@/components/Navigation"
import YouTubePlayer from '@/components/YouTubePlayer';
import Image from "next/image";

// rollover to compare normal heart, make all our examples like this http://www.pted.org/?id=doubleoutlet1

export default function Learn() {
    return (
        <div>
            <Navigation />
            <div className="bg-indigo">
                <Heading heading="Learn" />
            </div>

            <div className="body text-black px-10">
                <h3 className="font-bold mb-6 text-center">Structural Heart Development in a Nutshell:</h3>
                <div className="flex flex-row py-10 justify-center">
                    <p className="w-80 mr-10">
                        Early cardiac development begins with single triple-layer pipe that twists 
                        and folds upon itself creating a heart tube with an arterial and venous pole 
                        and slow rhythmic contractions. Soon after the four chambers begin to 
                        differentiate, and the pulmonary vessels form and attach to the left atrium.
                    </p>
                    <Image 
                        src="https://www.mechanobio.info/wp-content/uploads/2017/06/stages-of-cardiac-development.jpg" 
                        width={150} 
                        height={150} 
                        alt="Stages of heart development" 
                        className=""
                    />
                </div>
                <div className="flex flex-row py-10 justify-center align-middle">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tapv-575px.jpg/300px-Tapv-575px.jpg" 
                        width={250} 
                        height={150} 
                        alt="TAPVR" 
                        className=""
                    />
                    <p className="w-80 ml-10 my-auto">
                        Inappropriate attachment of the pulmonary veins leads to a complex cardiac lesion, 
                        called TAPVR (totally anomalous pulmonary venous return), whose severity depends 
                        their exact attachment location. 
                    </p>

                </div>
                <p className="md:mx-20 lg:mx-80">
                    Then the electrical conduction system matures followed by complete division of the 
                    four heart chambers, turning a single bloodstream 
                    into distinct pulmonary and systemic loops with the heart being the go between. 
                    This is a result of cushions that fuse and form the walls separating the heart 
                    chambers. 
                </p>
                <p className="md:mx-20 lg:mx-80 mt-10">
                    During the formation of interatrial and interventricular septations 
                    incomplete closure can occur resulting in atrial and/or ventricular septal defects 
                    (ASD and VSD, respectively). 
                </p>
                <Image 
                    src="https://www.tourmyindia.com/medical-tourism/uploads/procedure/images/37f154c6feba39ae9fab3f31f5923c8f.jpg" 
                    width={550} 
                    height={150} 
                    alt="atrial and ventricular septal defects" 
                    className="m-auto py-10"
                />
                <p className="md:mx-20 lg:mx-80">
                    While these defects are usually considered non-severe 
                    (or acyanotic), Tetrology of Fallot (ToF) is a complex VSD with additional 
                    features stemming from the exact location of the lesion.
                </p>
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Tetralogy_of_Fallot.svg/1200px-Tetralogy_of_Fallot.svg.png" 
                    width={450} 
                    height={150} 
                    alt="Tetrology of Fallot" 
                    className="m-auto py-10"
                />
                <p className="md:mx-20 lg:mx-80">
                    After complete chamber differentiation and septum formation, the outflow 
                    tracts (i.e., aorta and pulmonary arteries) develop and this is where 
                    defects including transposition of the great arteries (TGA), double 
                    outlet right ventricle (DORV), and pulmonary atresia occur. 
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                    <Image 
                        src="https://www.heart.org/-/media/Images/Health-Topics/Congenital-Heart-Defects/50_1683_53_ToGA.jpg" 
                        width={250} 
                        height={150} 
                        alt="Transposition of the great arteries" 
                        className="m-auto pb-10"
                    />
                    <div>
                        <p>Double Outlet Right Ventricle</p>
                        <Image 
                            src="https://www.mountsinai.org/files/MSHealth/Assets/HS/Locations/CHOP/MSHS-CHOP-CongenitalHeart-DORVsubaortic-2col-770x420.jpg" 
                            width={350} 
                            height={150} 
                            alt="Double outlet right ventricle" 
                            className="m-auto pb-10"
                        />
                    </div>
                    <div>
                        <p>Pulmonary Atresia</p>
                        <Image 
                            src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2013/08/26/10/58/ds01204_im04757_mcdc7_pulmonaryatresiathu_jpg.jpg" 
                            width={250} 
                            height={150} 
                            alt="Pulmonary atresia" 
                            className="m-auto pb-10"
                        />
                    </div>
                </div>     
                <p className="md:mx-20 lg:mx-80">
                    Inappropriate outflow development can also lead to misplacement of the coronary artery 
                    (vessels supplying the heart muscle). In the final stages of structural 
                    development, atrioventricular (AV) and semi-lunar valves form. Valve formation 
                    defects include Ebstein’s anomaly or a bicuspid (two leaf, rather than the 
                    expected three leaf) aortic valve, which can present with early tricuspid 
                    incompetency, aortic calcification, and/or heart failure. (Buijtendijk et al., 2020) 
                </p>
                <p className="md:mx-20 lg:mx-80 mt-10">
                    For more details pertaining to the development of a specific lesion please visit the&#160; 
                    <ExternalLink
                        link="https://www.heart.org/en/health-topics/congenital-heart-defects/about-congenital-heart-defects"
                        name="AHA"
                    />
                    &#160;or&#160; 
                    <ExternalLink
                        link="https://www.cdc.gov/ncbddd/heartdefects/index.html"
                        name="CDC"
                    />
                    &#160;website. You can also view a visual representation of the developing heart below.
                </p>
            </div>

            {/* <div className="video m-auto my-5 w-1/2">
                <YouTubePlayer videoId="ICwr5bXfwDo" />
                <div className="caption text-center mt-1">Congenital Heart Defects Explained: Tetralogy of Fallot</div>
            </div> */}
            <div className="video m-auto my-5 w-1/2">
                <YouTubePlayer videoId="4H-dSo6IhrM" />
                <div className="caption text-center mt-1">Development of the ventricles and large arterial vessels</div>
            </div>
        </div>
    )
}