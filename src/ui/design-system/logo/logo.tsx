interface Props {
	size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
	let sizeLogo: number;

	switch (size) {
		case "very-small":
			sizeLogo = 34;
			break;
		case "small":
			sizeLogo = 61;
			break;
		case "medium": //Default
			sizeLogo = 88;
			break;
		case "large":
			sizeLogo = 140;
			break;
	}

	return (
		<div>
			<svg
				width={sizeLogo}
				viewBox="-51.2 -51.2 1126.40 1126.40"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				fill="#1a1b37"
				stroke="#1a1b37"
				strokeWidth="0.01024"
				transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
			>
				<g id="SVGRepo_bgCarrier" strokeWidth="0">
					<path
						transform="translate(-51.2, -51.2), scale(70.4)"
						fill="#5F62E2"
						d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
						strokeWidth="0"
					/>
				</g>

				<g
					id="SVGRepo_tracerCarrier"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>

				<g id="SVGRepo_iconCarrier">
					<path
						d="M512 960c-92.8 0-160-200-160-448S419.2 64 512 64s160 200 160 448-67.2 448-160 448z m0-32c65.6 0 128-185.6 128-416S577.6 96 512 96s-128 185.6-128 416 62.4 416 128 416z"
						fill="#cfd0f6081630"
					/>

					<path
						d="M124.8 736c-48-80 92.8-238.4 307.2-363.2S852.8 208 899.2 288 806.4 526.4 592 651.2 171.2 816 124.8 736z m27.2-16c33.6 57.6 225.6 17.6 424-97.6S905.6 361.6 872 304 646.4 286.4 448 401.6 118.4 662.4 152 720z"
						fill="#cfd0f6081630"
					/>

					<path
						d="M899.2 736c-46.4 80-254.4 38.4-467.2-84.8S76.8 368 124.8 288s254.4-38.4 467.2 84.8S947.2 656 899.2 736z m-27.2-16c33.6-57.6-97.6-203.2-296-318.4S184 246.4 152 304 249.6 507.2 448 622.4s392 155.2 424 97.6z"
						fill="#cfd0f6081630"
					/>

					<path
						d="M512 592c-44.8 0-80-35.2-80-80s35.2-80 80-80 80 35.2 80 80-35.2 80-80 80zM272 312c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48zM416 880c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z m448-432c-27.2 0-48-20.8-48-48s20.8-48 48-48 48 20.8 48 48-20.8 48-48 48z"
						fill="#cfd0f6"
					/>
				</g>
			</svg>
		</div>
	);
};
