function SocialLinks({links}) {

    return (
        <div className="links">

            {
                links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="social-link"
                    >
                        <img
                            src={link.icon}
                            alt={link.name}
                        />
                    </a>
                ))
            }

        </div>
    )
}

export default SocialLinks;