import { HashLink } from "react-router-hash-link";

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t bg-background">
			<div className="container py-8">
				<div className="flex flex-col items-center text-center">
					{/* Brand */}
					<HashLink to="/#home" className="font-bold text-xl">
						<span>ViThu | Portfolio</span>
					</HashLink>

					{/* Copyright & Credits */}
					<div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
						<span>© {currentYear} All rights reserved.</span>
						<span className="hidden sm:inline">•</span>
						<div className="flex items-center gap-1">
							<span>Made Using React & Tailwind</span>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
