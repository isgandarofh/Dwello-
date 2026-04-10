import "../../css/sign-up-button.css"
type Props ={
    text?:string
}
export default function SignUpButton({text}:Props) {
    return (
        <button>{
                text? text : "Sign up"
            }</button>
    )
}
