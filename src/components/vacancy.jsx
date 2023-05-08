import { Link } from "react-router-dom";
import Box from "./box";
export default function Vacancy() {
  return (
    <>
      <section id="vacancy" className="py-3">
        <div className="container mx-auto max-w-screen-xl p-4">
          <h2 className="text-center py-2 my-5 fw-bold">Vacancy</h2>
          <div className="flex-container mt-4 w-full">
            <Box />
            <Box />
            <Box />
            <Box />
          </div>
          <div className="flex items-center justify-center mt-4">
            <a href="/jobList" className="btn card-link inline-block">
              Show More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
