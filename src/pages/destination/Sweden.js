import React, { useState, useEffect } from "react";
import sweden from "../../images/destination/sweden/sweden.webp";
import lecture from "../../images/destination/sweden/lecture.png";
import programs from "../../images/destination/sweden/programs.png";
import uni1 from "../../images/destination/sweden/unis/uni1.png";
import uni2 from "../../images/destination/sweden/unis/uni2.png";
import uni3 from "../../images/destination/sweden/unis/uni3.png";
import uni4 from "../../images/destination/sweden/unis/uni4.png";
import uni5 from "../../images/destination/sweden/unis/uni5.png";
import uni6 from "../../images/destination/sweden/unis/uni6.png";
import uni7 from "../../images/destination/sweden/unis/uni7.png";
import uni8 from "../../images/destination/sweden/unis/uni8.png";
import uni9 from "../../images/destination/sweden/unis/uni9.png";
import uni10 from "../../images/destination/sweden/unis/uni10.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function Destination() {
  const [loading, setLoading] = useState(false);
  const [alldestinations, setAlldestinations] = useState([]);
  const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   getRelatedStaticText("destinations").then((res) => {
  //     setAlldestinations(res.data);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div>
      <div className="centercont">
        <div class="cardcontainer">
          <div class="insidecont">
            <div class="contentcont">
              <div class="productsarea">
                {loading ? (
                  <div className="Skeletonsize">
                    <Skeleton className="Skeletonsize" count={1} />
                  </div>
                ) : (
                  <Link to="#">
                    <div className="topdestcont">
                      <img
                        className="bigbannerimg"
                        src={sweden}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">Sweden</div>
                    </div>
                    {!imageLoaded && (
                      <Skeleton
                        height={252}
                        className="Skeletonsize"
                        count={1}
                        style={{
                          display: imageLoaded ? "none" : "inline-block",
                        }}
                      />
                    )}
                  </Link>
                )}
                <div className="uniscont">
                  <div className="uniself">
                    <img className="uniimg" src={uni1} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni2} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni3} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni4} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni5} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni6} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni7} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni8} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni9} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni10} alt="" />
                  </div>
                </div>
                <div className="destcontentcont">
                  <div className="destmainheading">
                    Study in Sweden for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    Renowned degrees in Sweden have traditionally been in the
                    humanities, although there is now a governmental push to
                    enhance the prominence of science education. Undergraduate
                    courses are typically delivered in both English and Swedish.
                    For master's programs, which draw a significant number of
                    international students, there are over 450 courses offered
                    exclusively in English. The academic year spans 40 weeks,
                    divided into two semesters: the first from mid-August to
                    mid-January, and the second from mid-January to June.
                    Admission to undergraduate programs requires proof of
                    secondary education completion. The top universities often
                    select students based on their academic performance. Degree
                    Programs in Sweden: Swedish universities offer degrees
                    according to the European standard, including bachelor's,
                    master's, and PhD programs. - *Bachelor's Programs:* These
                    are undergraduate courses pursued after upper secondary
                    school, typically lasting three years and requiring 180 ECTS
                    credits. - *Master's Programs:* These build on bachelor's
                    studies, lasting one to two years, with 60 to 120 ECTS
                    credits. - *PhD Programs:* These are research-intensive and
                    involve several years of work toward a dissertation, varying
                    by university. Programs vs. Courses: A degree program
                    consists of several courses within a specific field leading
                    to a degree. Courses, the fundamental units of programs, can
                    also be taken individually. Enrolling in a course alone
                    registers you only for that course, while enrolling in a
                    program commits you to multiple courses throughout the
                    program's duration. Examples: - A two-year master's program
                    may include four courses per semester, each worth 7.5 ECTS
                    credits, totaling 120 ECTS credits. - A one-year master's
                    program might involve one 30 ECTS credit course per
                    semester, totaling 60 ECTS credits. - Enrolling in a
                    30-credit course registers you only for that course.
                    Academic Calendar: The Swedish academic year is split into
                    two semesters: - *Autumn Semester:* Late August to
                    mid-January, with a short break in December. - *Spring
                    Semester:* Mid-January to early June. Course Structure:
                    Full-time studies approximate a 40-hour week, with few
                    weekly lectures or seminars. Most time is spent on reading,
                    group projects, and assignments. Students often take one
                    course at a time over several weeks, with exams following
                    each course. Some programs may have concurrent courses with
                    semester-end exams. Lecture and Examination Format: Courses
                    include lectures, seminars, and lab sessions. Seminar groups
                    are small, while lectures may be large. Active participation
                    is expected to develop critical thinking and collaboration.
                    Extensive reading and preparation are required. Exams may be
                    written, oral, lab-based, group work, or projects. Most
                    programs conclude with a thesis or project. Study in Sweden
                    for International Students: Sweden is a global leader in
                    quality education, attracting students worldwide. The
                    education system emphasizes personal development, freedom,
                    and responsibility. Prospective students should research
                    universities and admission criteria, and ensure their
                    documents are in order. Numerous scholarships are available
                    to support students financially. Many Pakistani students
                    study in Sweden, a number that continues to grow. Students
                    are allowed to work, though their studies should remain the
                    priority. Sweden offers career opportunities in innovative
                    companies, helping students to finance their education.
                    Universities prioritize equal opportunities, student
                    interaction, and a supportive environment. Presentations and
                    interactive sessions enhance understanding, contributing to
                    Sweden's global educational reputation and continuous
                    attraction of new students.
                  </div>
                  <div className="destrow destrowone">
                    <div className="destleft">
                      <div className="destheading">
                        Lectures and examinations
                      </div>
                      <div className="destsubdata">
                        Courses usually include various types of meetings,
                        including lectures, seminars and laboratory sessions
                        with varying group sizes; seminar groups can be as small
                        as a few students whilst lectures can be up to a few
                        hundred. The aim is to develop critical thinking and
                        collaborative skills, and students are expected to be
                        active participants in all forms of meetings. Required
                        reading and independent work is usually extensive,
                        regardless of your field of study, and students are
                        expected to come well-prepared to class. Examinations
                        usually take the form of written or oral tests,
                        laboratory work, group work or special projects. Most
                        programmes conclude with a degree thesis or project.
                      </div>
                    </div>
                    <div className="destright">
                      <img
                        className="bigbannerimg destsideimg"
                        src={lecture}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="destrow destrowtwo">
                    <div className="destrightwide">
                      <img
                        className="bigbannerimg destsideimg"
                        src={programs}
                        alt=""
                      />
                    </div>
                    <div className="destleftnerrow">
                      <div className="destheading">
                        Degree programmes in Sweden
                      </div>
                      <div className="destsubdata">
                        Swedish universities offer degree programmes according
                        to the European standard. This includes bachelor’s,
                        master’s and PhD programmes.
                        <br />
                        <span> Bachelor’s programmes </span>, also known as
                        undergraduate programmes, typically take place after the
                        completion of upper secondary school and are usually
                        three years long (180 ECTS credits). <br />
                        <span>Master’s programmes</span>, also known as graduate
                        programmes, build upon the knowledge developed during
                        bachelor’s-level studies and can be one or two years
                        long (60 or 120 ECTS credits). <br />
                        <span>PhD programmes</span>, also known as doctoral
                        programmes, are research degrees involving several years
                        of work toward a dissertation. The duration and setup of
                        PhD programmes in Sweden vary between universities; see
                        PhD programmes for more details.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
