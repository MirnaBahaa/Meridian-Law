import Orbit from "../Orbit";

export default function Testimonials() {
  return (
    <section className="section section-large white-smoke" id="client-stories">
      <div className="container">
        <div className="section-top is-centered">
          <div className="section-title is-centered">
            <h2 className="heading-text center">Five clients, five verdicts.</h2>
            <p className="regular-paragraph" data-reveal="2">
              Turn the wheel to hear from the people behind our settlements, verdicts and recoveries.
            </p>
          </div>
        </div>
        <Orbit />
      </div>
    </section>
  );
}
