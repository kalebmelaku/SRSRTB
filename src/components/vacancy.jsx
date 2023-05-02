import { Link } from "react-router-dom"
export default function Vacancy(){
    return (
        <>
            <section id="vacancy" className="py-3">
        <div className="container-sm">
            <h2 className="text-center py-2 my-5 fw-bold">Vacancy</h2>
            <div className="flex-container">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Job Title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">2023-04-29</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            cards content.</p>
                    <a href="#" className="btn card-link">Apply</a>
                    {/* <a href="./job_detail.html" className="btn card-link">Read More</a> */}
                    <Link to="/jobs" className="btn card-link">Read More</Link>
                </div>
            </div>
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">Job Title</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary">2023-04-29</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                        cards content.</p>
                        <a href="#" className="btn card-link">Apply</a>
                         {/* <a href="./job_detail.html" className="btn card-link">Read More</a> */}
                    <Link to="/jobs" className="btn card-link">Read More</Link>
                    </div>
                </div>
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Job Title</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">2023-04-29</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            cards content.</p>
                            <a href="#" className="btn card-link">Apply</a>
                             {/* <a href="./job_detail.html" className="btn card-link">Read More</a> */}
                    <Link to="/jobs" className="btn card-link">Read More</Link>
                        </div>
                    </div>
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">Job Title</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">2023-04-29</h6>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                cards content.</p>
                                <a href="#" className="btn card-link">Apply</a>
                                 {/* <a href="./job_detail.html" className="btn card-link">Read More</a> */}
                    <Link to="/jobs" className="btn card-link">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
        </>
    )
}