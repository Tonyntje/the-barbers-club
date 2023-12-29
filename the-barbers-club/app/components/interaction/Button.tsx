import classNames from "classnames";


export const Button = ({type, variant, label}: Button) => {
	return (
		<button
			type={type}
			className={classNames('py-2 px-6 rounded-md transition-colors font-bold', {
				'bg-primary-100 hover:bg-amber-400': variant === 'primary',
				'bg-neutral-800': variant === 'secondary'
			})}
		>
			{label}
		</button>)
}

type Button = {
	readonly type: 'submit' | 'button';
	readonly variant: 'primary' | 'secondary';
	readonly label: string;
	readonly onClick?: () => void;
}