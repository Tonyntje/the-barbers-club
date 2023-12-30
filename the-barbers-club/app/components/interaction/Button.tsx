import classNames from "classnames";
import {CarbonIconProps} from "@carbon/icons-react/es/CarbonIcon";

export const Button = ({type, variant, label, icon}: Button) => {
  return (
    <button
      type={type}
      className={classNames('rounded-md transition-all', {
        'text-neutral-100 bg-primary-700 hover:bg-primary-600 font-light': variant === 'primary',
        'text-neutral-950 border-2 hover:bg-primary-600 font-bold': variant === 'secondary'
      })}
    >
      <div className={classNames('py-2 px-6 flex items-center gap-2 ', {
        'transition-all hover:px-4 hover:gap-6': icon
      })}>
        {label}
        {icon && <>{icon}</>}
      </div>
    </button>)
}

type Button = {
  readonly type: 'submit' | 'button';
  readonly variant: 'primary' | 'secondary';
  readonly label: string;
  readonly onClick?: () => void;
  readonly icon?: CarbonIconProps;
}