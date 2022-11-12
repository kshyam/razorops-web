import React from 'react';
import PostPreview from './post-preview';

export default function MoreStories({ posts }) {
    return (
        <section>
            <div className="mt-20 mb-20 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-24 mb-24">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    );
}
