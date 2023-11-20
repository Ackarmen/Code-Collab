import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design-system/typography/typography";

export default function Home() {
	return (
		<>
			<Seo title="Code Collab" description="description..." />

			<div>
				<Typography variant="display" component="h1">
					Code Collab
				</Typography>
				<Typography theme="primary" variant="h2" component="h2">
					Code Collab
				</Typography>
				<Typography variant="display" component="h1">
					Code Collab
				</Typography>
				<Typography variant="display" component="h1">
					Code Collab
				</Typography>
			</div>
		</>
	);
}
