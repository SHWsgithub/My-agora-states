const Discussion = ({author, title, createdAt, avatarUrl}) => {
    return (
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image"
                    src={avatarUrl}
                    alt="avatar of kimploo" />
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">{title}</a></h2>
                <div className="discussion__information">{author} / {createdAt}</div>
            </div>
            <div className="discussion__answered"><p>☑</p></div>
        </li>   
    )
}

export default Discussion