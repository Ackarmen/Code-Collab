import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
	return (
		<>
			<Seo title="Code Collab" description="description..." />

			<Navigation />
			<Footer />
		</>
	);
}
