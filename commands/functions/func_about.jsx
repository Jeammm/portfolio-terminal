const about = () => {
  return (
    <div>
      <p>Hi, I'm Athicha, just graduated from Kasetsart University.</p>
      <p className="mb-4">and I love cats</p>

      <p className="mb-4">
        I am a software engineer with a passion for creating innovative
        solutions. I have experience in web development and mobile app
        development
      </p>

      <div className="ml-6">
        <p className="mb-4 text-orange">Work Experience:</p>
        <ul>
          <li>
            <p className="text-pink">
              Frontend Engineer (Part-time) at Innovative Extremist Co., Ltd.
            </p>
            <p>
              Built gamified websites and CMS solutions using React, TypeScript,
              and MongoDB.
            </p>
            <p>
              ----------------------------------------------------------------
            </p>
          </li>
          <li>
            <p className="text-pink">
              Software Engineer Intern at Innovative Extremist Co., Ltd.
            </p>
            <p>
              Developed UI for Thai PBS live streaming and internal CMS with
              Next.js and Docker.
            </p>
            <p>
              ----------------------------------------------------------------
            </p>
          </li>
          <li>
            <p className="text-pink">
              Full-stack Engineer (Part-time) at Kitcharern Rungroeng LP
            </p>
            <p>
              Led a team to build a hardware e-commerce site using React and
              Firestore.
            </p>
            <p>
              ----------------------------------------------------------------
            </p>
          </li>
          <li>
            <p className="text-pink">
              Frontend Developer Intern at Naruthee Consulting
            </p>
            <p>
              Built customized high-conversion websites with modern frontend
              frameworks.
            </p>
            <p>
              ----------------------------------------------------------------
            </p>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 mt-4">
        <p>My personal projects:</p>
        <p>
          type command <span className="text-green">projects</span>
        </p>
      </div>
      <div className="flex gap-4 mt-4">
        <p>Find me here :</p>
        <div className="flex flex-col">
          <a
            href="https://www.linkedin.com/in/athichaph"
            target="_blank"
            className="underline text-orange"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/jeammm"
            target="_blank"
            className="underline text-orange"
          >
            GitHub
          </a>
          <a
            href="mailto:athicha.phjkl@gmail.com"
            className="underline text-orange"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default about;
