import { PropsWithChildren } from "react";
import Button from "./Button";
import './Card.css';

type CardProps = PropsWithChildren<{
  title: string
  align?: 'center' | 'left' | 'right'
}>

export default function Card (props: CardProps) {
  console.log(props);

  return (
    <div className={`Card ${props.align || 'center'}`}>
      <div>{props.title}</div>
      { props.children }    
      <div>
        <Button>Ver mais</Button>
      </div>
    </div>
  )
}