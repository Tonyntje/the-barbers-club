import Image from "next/image";
import TheBarbersClubFooterLogo from '../../../public/TheBarbersClubFooterLogo.svg'
import {Column} from "@/app/components/utilities/Column";
import Heading from "@/app/components/content/Heading";
import {Copyright} from "@/app/components/blocks/Copyright";
import {Button} from "@/app/components/interaction/Button";

export const Footer = () => {
	return <footer className='w-full bg-neutral-800 text-white'>
		<div className='max-w-screen-2xl flex justify-between mx-auto px-6 py-24'>

			<Column cols={3}>
				<div><Image src={TheBarbersClubFooterLogo} alt='The Barbers Club logo in footer'/></div>
				<div>
					<Heading level={2}>
						Footer 1
					</Heading>
				</div>
				<div>
					<Heading level={2}>Openingstijden</Heading>
					<Button type='button' variant='primary' label='Afspraak maken'/>
				</div>
			</Column>
		</div>
		<Copyright/>
	</footer>
}