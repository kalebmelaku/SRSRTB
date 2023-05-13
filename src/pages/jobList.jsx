import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Box from "../components/box";
function JobList() {
  return (
    <>
      <NavBar />
      <section id="vacancy" className="py-3 pb-5">
        <div className="container mx-auto max-w-screen-xl mt-5 p-4">
          <h2 className="text-center py-2 mt-5 mb-5 fw-bold">Current Openings</h2>
          <div className="flex-container">
            <Box title={'Job Title 1'}/>
            <Box title={'Job Title 2'}/>
            <Box title={'Job Title 3'}/>
            <Box title={'Job Title 4'}/>
            <Box title={'Job Title 5'}/>
            <Box title={'Job Title 6'}/>
            <Box title={'Job Title 7'}/>
            <Box title={'Job Title 8'}/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default JobList;