import Banner from "../components/banner"
import NavBar from "../components/navbar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSuitcase, faList, faMale, faCalendar } from '@fortawesome/free-solid-svg-icons'
export default function Jobs() {


  return (
    <>
    <Banner/>
    <NavBar/>
           <section className="job-list">
        <div className="container">
            <div className="d-flex flex-column flex-lg-row gap-3">
                <div className="mt-3 col-lg-3">
                    <div className="p-2 bg-white d-flex justify-content-between align-items-center border-bottom">
                        <h2 className="text-black font-weight-bold text-lg mb-2">Similar Jobs</h2>
                        <i id="bars" className="menu_btn fa-solid mb-2 text-black fa-bars fa-2x hide"></i>
                    </div>
              
                    <div id="menu" className="mob-view bg-white">
                        <ul className="bg-white px-0 border-bottom">
                            <li className="mb-2 p-2">
                                <a href="#">
                                    <h3 className="px-0">Job Title</h3>
                                </a>
                                <p className="px-0">Posted Date</p>
                            </li>
                            <li className="mb-2 p-2">
                                <a href="#">
                                    <h3 className="px-0">Job Title</h3>
                                </a>
                                <p className="px-0">Posted Date</p>
                            </li>
                            <li className="mb-2 p-2">
                                <a href="#">
                                    <h3 className="px-0">Job Title</h3>
                                </a>
                                <p className="px-0">Posted Date</p>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className="bg-white mt-3 p-3 col-lg-9">
                    <div className="d-flex flex-column justify-content-between border-bottom mb-4">
                        <h2 className="font-weight-bold text-2xl">Job Title</h2>
                        <p className="sub-title">location and posted date</p>
                    </div>
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="main-info">
                            <ul className="px-0">
                                <li className="py-2 fs-5"><FontAwesomeIcon icon={faSuitcase} /> Full time</li>
                                <li className="py-2 fs-5"><FontAwesomeIcon icon={faList}/> Main Skill</li>
                                <li className="py-2 fs-5"><FontAwesomeIcon icon={faMale}/> Number of required
                                    people</li>
                                <li className="py-2 fs-5"><FontAwesomeIcon icon={faCalendar}/> deadline to
                                    apply</li>
                            </ul>
                            <a href="./apply" className="btn">Apply</a>
                        </div>
                    </div>
                    <div className="about my-4">
                        <h4>About The Job</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium nihil consequuntur est
                            adipisci unde porro consequatur, pariatur fugit quaerat dolor, exercitationem facilis quia
                            ducimus odio? Ea aut officia illum tempore corporis officiis sit. Ducimus ullam asperiores
                            debitis architecto. Delectus explicabo corrupti nisi rem numquam facilis ducimus minima
                            possimus dolorem velit.</p>
                        <h5>Responsibilities</h5>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                            <li>
                                <p>Voluptas illum esse beatae eum officia.</p>
                            </li>
                            <li>
                                <p>Consequuntur vero temporibus rem omnis laborum.</p>
                            </li>
                            <li>
                                <p>Porro omnis eos quaerat corporis recusandae!</p>
                            </li>
                            <li>
                                <p>Beatae tempore placeat ipsum ad in!</p>
                            </li>
                            <li>
                                <p>Maiores unde magni accusantium. Dignissimos, reiciendis.</p>
                            </li>
                        </ul>
                        <h5>Requirements</h5>
                        <ul>
                            <li>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </li>
                            <li>
                                <p>Dolorem unde ipsum itaque adipisci explicabo!</p>
                            </li>
                            <li>
                                <p>Fuga exercitationem dolores atque reiciendis laboriosam.</p>
                            </li>
                            <li>
                                <p>Id magni dolorem sequi officiis iure.</p>
                            </li>
                            <li>
                                <p>Aspernatur libero quaerat architecto repellendus accusamus!</p>
                            </li>
                            <li>
                                <p>Ab facere iusto nesciunt possimus velit?</p>
                            </li>
                            <li>
                                <p>Quaerat, nemo non. Impedit, necessitatibus iure?</p>
                            </li>
                            <li>
                                <p>Saepe optio at eos magni vel?</p>
                            </li>
                            <li>
                                <p>Beatae aspernatur debitis est consequuntur cumque!</p>
                            </li>
                            <li>
                                <p>Minima cum consequatur ducimus eum magni?</p>
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <Banner/>
    </>
  )
}


