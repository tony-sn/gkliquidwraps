import { Box, Icon, useColorModeValue } from '@chakra-ui/react'

const MySvg = () => {
	const fillColor = `url(#my-gradient-${useColorModeValue('light', 'dark')})`

	return (
		<>
			<svg
				style={{ width: 0, height: 0, position: 'absolute' }}
				aria-hidden="true"
				focusable="false"
			>
				<linearGradient id="my-gradient-dark" x2="1" y2="1">
					<stop offset="0%" stopColor="#f56772" />
					<stop offset="100%" stopColor="#ba6bff" />
					<stop offset="200%" stopColor="rgba(29, 29, 31, 1)" />
				</linearGradient>
			</svg>
			<svg
				style={{ width: 0, height: 0, position: 'absolute' }}
				aria-hidden="true"
				focusable="false"
			>
				<linearGradient id="my-gradient-light" x2="1" y2="1">
					<stop offset="0%" stopColor="#8980ed" />
					<stop offset="50%" stopColor="#ec787f" />
					<stop offset="100%" stopColor="#ffc170" />
					<stop offset="150%" stopColor="rgba(245,245,247,0.1)" />
				</linearGradient>
			</svg>

			<Box>
				<Icon boxSize={14}>
					<svg viewBox="0 0 24 24" focusable="false" className="chakra-icon">
						<g fill={fillColor}>
							<path d="M11.114,14.556a1.252,1.252,0,0,0,1.768,0L22.568,4.87a.5.5,0,0,0-.281-.849A1.966,1.966,0,0,0,22,4H2a1.966,1.966,0,0,0-.289.021.5.5,0,0,0-.281.849Z" />
							<path d="M23.888,5.832a.182.182,0,0,0-.2.039l-6.2,6.2a.251.251,0,0,0,0,.354l5.043,5.043a.75.75,0,1,1-1.06,1.061l-5.043-5.043a.25.25,0,0,0-.354,0l-2.129,2.129a2.75,2.75,0,0,1-3.888,0L7.926,13.488a.251.251,0,0,0-.354,0L2.529,18.531a.75.75,0,0,1-1.06-1.061l5.043-5.043a.251.251,0,0,0,0-.354l-6.2-6.2a.18.18,0,0,0-.2-.039A.182.182,0,0,0,0,6V18a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V6A.181.181,0,0,0,23.888,5.832Z" />
						</g>
					</svg>
				</Icon>

				<p>
					Choose your closest applicator, fill up the form provided possibly
					with a picture of your vehicle and the colour you want to have.
				</p>
			</Box>

			<Box>
				<Icon boxSize={14}>
					<svg viewBox="0 0 14 14" focusable="false" className="chakra-icon">
						<g fill={fillColor}>
							<path d="M10.8889,5.5 L3.11111,5.5 L3.11111,7.05556 L10.8889,7.05556 L10.8889,5.5 Z M12.4444,1.05556 L11.6667,1.05556 L11.6667,0 L10.1111,0 L10.1111,1.05556 L3.88889,1.05556 L3.88889,0 L2.33333,0 L2.33333,1.05556 L1.55556,1.05556 C0.692222,1.05556 0.00777777,1.75556 0.00777777,2.61111 L0,12.5 C0,13.3556 0.692222,14 1.55556,14 L12.4444,14 C13.3,14 14,13.3556 14,12.5 L14,2.61111 C14,1.75556 13.3,1.05556 12.4444,1.05556 Z M12.4444,12.5 L1.55556,12.5 L1.55556,3.94444 L12.4444,3.94444 L12.4444,12.5 Z M8.55556,8.61111 L3.11111,8.61111 L3.11111,10.1667 L8.55556,10.1667 L8.55556,8.61111 Z" />
						</g>
					</svg>
				</Icon>
				<p>
					We will get back to you as soon as practicable either by email or txt
					message with a fixed quote and organize your booking.
				</p>
			</Box>
			<Box>
				<Icon boxSize={14}>
					<svg viewBox="0 0 24 24" focusable="false" className="chakra-icon">
						<g fill={fillColor}>
							<path d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z" />
						</g>
					</svg>
				</Icon>
				<p>
					Bring your vehicle in the morning and within the same day you can
					collect and enjoy your vehicle. It&apos;s time to go for a winning
					ride.
				</p>
			</Box>
		</>
	)
}

export default MySvg
