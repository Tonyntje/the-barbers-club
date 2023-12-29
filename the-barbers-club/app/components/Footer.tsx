import Image from "next/image";
import TheBarbersClubFooterLogo from '../../public/TheBarbersClubFooterLogo.svg'
import {Column} from "@/app/components/utilities/Column";

export const Footer = () => {
	return <footer className='w-full bg-neutral-800 text-white'>
		<div className='max-w-screen-2xl flex justify-between mx-auto p-6'>

			<Column cols={3}>
				<div><Image src={TheBarbersClubFooterLogo} alt='The Barbers Club logo in footer'/></div>
				<div>foote</div>
				<div>foote</div>
			</Column>
		</div>
	</footer>
}