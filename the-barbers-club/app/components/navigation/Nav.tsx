import {Button} from "@/app/components/interaction/Button";

export const Nav = () => {
	return (
		<nav className='flex items-center gap-8'>
			<a className='font-bold' href='/over-ons/'>Over ons</a>
			<a className='font-bold' href='/over-ons/'>Contact</a>
			<Button variant='primary' type='button' label='Reserveer'/>
		</nav>)
}