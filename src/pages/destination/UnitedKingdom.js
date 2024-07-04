import React, { useState, useEffect } from "react";
import uk from "../../images/destination/uk/uk.jpg";
import lecture from "../../images/destination/sweden/lecture.png";
import programs from "../../images/destination/sweden/programs.png";
import uni1 from "../../images/destination/uk/unis/uni1.png";
import uni2 from "../../images/destination/uk/unis/uni2.png";
import uni3 from "../../images/destination/uk/unis/uni3.png";
import uni4 from "../../images/destination/uk/unis/uni4.png";
import uni5 from "../../images/destination/uk/unis/uni5.png";
import uni6 from "../../images/destination/uk/unis/uni6.png";
import uni7 from "../../images/destination/uk/unis/uni7.png";
import uni8 from "../../images/destination/uk/unis/uni8.png";
import uni9 from "../../images/destination/uk/unis/uni9.png";
import uni10 from "../../images/destination/uk/unis/uni10.png";
import uni11 from "../../images/destination/uk/unis/uni11.png";
import uni12 from "../../images/destination/uk/unis/uni12.png";
import uni13 from "../../images/destination/uk/unis/uni13.png";
import uni14 from "../../images/destination/uk/unis/uni14.png";
import uni15 from "../../images/destination/uk/unis/uni15.png";
import uni16 from "../../images/destination/uk/unis/uni16.png";
// import { getRelatedStaticText } from "../../functions/staticText";
import "./Destination.css";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

export default function UnitedKingdom() {
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
                        src={uk}
                        alt={"123123"}
                        onLoad={() => setImageLoaded(true)}
                        style={{ display: imageLoaded ? "block" : "none" }}
                      />
                      <div className="destname">United Kingdom</div>
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
                  <div className="uniself">
                    <img className="uniimg" src={uni11} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni12} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni13} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni14} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni15} alt="" />
                  </div>
                  <div className="uniself">
                    <img className="uniimg" src={uni16} alt="" />
                  </div>
                </div>
                <div className="destcontentcont">
                  <div className="destmainheading">
                    Study in Knited Kingdom for Pakistani Students
                  </div>
                  <div className="destsubdata">
                    ### Esteemed and Time-Honored System UK qualifications are
                    globally esteemed, reflecting the nation's rich educational
                    heritage. As one of the oldest educational systems, it
                    offers a robust foundation in essential skills needed to
                    thrive in the competitive global market. ### Global
                    Influence Graduates from UK institutions have made
                    significant impacts worldwide. Notable alumni include: -
                    *Bill Clinton* (former President of the USA) - *Wole
                    Soyinka* (Nobel laureate in Literature) - *Imran Khan*
                    (cricket legend and Prime Minister of Pakistan) These
                    individuals highlight the global influence and prestige
                    associated with UK education. ### Diverse Specializations UK
                    educational institutions offer a vast array of
                    specializations, ensuring that students can find courses
                    that align with their true interests, aspirations, and
                    passions. Whether you're interested in arts, sciences,
                    engineering, business, or humanities, there is a program
                    tailored to your needs. ### Innovative Learning Environment
                    UK institutions promote critical, creative, and independent
                    thinking through diverse teaching and assessment methods.
                    Students are encouraged to utilize the knowledge they
                    acquire to inspire original ideas and innovative solutions.
                    This approach prepares graduates to think effectively and
                    independently, qualities highly valued by employers. ###
                    Financial Accessibility UK education offers excellent value
                    through: - *Early realization of earning potential*: Shorter
                    program durations mean students can enter the workforce
                    sooner. - *Numerous scholarships and bursaries*: Many UK
                    institutions offer financial aid to help offset the cost of
                    education. - *Nearly free healthcare*: Students benefit from
                    the National Health Service (NHS). - *Student discounts*:
                    Through the National Union of Students (NUS), students
                    receive discounts on various goods and services. ###
                    Multicultural Experience The UK is a cosmopolitan and
                    inclusive society, hosting various ethnic groups and
                    nationalities. This diversity enriches students'
                    understanding of different cultures and perspectives. Living
                    and studying in such an environment prepares students to
                    operate in a globalized world. ### Program Duration UK
                    programs are typically shorter than those in other
                    countries, allowing students to complete their studies and
                    begin their careers more quickly: - *Undergraduate*: 3 years
                    - *Postgraduate*: 1 year ### UK Education System ####
                    Undergraduate: - *Entry Requirements*: - 13 years of
                    education required for direct entry. - Specific grade
                    requirements vary by field: - 65% and above for humanities.
                    - 70-80% and above for science, commerce, and engineering. -
                    Additional qualifications or experience may be considered. -
                    Must be 18 years old by the start of the program. ####
                    Postgraduate: - *Entry Requirements*: - 16 years of
                    education required for direct entry. - Generally, a 60% and
                    above score in the first degree is required, though some
                    institutions accept 55% and above. - GMAT scores (500-650)
                    may be needed for management programs. - Relevant work
                    experience (1-3 years) is often required for MBA programs,
                    with some universities setting a minimum entry age of 25.
                    ### English Proficiency - *IELTS*: Minimum score of 6.5 for
                    postgraduate studies, 6.0 for undergraduate studies. -
                    *TOEFL*: Minimum score of 237 for postgraduate studies, 223
                    for undergraduate studies. - Some exemptions are possible
                    based on the university's assessment of the candidate's
                    English skills. ### Application Process #### Undergraduate:
                    - *Application Method*: - Applications are made through UCAS
                    (Universities and Colleges Admissions Service). - Up to 6
                    universities can be applied to on one application. -
                    *Special Programs*: - *Sandwich Programs*: Combine periods
                    of study with time spent in industry, extending the course
                    duration to 4 years. - *Foundation Programs*: One-year
                    programs designed as an alternative route for students to
                    bridge the gap between their qualifications and the
                    requirements for a degree program. #### Postgraduate: -
                    *Application Method*: - Application forms are available at
                    various offices. - Some universities charge an application
                    fee. - It's recommended to apply at least 6-8 months in
                    advance, especially for popular universities. - *Required
                    Documents*: - Attested copies of academic transcripts (O/A
                    levels, X/XII, and bachelor's degree). - At least two
                    academic reference letters from professors. - One work
                    recommendation (if applicable). - Statement of Purpose. -
                    Curriculum Vitae/Resume. - IELTS/TOEFL score reports (if
                    required). - Portfolio (for art and design courses). -
                    Additional certificates and achievements (state/national
                    level, extracurricular activities). ### Student Visas
                    Obtaining a student visa is generally straightforward.
                    Applicants from Pakistan must provide a Confirmation of
                    Acceptance for Studies (CAS) from a UK university and
                    evidence of financial support for tuition and living costs.
                    Dedicated visa counselors assist with the process. The visa
                    typically covers the entire course duration and permits
                    multiple entries. ### Employment Opportunities Students at
                    government colleges/universities can work up to 20 hours per
                    week during term time and full-time during vacations. This
                    opportunity allows students to gain valuable work experience
                    while supporting their studies financially.
                  </div>
                  {/* <div className="destrow">
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
                  </div> */}
                  {/* <div className="destrow">
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
