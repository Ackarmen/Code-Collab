import { Seo } from "@/ui/components/seo";
import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiUser6Fill } from "react-icons/ri";

export default function Home() {
	return (
		<>
			<Seo title="Code Collab" description="description..." />

			<div className="flex items-center gap-4 p-10">
				<Spinner size="small" />
				<Spinner />
				<Spinner size="large" />
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button size="small">Accent</Button>

				<Button size="small" icon={{ icon: RiUser6Fill }} iconPosition="left">
					Accent
				</Button>
				<Button size="small" icon={{ icon: RiUser6Fill }}>
					Accent
				</Button>
				<Button size="small" variant="secondary">
					Secondary
				</Button>
				<Button size="small" variant="outline">
					Outline
				</Button>
				<Button size="small" variant="disabled">
					Disable
				</Button>
				<Button size="small" variant="ico" icon={{ icon: RiUser6Fill }} />
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button isLoading size="small">
					Accent
				</Button>

				<Button
					isLoading
					size="small"
					icon={{ icon: RiUser6Fill }}
					iconPosition="left"
				>
					Accent
				</Button>
				<Button isLoading size="small" icon={{ icon: RiUser6Fill }}>
					Accent
				</Button>
				<Button isLoading size="small" variant="secondary">
					Secondary
				</Button>
				<Button isLoading size="small" variant="outline">
					Outline
				</Button>
				<Button isLoading size="small" variant="disabled">
					Disable
				</Button>
				<Button
					isLoading
					size="small"
					variant="ico"
					icon={{ icon: RiUser6Fill }}
				/>
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button>Accent</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="disabled">Disable</Button>
				<Button variant="ico" icon={{ icon: RiUser6Fill }} />
			</div>

			<div className="flex items-center gap-4 p-10">
				<Button size="large">Accent</Button>
				<Button size="large" variant="secondary">
					Secondary
				</Button>
				<Button size="large" variant="outline">
					Outline
				</Button>
				<Button size="large" variant="disabled">
					Disable
				</Button>
				<Button
					size="large"
					variant="ico"
					iconTheme="secondary"
					icon={{ icon: RiUser6Fill }}
				/>
				<Button
					size="large"
					variant="ico"
					iconTheme="gray"
					icon={{ icon: RiUser6Fill }}
				/>
				<Button size="large" variant="ico" icon={{ icon: RiUser6Fill }} />
			</div>

			<div className="flex items-center gap-4 p-10">
				<Logo size="very-small" />
				<Logo size="small" />
				<Logo />
				<Logo size="large" />
			</div>

			<div className="flex items-center gap-4 p-10">
				<Avatar
					size="small"
					src="/assets/images/profil.jpg"
					alt="photo de profil"
				/>
				<Avatar src="/assets/images/profil.jpg" alt="photo de profil" />
				<Avatar
					size="large"
					src="/assets/images/profil2.jpg"
					alt="photo de profil"
				/>
			</div>
		</>
	);
}
