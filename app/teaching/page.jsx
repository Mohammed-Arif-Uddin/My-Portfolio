import React from "react";
// Import your image component here

const Teaching = () => {
  return (
    <section>
      <div>
        <h1 style={{ fontWeight: "bold", color: "red", marginLeft: "200px" }}>
          My Office
        </h1>
        <div
          className="w-[1000px] flex items-center flex-cols justify-center xl:bg-[100%] gap-x-6 xl:bg-no-repeat overflow-hidden"
          style={{ marginLeft: "100px" }}
        >
          <p>
            From February 2022 to the present, I worked as a Teaching Assistant
            (TA) at the NSU Department of Mathematics and Physics.It's a
            complicated perform that combines mentoring and instruction in a
            natural way. I had to manage duties that included proctoring exams,
            assisting instructors with their teaching duties, organizing
            tutorials, grading assignments, quizzes, and supporting students
            with their needs while working in the core of the academic setting.
          </p>
          <div style={{width:'3000px',boxShadow:'0px 10px 8px #999', display:'flex',backgroundColor:'white',
            flexDirection:'column',margin:'0.5rem',heigh:'fit-content'
          }}>
            <img
              width={480}
              src="/about/officePic.jpg"
              alt=""
            />
            <h1>Office Address: SAC1061-C</h1>
            <h1>Department of Mathematics and Physics, North South University.</h1>
          </div>
        </div>
        <div>This is Teacher part </div>
      </div>
    </section>
  );
};

export default Teaching;
