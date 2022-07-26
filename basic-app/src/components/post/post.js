import React, {useState} from "react";
import author from "../database/author.json"
import dataPosts from "../database/entityPosts.json"
import stylePost from './post.module.scss';
import like from "../../access/img/like.png"
import dislike from "../../access/img/dislike.png"
import comment from "../../access/img/comment.png"
import share from "../../access/img/share.png"

function Post() {
    const [posts, setPosts] = useState(dataPosts);

    function changeAttr(postId, likeOrDislike) {

        const currentPostIndex = posts.findIndex((item) => item.id === postId);

        if (posts[currentPostIndex]['verdict'] != null) {
            if (posts[currentPostIndex]['verdict']) {
                posts[currentPostIndex] = {
                    ...posts[currentPostIndex],
                    like: posts[currentPostIndex]['like'] - 1,
                    ['verdict']: null,
                };
            } else {
                posts[currentPostIndex] = {
                    ...posts[currentPostIndex],
                    dislike: posts[currentPostIndex]['dislike'] - 1,
                    ['verdict']: null,
                };
            }
        } else {
            const changeVerdict = likeOrDislike === 'like';
            posts[currentPostIndex] = {
                ...posts[currentPostIndex],
                [likeOrDislike]: posts[currentPostIndex][likeOrDislike] + 1,
                ['verdict']: changeVerdict,
            };
        }

        setPosts([...posts]);
    }

    return posts.map(el => {
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
                            <button className={el.verdict ? stylePost["like-true"] : stylePost["like"]} onClick={() => changeAttr(el.id, 'like')}>
                                <img src={like}/>
                            </button>
                            <label>{el.like}</label>
                        </span>
                        <span>
                            <button className={el.verdict != null && !el.verdict ? stylePost["dislike-true"] : stylePost["dislike"]} onClick={() => changeAttr(el.id, 'dislike')}>
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

}

export default Post;