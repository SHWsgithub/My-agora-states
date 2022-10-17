import {useState} from 'react';

const DisscusionSubmit = () => {
    const [disscusion, setDisscuison] = useState({
        author: "",
        title: "",
        story: ""
    });

    const handleChangeDisscusion = (e) => {
        setDisscuison({
            ...disscusion,
            [e.target.name]: e.target.value,
        })
        console.log(disscusion)
    }

    const handleSubmit= (e) => {
        e.preventDefault();
        console.log(disscusion)
        setDisscuison({
            author: "",
            title: "",
            story: ""
        })
    }
    
    return (
        <div className='DisscusionSubmit'>
            <h2>My Agora States</h2>
            <section>
                <form className="form__container">
                    <div className="form__input--wrapper">
                        <div className="form__input--name">
                            <label>Enter your name: </label>
                            <input type="text" name="author" 
                            value={disscusion.author} 
                            onChange={handleChangeDisscusion} />
                        </div>
                        <div className="form__input--title">
                            <label>Enter your title: </label>
                            <input type="text" name="title" 
                            value={disscusion.title} 
                            onChange={handleChangeDisscusion} />
                        </div>
                        <div className="form__textbox">
                            <label>Your question:  </label>
                            <textarea name="story" placeholder="질문을 작성하세요" 
                            value={disscusion.story} 
                            onChange={handleChangeDisscusion} />
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

export default DisscusionSubmit