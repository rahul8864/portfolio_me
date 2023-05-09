import React from 'react'

export default function Projects() {
  return (
    <article class="contact active" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <header>
        <h2 class="h2 article-title">Chat GPT</h2>
      </header>

      <div class="chat">
        <div class="user">
          <div style={{ overflow: "auto", display: "flex", flexDirection: "column", flex: "0 0 600px", margin: "10px" }}>
            <div className='user_prompt'>
              <img src={`${window.location.origin}/assets/images/my-avatar.png`} alt="user" width="50" />
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem?</span>
            </div>
            <div className="assistant_prompt">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae repellat omnis! Eaque ipsum magni harum reiciendis quam explicabo natus. Corporis exercitationem vero ipsum, odit sint dolor officiis dolore quis minus voluptates hic reiciendis sunt, nemo dolorum eius! Nobis, vero minus sit incidunt officiis quisquam ad laboriosam ab quia doloremque!</span>
            </div>
          </div>
          <div class="user-input">
            <div class="input-area">
              <section class="contact-form">
                <form action="#" class="form">
                  <div class="input-wrapper-flex">
                    <input
                      type="text"
                      name="message"
                      class="form-input"
                      placeholder="Enter a prompt here..."

                    />
                    <button class="form-btn" style={{ width: "auto" }}>
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
  )
}
