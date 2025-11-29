export default function Skill() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", icon: <i className="devicon-java-plain colored"></i> },
        { name: "Python", icon: <i className="devicon-python-plain colored"></i> },
        { name: "C", icon: <i className="devicon-c-plain colored"></i> },
        { name: "Dart", icon: <i className="devicon-dart-plain colored"></i> },
        { name: "JavaScript", icon: <i className="devicon-javascript-plain colored"></i> },
      ],
    },
    {
      category: "Web Development",
      skills: [
        { name: "Django", icon: <i className="devicon-django-plain colored"></i> },
        { name: "React.js", icon: <i className="devicon-react-plain colored"></i> },
        { name: "Spring Boot", icon: <i className="devicon-spring-plain colored"></i> },
        { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-plain colored"></i> },
      ],
    },
    {
      category: "Mobile Development",
      skills: [{ name: "Flutter", icon: <i className="devicon-flutter-plain colored"></i> }],
    },
    {
      category: "Databases",
      skills: [
        { name: "MySQL", icon: <i className="devicon-mysql-plain colored"></i> },
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored"></i> },
      ],
    },
    {
      category: "Cloud & DevOps",
      skills: [
        {
          name: "Cloudinary",
          icon: <img src="./cloudinary.svg" alt="Cloudinary" className="w-6 h-6" />,
        },
        { name: "Microsoft Azure", icon: <i className="devicon-azure-plain colored"></i> },
        { name: "Firebase", icon: <i className="devicon-firebase-plain colored"></i> },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <i className="devicon-git-plain colored"></i> },
        { name: "GitHub", icon: <i className="devicon-github-original colored"></i> },
        { name: "VS Code", icon: <i className="devicon-vscode-plain colored"></i> },
        { name: "Postman", icon: <i className="devicon-postman-plain colored"></i> },
        { name: "Figma", icon: <i className="devicon-figma-plain colored"></i> },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding transition-colors duration-500">
      <div className="container lg:px-28 flex flex-col items-center">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100 transition-colors duration-500">
            Skills & Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full ">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-background  border rounded-2xl shadow-lg p-5 flex flex-col items-center text-center transition-transform hover:scale-105 "
            >
              <h3 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200 transition-colors duration-500">
                {cat.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {cat.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex items-center gap-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 px-5 py-2 rounded-full border border-gray-300 dark:border-gray-600 transition-all duration-300 cursor-pointer"
                  >
                    <span className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-medium text-sm text-gray-800 dark:text-gray-200 group-hover:text-blue-500 transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
