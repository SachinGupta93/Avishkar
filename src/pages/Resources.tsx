import { ExternalLink } from 'lucide-react';

// Resources data
const resourcesData = [
  {
    title: "OpenDOAR",
    description: "The Directory of Open Access Repositories is a comprehensive resource for finding free open access journals and articles. It utilizes Google Custom Search to sift through repositories worldwide, ensuring quality content is accessible across various disciplines.",
    link: "https://v2.sherpa.ac.uk/opendoar/"
  },
  {
    title: "ScienceOpen",
    description: "This platform functions as a research and publishing network, offering access to over 74 million articles in all areas of science. Users can register for free to view full texts and utilize advanced search features for specific research needs. It also supports networking among researchers.",
    link: "https://www.scienceopen.com/"
  },
  {
    title: "Dryad",
    description: "A digital repository focused on curated open access scientific research data. Dryad allows researchers to deposit their data sets and provides DOIs for easy citation. While accessing the repository is free, there may be fees associated with publishing data.",
    link: "https://datadryad.org/"
  },
  {
    title: "FigShare",
    description: "This repository allows researchers to share a variety of outputs including datasets, figures, and presentations. FigShare offers a user-friendly interface and assigns DOIs to all uploads for easy referencing.",
    link: "https://figshare.com/"
  },
  {
    title: "Open Science Framework (OSF)",
    description: "OSF is a free platform that supports researchers in managing their projects and sharing their findings. It accommodates various types of research outputs and facilitates collaboration among teams.",
    link: "https://osf.io/"
  },
  {
    title: "Mendeley Data",
    description: "Part of the Mendeley reference manager, this service allows users to upload datasets and share them publicly. Mendeley Data supports directory structures for organizing files and provides DOIs for datasets.",
    link: "https://data.mendeley.com/"
  },
  {
    title: "JSTOR",
    description: "While primarily known for its extensive archive of academic journals, JSTOR also offers free access to certain content published before 1924 in the United States. It provides a wealth of scholarly articles across multiple disciplines.",
    link: "https://www.jstor.org/"
  },
  {
    title: "EThOS",
    description: "The British Library's E-Theses Online Service offers access to over 500,000 doctoral theses from UK institutions. While some theses may be behind paywalls, many are available for immediate download.",
    link: "https://ethos.bl.uk/"
  },
  {
    title: "International Journal of the Commons",
    description: "This peer-reviewed open-access journal focuses on the study of common resources and management practices. It is published by the International Association for the Study of the Commons (IASC).",
    link: "https://www.thecommonsjournal.org/"
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resources Header */}
        <div className="text-center mb-16 mt-24">
          <h1 className="text-6xl font-bold text-[#4A90E2] mb-8">
            Resources
          </h1>
          <div className="flex justify-center space-x-4">
            <div className="w-16 h-1 bg-[#4A90E2]"></div>
            <div className="w-16 h-1 bg-[#4A90E2]"></div>
          </div>
        </div>

        {/* Resources List */}
        <div className="space-y-8">
          {resourcesData.map((resource, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-[#E8F4F8] hover:border-[#4A90E2] transition-colors duration-200"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {resource.title}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {resource.description}
              </p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#E8F4F8] text-[#4A90E2] rounded-lg font-semibold hover:bg-[#4A90E2] hover:text-white transition-colors duration-200"
              >
                Click here
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;