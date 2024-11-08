
import "../form/form.css"

export default function form(){
    return(
        <main className="main">
            <div className="form" >
                <form action="">
                    <p>Name</p>
                    <input type="text" placeholder="What is your name" className="place-name"></input>
                    <p>Email</p>
                    <input type="text" placeholder="write ur email" className="place-mail"></input>
                    <p>Message</p>
                    <input type="text" placeholder="write message about urself" className="place-msg"></input>
                    <p>CV</p>
                    <input type="text" placeholder="Download ur CV" className="Download"></input>

                </form>

            </div>
        </main>

    )
}