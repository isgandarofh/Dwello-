import mailIcon from "../../../public/icon/mail-icon.png"
import SignUpButton from "../Ui/SignUpButton"
export default function ContactInput() {
    return (
        <div>
            <div className="contact-input">
                <img width={22} src={mailIcon} alt="" />
                <input type="text" placeholder="Enter your email address..." />
                <SignUpButton text="Submit" />
            </div>
        </div>
    )
}
