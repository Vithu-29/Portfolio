import { HashLink } from "react-router-hash-link";
import { ArrowRightIcon, Github, Linkedin } from "lucide-react";

export default function Hero() {
  const socialLinks = [
    { icon: <Github size={20} />, name: "GitHub", link: "https://github.com/Vithu-29" },
    { icon: <Linkedin size={20} />, name: "LinkedIn", link: "https://www.linkedin.com/in/vithu29/" },
  ];

  return (
    <section id="home" className="section-padding flex items-center pt-[8.5rem] md:pt-25">
      <div className="container lg:px-28">
        <div className="flex items-center justify-center">
          <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full overflow-hidden shadow-lg">
            <img src="./profilepic.png" alt="Developer working" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="container">
          <div className="max-w-4xl mx-auto text-center pt-9 mb-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <div>Vithushan Kanesamoorthy</div>
            </h1>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight mb-2 text-gray-800 dark:text-gray-200">
              <div>Undergraduate at UOM</div>
            </h3>
            <p className="text-md md:text-xl text-muted-foreground mb-8">
              Motivated IT undergraduate passionate about solving real-world problems through technology, seeking a
              Software Engineer Intern role to contribute to impactful projects.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* View CV Button (opens PDF) */}
              <a
                href="./Vithushan_Kanesamoorthy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 w-auto self-center sm:self-auto rounded-full bg-primary text-popover font-medium text-sm shadow-md transition-transform hover:scale-105 hover:shadow-lg"
              >
                View My CV
                <ArrowRightIcon className="h-5 w-5" />
              </a>

              {/* Social Links */}
              <div className="flex justify-center gap-4 flex-wrap ">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-background hover:bg-muted/50 transition-all duration-300 hover:scale-105"
                    aria-label={`Connect with me on ${social.name}`}
                  >
                    <span className="text-muted-foreground group-hover:text-blue-500 transition-colors duration-300">
                      {social.icon}
                    </span>
                    <span className="font-medium text-sm group-hover:text-blue-500 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
