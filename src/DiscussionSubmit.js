import {useState} from 'react';

const DiscussionSubmit = ({onCreate}) => {
    const [discussion, setDiscussion] = useState({
        author: "",
        title: "",
        story: ""
    });
    
    const handleChangeDiscussion = (e) => {
        setDiscussion({
            ...discussion,
            [e.target.name]: e.target.value,
        })
        // console.log(discussion)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        // console.log(discussion)
        onCreate(discussion.author, discussion.title, discussion.story)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                discussion
            }),
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        setDiscussion({
            author: "",
            title: "",
            story: ""
        })
    }
    
    return (
        <div className='DiscussionSubmit'>
            <h1>My Agora States</h1>
            <section>
                <form className="form__container">
                    <div className="form__input--wrapper">
                        <div className="form__input--name">
                            <label>Enter your name: </label>
                            <input type="text" name="author" 
                            value={discussion.author} 
                            onChange={handleChangeDiscussion} />
                        </div>
                        <div className="form__input--title">
                            <label>Enter your title: </label>
                            <input type="text" name="title" 
                            value={discussion.title} 
                            onChange={handleChangeDiscussion} />
                        </div>
                        <div className="form__textbox">
                            <label>Your question:  </label>
                            <textarea name="story" placeholder="질문을 작성하세요" 
                            value={discussion.story} 
                            onChange={handleChangeDiscussion} />
                        </div>
                    </div>
                    <div className="form__submit">
                        <input onClick = {handleSubmit} type="submit" value="submit" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default DiscussionSubmit