import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Box from "../components/box";
function JobList() {
  return (
    <>
      <NavBar />
      <section id="vacancy" className="py-3 pb-5">
        <div className="container mx-auto max-w-screen-xl p-4">
          <h2 className="text-center py-2 my-5 fw-bold">Current Openings</h2>
          <div className="flex-container">
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default JobList;