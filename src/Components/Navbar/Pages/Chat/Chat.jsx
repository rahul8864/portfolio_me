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
        const { message, chat } = this.state;
        console.log(message);
        return (
            <article class="contact active" style={{ width: "100%", height: "100%" }}>
                <header>
                    <h2 class="h2 article-title">Chat GPT</h2>
                </header>
                <section>{chat && chat.length > 0 && (
                    chat?.map((chatMsg, index) => (
                        <p key={index} className={chatMsg.role === "user" && "user_msg"}>
                            {/* <span>{chatMsg.role}</span>
                            <span>{":"}</span> */}
                            <span style={{ color: "white" }}>{chatMsg.content}</span>
                        </p>
                    ))
                )}</section>
                <section class="contact-form">
                    <form action="#" class="form" onSubmit={e => this.submit(e, message)}>
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
            </article>
        );
    }
}

export default Chat;
