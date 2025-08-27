import { Card, CardContent } from "./ui/Card";
import Badge from "./ui/Badge";
import { ExternalLink, Github } from "lucide-react";

export default function Project() {
  const projects = [
    {
      name: "HABITRO",
      description:
        "An AI-powered habit tracking app that helps users build or quit habits with AI-generated tasks and motivates users through AI-generated quizzes, streaks, and achievements.",
      image: import.meta.env.BASE_URL + "/images/preview.png",
      liveLink: "", 
      githubLink: "https://github.com/Vithu-29/Project-HABITRO",
      tags: ["Flutter", "Django", "NextJs", "MySQL", "Firebase", "WebSockets",],
    },
    {
      name: "ExStudios.",
      description:
        "A responsive web platform for seamless movie browsing and ticket booking, offering intuitive interfaces for selecting movies, reserving seats, and viewing schedules.",
      image: import.meta.env.BASE_URL + "/images/Exstudios.png",
      liveLink: "https://vithu-29.github.io/ExStudios/",
      githubLink: "https://github.com/Vithu-29/ExStudios",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Automated Juice Maker",
      description:
        "An automated juice dispensing machine designed for precise operation and user convenience.",
      image: import.meta.env.BASE_URL + "/images/juice.jpg",
      liveLink: "",
      githubLink: "https://github.com/Vithu-29",
      tags: ["Arduino", "C/C++", "Ultrasonic ", "IR Sensor"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container lg:px-28">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20 h-full flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 "
                />
              </div>

              {/* Action Buttons */}
              <div className="mt-auto flex justify-center space-x-3 p-6">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-primary text-white dark:text-black rounded-lg shadow hover:bg-primary/90 transition hover:scale-105"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-secondary text-secondary-foreground rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition hover:scale-105"
                  >
                    <Github className="h-4 w-4" /> GitHub Repo
                  </a>
                )}
              </div>

              {/* Project Content */}
              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="default">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
