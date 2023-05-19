import { PureComponent, createRef } from "react";
import { Configuration, OpenAIApi } from 'openai';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const config = new Configuration({
    organization: "org-RLj7ngpDPIqFh3QBPBGjFe5T",
    apiKey: "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"
});

const openApi = new OpenAIApi(config);

class Chat extends PureComponent {
    state = {
        message: "Hello I'm Rahul Kumar",
        chat: [],
        isLoading: false
    }

    scrollRef = createRef();

    scrollToBottom = () => {
        this.scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    

    componentDidMount() {
        // let messages = "Hello I'm Rahul Kumar";
        // this.setState({ message: "Hello I'm Rahul Kumar" }, (e) => this.submit(e, messages));
        // (e) => this.submit(e, message);
        this.buttonRef.click();
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
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
        return (
            <article className="contact active" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <header>
                    <h2 className="h2 article-title">Chat GPT</h2>
                </header>

                <div className="chat">
                    <div className="user">
                        <div className="has-scrollbar" style={{ overflow: "auto", display: "flex", flexDirection: "column", flex: "0 0 600px" }}>
                            {chat && chat?.length > 0 && (
                                chat.map(item => (
                                    <div style={ item.role === "user" ? { borderRadius: "10px 10px 0 0", background: "#181819", padding: "5px" } : { borderRadius: "0px 0px 10px 10px", background: "#121213", padding: "5px", marginBottom: "10px" }}>
                                        {item.role === "user" ? (
                                            <div className='user_prompt'>
                                                <div style={{ height: "100%", marginBottom: "auto" }}>
                                                    <img src={`${window.location.origin}/assets/images/my-avatar.png`} alt="user" width="50" />
                                                </div>
                                                <div>
                                                    <span className="navbar-link prompt">{item.content}</span>
                                                </div>
                                            </div>
                                        ) : (
                                            <>
                                            <div className="assistant_work">
                                                <div style={{ height: "100%", marginBottom: "auto" }}>
                                                    <img src={`${window.location.origin}/assets/images/gpt.png`} alt="gpt" width="50" />
                                                </div>
                                                <div className="assistant_prompt">
                                                    <ReactMarkdown className="navbar-link prompt" rehypePlugins={[rehypeRaw]}>{item.content}</ReactMarkdown>
                                                </div>
                                            </div>
                                            </>
                                        )}
                                    </div>
                                ))
                            )}
                            <div ref={this.scrollRef} />
                        </div>
                        <div className="user-input">
                            <div className="input-area">
                                <section className="contact-form" style={{ margin: "10px 0" }}>
                                    <form className="form" onSubmit={e => this.submit(e, message)}>
                                        <div className="input-wrapper-flex">
                                            <input
                                                type="text"
                                                name="message"
                                                className="form-input"
                                                placeholder="Enter a prompt here..."
                                                onChange={e => this.setState({ message: e.target.value })}
                                                value={message}
                                            />
                                            <button className="form-btn"  ref={(ref) => (this.buttonRef = ref)} disabled={message?.length > 1 ? false : true} onSubmit={e => this.submit(e, message)} style={{ width: "auto" }}>
                                                <ion-icon name={isLoading ? 'hourglass' : "paper-plane"}></ion-icon>
                                            </button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </article>
            // <article className="contact active" style={{ width: "100%", height: "100%" }}>
            //     <header>
            //         <h2 className="h2 article-title">Chat GPT</h2>
            //     </header>
            //     <section className="chat-section">{chat && chat.length > 0 && (
            //         chat?.map((chatMsg, index) => (
            //             <p key={index} className={chatMsg.role === "user" ? "user_msg" : "assistant_msg"}>
            //                 <span>{chatMsg.content}</span>
            //             </p>
            //         ))
            //     )}</section>
            //     <section className="contact-form">
            //         <form action="#" className="form" onSubmit={e => this.submit(e, message)}>
            //             <div className="input-wrapper-flex">
            //                 <input
            //                     type="text"
            //                     name="message"
            //                     className="form-input"
            //                     placeholder="Enter a prompt here..."
            //                     onChange={e => this.setState({ message: e.target.value })}
            //                     value={message}
            //                 />
            //                 <button className="form-btn" disabled={message?.length > 1 ? false : true} onSubmit={e => this.submit(e, message)} style={{ width: "auto" }}>
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
