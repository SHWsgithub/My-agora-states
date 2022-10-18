import Discussion from './Discussion'

const DiscussionList = ( {discussions}) => {
    return (
        <div className='DiscussionList'>
            <section className="discussions__wrapper">
                <ul className="discussions__container">
                    {discussions.map((list) => (
                        <Discussion key={list.id} {...list}/>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export default DiscussionList