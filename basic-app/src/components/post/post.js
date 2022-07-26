import React, {useState} from "react";
import author from "../database/author.json"
import dataPosts from "../database/entityPosts.json"
import stylePost from './post.module.scss';
import like from "../../access/img/like.png"
import dislike from "../../access/img/dislike.png"
import comment from "../../access/img/comment.png"
import share from "../../access/img/share.png"

function Post() {
    const [state, setState] = useState(dataPosts);
    function changeAttr(postId, likeOrDislike) {
        console.log('click');
        setState(
            state.map(p =>
                p.id === postId ?
                    {...p, likeOrDislike: p[likeOrDislike]++} :
                    p
            )
        );
    }
    const data = dataPosts.map(el => {
        return (<div className={stylePost.post} key={el.id}>
                <div className={stylePost.info}>
                    <img className={stylePost.avatar} src={author.avatar}/>
                    <p>
                        <span className={stylePost["info-author"]}> {author.name} </span>
                        <span className={stylePost["info-author"]}> {author.nickname} </span>
                    </p>
                    <p>
                        <span className={stylePost["content-post"]}>{el.content}</span>
                    </p>
                    <img className={stylePost.photo} src={el.photo}/>
                    <p className={stylePost['footer-post']}>
                        <span>
                            <button className={stylePost["like"]} onClick={() => changeAttr(el.id, 'like')}>
                                <img src={like}/>
                            </button>
                            <label>{el.like}</label>
                        </span>
                        <span>
                            <button className={stylePost["dislike"]} onClick={() => changeAttr(el.id, 'dislike')}>
                                <img src={dislike}/>
                            </button>
                            <label>{el.dislike}</label>
                        </span>
                        <span>
                            <button className={stylePost["comment"]} disabled>
                                <img src={comment}/>
                            </button>
                            <label>{el.comment}</label>
                        </span>
                        <span>
                            <button className={stylePost.share} disabled>
                                <img src={share}/>
                            </button>
                        </span>
                    </p>
                </div>
                </div>

        );
    });
    return data;

}

export default Post;