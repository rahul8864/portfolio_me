import { PureComponent } from "react";
import { Configuration, OpenAIApi } from 'openai';

const config = new Configuration({
    organization: "org-RLj7ngpDPIqFh3QBPBGjFe5T",
    apiKey: "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"
});

const openApi = new OpenAIApi(config);

class Chat extends PureComponent {
    state = {
        message: "",
        chat: [],
        isLoading: false
    }

    submit = async (e, message) => {
        const { chat } = this.state;
        e.preventDefault();
        if (!message) return;

        let msgs = chat;
        msgs.push({ role: "user", content: message });
        this.setState({ chat: msgs, isLoading: true, message: "" });

        await openApi.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "system",
                content: "Hello"
            }, ...chat]
        }).then(result => {
            msgs.push(result?.data?.choices?.[0]?.message);
            this.setState({ chat: msgs, isLoading: false });
        }).catch(err => console.log(err));
    }

    render() {
        const { message, chat, isLoading } = this.state;
        console.log(message);
        return (
            <article class="contact active" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header>
                    <h2 class="h2 article-title">Chat GPT</h2>
                </header>

                <div class="chat">
                    <div class="user">
                        <div className="has-scrollbar" style={{ overflow: "auto", display: "flex", flexDirection: "column", flex: "0 0 600px", margin: "10px" }}>
                            {chat && chat?.length > 0 && (
                                chat.map(item => (
                                    <div>
                                        {item.role === "user" ? (
                                            <div className='user_prompt'>
                                                <div style={{ height: "100%", marginBottom: "auto" }}>
                                                    <img src={`${window.location.origin}/assets/images/my-avatar.png`} alt="user" width="50" />
                                                </div>
                                                <div>
                                                    <span>{item.content}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="assistant_work">
                                                <div style={{ height: "100%", marginBottom: "auto" }}>
                                                    <img src={`${window.location.origin}/assets/images/gpt.png`} alt="gpt" width="50" />
                                                </div>
                                                <div className="assistant_prompt">
                                                    <span>{item.content}</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))
                            )}
                        </div>
                        <div class="user-input">
                            <div class="input-area">
                                <section class="contact-form">
                                    <form class="form" onSubmit={e => this.submit(e, message)}>
                                        <div class="input-wrapper-flex">
                                            <input
                                                type="text"
                                                name="message"
                                                class="form-input"
                                                placeholder="Enter a prompt here..."
                                                onChange={e => this.setState({ message: e.target.value })}
                                                value={message}
                                            />
                                            <button class="form-btn" disabled={message?.length > 1 ? false : true} onSubmit={e => this.submit(e, message)} style={{ width: "auto" }}>
                                                <ion-icon name="paper-plane"></ion-icon>
                                            </button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
            // <article class="contact active" style={{ width: "100%", height: "100%" }}>
            //     <header>
            //         <h2 class="h2 article-title">Chat GPT</h2>
            //     </header>
            //     <section className="chat-section">{chat && chat.length > 0 && (
            //         chat?.map((chatMsg, index) => (
            //             <p key={index} className={chatMsg.role === "user" ? "user_msg" : "assistant_msg"}>
            //                 <span>{chatMsg.content}</span>
            //             </p>
            //         ))
            //     )}</section>
            //     <section class="contact-form">
            //         <form action="#" class="form" onSubmit={e => this.submit(e, message)}>
            //             <div class="input-wrapper-flex">
            //                 <input
            //                     type="text"
            //                     name="message"
            //                     class="form-input"
            //                     placeholder="Enter a prompt here..."
            //                     onChange={e => this.setState({ message: e.target.value })}
            //                     value={message}
            //                 />
            //                 <button class="form-btn" disabled={message?.length > 1 ? false : true} onSubmit={e => this.submit(e, message)} style={{ width: "auto" }}>
            //                     <ion-icon name="paper-plane"></ion-icon>
            //                 </button>
            //             </div>
            //         </form>
            //     </section>
            // </article>
        );
    }
}

export default Chat;
