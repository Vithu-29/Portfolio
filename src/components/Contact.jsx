import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
	const primaryContacts = [
		{
			icon: <Mail size={24} />,
			name: "Email",
			value: "Vithukanes@gmail.com",
			link: "mailto:vithukanes@gmail.com",
		},
		{
			icon: <Github size={24} />,
			name: "Github",
			value: "Vithu-29",
			link: "https://github.com/Vithu-29",
		},
		{
			icon: <Linkedin size={24} />,
			name: "LinkedIn",
			value: "vithushan-kanesamoorthy",
			link: "https://www.linkedin.com/in/vithu29/",
		},
	];

	return (
		<section id="contact" className="section-padding">
			<div className="container lg:px-28">
				<div className="max-w-4xl mx-auto">
					{/* Header */}
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold mb-4">Connect With Me</h2>
					</div>

					{/* Main Contact Info */}
					<div className="bg-background rounded-2xl p-8 md:p-10 shadow-md border border-border mb-12">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
							{primaryContacts.map((contact, index) => (
								<a
									key={index}
									href={contact.link}
									target="_blank"
									rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
									className="w-full group flex flex-col justify-center items-center text-center p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
								>
									<div className="bg-muted/60 group-hover:bg-muted p-4 rounded-full mb-4 transition-colors">{contact.icon}</div>
									<h3 className="font-semibold text-lg mb-2">{contact.name}</h3>
									<p className="text-muted-foreground group-hover:text-foreground transition-colors text-wrap break-words w-full">{contact.value}</p>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
