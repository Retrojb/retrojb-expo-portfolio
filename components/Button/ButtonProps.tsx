import { JSX, MutableRefObject } from "react";

// TODO: Will need to go back and add hover state for web
export type ButtonState = 'default' | 'disabled' | 'focus' | 'pressed';
export type ButtonSize = 'sm' | 'md' | 'lrg';
export type ButtonWidth = '25%' | '50%' | '75%' | '100%';

export interface IButtonProps {
  variant?: 'solid' | 'outline' | 'ghost'
  text: string
  ariaLabel: string
  ariaHint: string
  ariaRole?: string
  size?: ButtonSize
  width?: ButtonWidth
  bgColor?: string
  fontColor?: string
  onPress?: () => void
  isDisabled?: boolean
  isPressed?: boolean
  isFocus?: boolean
  ref?: MutableRefObject<any> | undefined
  iconRight?: JSX.Element | Array<JSX.Element>
  iconLeft?: JSX.Element | Array<JSX.Element>
}

export interface IButtonGroupProps extends IButtonProps{
  children?: JSX.Element | Array<JSX.Element>

}
