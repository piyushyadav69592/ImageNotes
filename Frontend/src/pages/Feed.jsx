import React from 'react'
import { useState } from 'react'

const Feed = () => {
    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/7cr6vaxc7w/image_tz33SoR1I.jpg",
            caption: "hello my first post"
        },
       
    ])

    return (
        <section className='feed-section'>
            <h1>My Feed (❁´◡`❁)</h1>
            {
                posts.length > 0 ? (
                    posts.map((post) => (
                        <div key={post._id} className='card'>
                            <img src={post.image} alt="Post" />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (<h1>No Feed plz first of all creat post</h1>)
            }
        </section>
    )
}

export default Feed