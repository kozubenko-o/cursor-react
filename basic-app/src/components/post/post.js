import React from "react";
import author from "../database/author.json"
import dataPosts from "../database/entityPosts.json"
import stylePost from './post.module.scss';

function Post() {
    console.log(dataPosts);
    const data = dataPosts.map(el => {
        return (<div className={stylePost.post} key={el.id}>
                <div className={stylePost.info}>
                    <img className={stylePost.avatar} src={author.avatar}/>
                    <p className={stylePost["info-author"]}>
                        <span>{author.name}</span>
                    </p>
                </div>
                </div>

        );
    });
    return data;

}

export default Post;