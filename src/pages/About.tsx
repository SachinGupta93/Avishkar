const About = () => {
  return (
    <div className="w-full bg-white p-8 pt-24 text-black">

      <h1 className="text-center text-5xl font-bold mb-12 mt-24 uppercase">ABOUT</h1>

      {/* INTRODUCTION */}
      <h2 className="text-3xl font-semibold mb-4 uppercase">INTRODUCTION</h2>
      <p className="text-lg mb-8 text-justify ml-5">
        Avishkar, the flagship event of IEEE - VBIT SB, is a Technical Paper Presentation competition
        held exclusively for the freshmen of VBIT. In the year 2011, Avishkar was awarded the esteemed
        'Darrel Chong Gold Student Activity Award' in recognition of conducting Avishkar consecutively
        for five years. Avishkar significantly contributes to the experience of first-year VBIT students
        by offering a platform where they can present their innovative ideas and improve their
        communication abilities through technical presentations.
      </p>

      {/* WHAT IS AVISHKAR? */}
      <h2 className="text-3xl font-semibold mb-4 uppercase">WHAT IS AVISHKAR?</h2>
      <p className="text-lg mb-4 text-justify ml-5">
        Avishkar aims to enhance the technical proficiency of students by providing an opportunity to
        develop innovative ideas, acquire exceptional problem-solving skills, and exhibit their
        capabilities.
      </p>
      <p className="text-lg mb-4 ml-5">It consists of two rounds:</p>
      <ul className="list-disc ml-8 text-lg mb-4">
        <li>Round 1: Preliminary round</li>
        <li>Round 2: Final round</li>
      </ul>
      <p className="text-lg mb-8 text-justif ml-5">
        In the Preliminary Round, participants present their solution for the chosen problem statement
        and are evaluated by a panel of judges. The top ten presentations, based on performance, advance
        to the final round, where the best are awarded with mementos and certificates.
      </p>

      {/* RULES AND REGULATIONS */}
      <h2 className="text-3xl font-semibold mb-4 uppercase">RULES AND REGULATIONS</h2>
      <p className="text-lg mb-8 ml-5">
        One must adhere to the following rules and regulations to participate in Avishkar 2K24.
      </p>

      {/* ABSTRACT */}
      <h3 className="text-2xl font-semibold mb-4 uppercase">ABSTRACT:</h3>
      <ul className="list-disc ml-10 text-lg mb-8">
        <li>The font style should be Times New Roman</li>
        <li>The Problem statement must be written in a font size of 14</li>
        <li>The subheading "Abstract" must be written in a font size of 12</li>
        <li>The content should be in a font size of 10</li>
        <li>Email ID must be mentioned in Italics</li>
        <li>The content must be appropriate, italicized and should be divided into two columns</li>
        <li>The word count for Abstract should not exceed 250 words</li>
        <li>Abstract must be submitted in the .docx extension format</li>
        <li>Name your Abstract as follows : 'Name_last3digitsofyourrollnumber'</li>
      </ul>
      <p className="text-lg italic mb-8">
        Example:
        <br />1. Charantej_620.docx
        <br />2. Khushi_219_Shravani_6D2.docx
      </p>

      {/* PPT */}
      <h3 className="text-2xl font-semibold mb-4 uppercase">PPT:</h3>
      <p className="text-lg mb-4 ml-4">
        The PPT must have 10 slides and should include the following information:
      </p>
      <ul className="list-disc ml-10 text-lg mb-8">
        <li>Home page</li>
        <li>Problem statement</li>
        <li>Problem explanation</li>
        <li>Solution</li>
        <li>Domain chosen and the reason for selecting the domain</li>
        <li>Feasibility of the solution</li>
        <li>Comparing with existing solution</li>
        <li>Applications</li>
        <li>Queries?</li>
        <li>Thank you</li>
      </ul>
      <p className="text-lg mb-2 ml-5">
        Homepage must contain "AVISHKAR" along with your Name, Roll Number and Branch - Section
      </p>
      <ul className="list-disc ml-8 text-lg mb-4">
        <li>Times New Roman font should be used in the PPT</li>
        <li>No animations or transitions are to be used in the PPT</li>
        <li>Use the same naming format for your PPT as you did for the abstract</li>
      </ul>
      <p className="text-md italic mb-8">
        Example:
        <br />1. Charantej_620.pptx
        <br />2. Khushi_219_Shravani_6D2.pptx
      </p>

      {/* IMPORTANT NOTE */}
      <h3 className="text-2xl font-semibold mb-4 uppercase">IMPORTANT NOTE</h3>
      <p className="text-lg">
        Both Abstract and PPT must be submitted within the provided deadline.
      </p>
    </div>
  );
};

export default About;
