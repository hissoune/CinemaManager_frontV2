import { useState } from "react";

export default function Comments() {
    const [comments, setComments] = useState([
        {
          id: 1,
          name: 'Michael Gough',
          date: 'Feb. 8, 2022',
          avatar: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
          text: 'Very straight-to-point article. Really worth time reading. Thank you! But tools are just the instruments for the UX designers.',
        },
        {
          id: 2,
          name: 'Jese Leos',
          date: 'Feb. 12, 2022',
          avatar: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
          text: 'Much appreciated! Glad you liked it ☺️',
        },
        {
          id: 3,
          name: 'Bonnie Green',
          date: 'Mar. 12, 2022',
          avatar: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
          text: 'The article covers the essentials, challenges, myths and stages the UX designer should consider while creating the design strategy.',
        },
      ]);
    
      const [newComment, setNewComment] = useState('');
    
      const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim() === '') return;
    
        const newCommentObj = {
          id: comments.length + 1,
          name: 'Anonymous User',
          date: new Date().toLocaleDateString(),
          avatar: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
          text: newComment,
        };
        setComments([...comments, newCommentObj]);
        setNewComment('');
      };
    
      return (
        <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased ">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Comments ({comments.length})</h2>
            </div>
    
            <form onSubmit={handleCommentSubmit} className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg border  dark:bg-gray-800 dark:border-gray-700">
                <textarea
                  id="comment"
                  rows="6"
                  className="w-full text-sm text-gray-900 border-0 outline-0 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-white bg-red-500 rounded-lg focus:ring-4 dark:focus:ring-white hover:bg-red-800"
              >
                Post comment
              </button>
            </form>
    
            {comments.map((comment) => (
              <article key={comment.id} className="p-6 text-base bg-white rounded-lg dark:bg-gray-900 mb-3">
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                      <img className="mr-2 w-6 h-6 rounded-full" src={comment.avatar} alt={comment.name} />
                      {comment.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <time pubdate>{comment.date}</time>
                    </p>
                  </div>
                  <button
                    className="inline-flex items-center p-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 dark:bg-gray-900 dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                    </svg>
                    <span className="sr-only">Comment settings</span>
                  </button>
                </footer>
                <p className="text-gray-500 dark:text-gray-400">{comment.text}</p>
                <div className="flex items-center mt-4 space-x-4">
                  <button type="button" className="text-sm text-gray-500 dark:text-gray-400 hover:underline">
                    Reply
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      );
}
