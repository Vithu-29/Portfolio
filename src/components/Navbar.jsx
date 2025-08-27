import { HashLink } from "react-router-hash-link";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";
import Button from "./ui/Button";
import { Moon, Sun, X, Menu } from "lucide-react";

export default function Navbar() {
	const { theme, toggleTheme } = useTheme();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "Education", href: "#education" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const backdropClass = !mobileMenuOpen
		? "backdrop-blur supports-[backdrop-filter]:bg-background/50 supports-[backdrop-filter]:backdrop-blur-lg"
		: "";

	return (
		<>
			<header className={"fixed top-0 z-40 w-full border-b border-border bg-background " + backdropClass} style={{ backdropFilter: !mobileMenuOpen ? "blur(8px)" : "none" }}>
				<div className="container flex h-16 items-center justify-between px-4 lg:px-20">
					<div className="flex items-center gap-2">
						<HashLink to={"#home"} className="font-bold text-2xl">
							<span>ViThu</span>
						</HashLink>
					</div>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-2">
						{navItems.map((item, index) => (
							<HashLink key={index} to={item.href} smooth className="text-sm font-medium transition-colors hover:text-primary hover-lift py-3 px-4 rounded-lg">
								{item.name}
							</HashLink>
						))}

						<Button variant="ghost" size="icon" aria-label="Toggle Theme" className="ml-2" onClick={toggleTheme}>
							{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
						</Button>
					</nav>

					{/* Mobile Menu Button */}
					<div className="flex md:hidden items-center gap-2">
						<Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggleTheme}>
							{theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
						</Button>
						<Button variant="ghost" size="icon" aria-label="Toggle mobile menu" onClick={toggleMobileMenu}>
							{mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
						</Button>
					</div>

					{/* Mobile Navigation */}
					{mobileMenuOpen && (
						<div className="md:hidden absolute top-16 left-0 right-0 border-b bg-background z-50 animate-fade-in backdrop-blur supports-[backdrop-filter]:bg-background/50 supports-[backdrop-filter]:backdrop-blur-lg" style={{  backdropFilter: "blur(8px)" }}>
							<nav className="flex flex-col p-4 pl-7">
								{navItems.map((item, index) => (
									<HashLink key={index} to={item.href} smooth className="py-3 text-sm font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
										{item.name}
									</HashLink>
								))}
							</nav>
						</div>
					)}
				</div>
			</header>
		</>
	);
}
