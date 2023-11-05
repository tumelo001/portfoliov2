export default function About() {
    return(
        <div className="about-section" id="about">
            <h2>Here's little about me😊</h2>
            <div className="about-me-timeline" >
                <div className="about-highSchool info">
                    <h4>January 2015 - December 2019</h4>
                    <p>Attended Mainganya Secondary School and matriculated with an average of 66%</p>
                </div>
                <div className="about-university info">
                <h4>January 2021 - Present</h4>
                    <p>Enrolled at the University of the Free State to pursue a BSc IT degree with a major in Computer Science and Business, Currently maintaining an average of 82%.</p>
                </div>
                <div className="about-work info">
                <h4>August 2022 - Present</h4>
                    <p>Worked as a CSI Module Demonstrator in the CSI Department at UFS</p>
                </div>
                <div className="about-timeline">
                    <div className="about-timeline-circle x1"></div>
                    <div className="about-timeline-circle x2"></div>
                    <div className="about-timeline-circle x3"></div>
                </div>
                <button className="download-cv">Download CV</button>
            </div>
        </div>
    );
}