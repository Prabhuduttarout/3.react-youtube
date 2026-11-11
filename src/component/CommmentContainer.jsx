import React from 'react'
import Comment from './Comment'

const commentsData = [
  {
    id: 1,
    name: "John",
    text: "This is the first comment",
    replies: [
      {
        id: 2,
        name: "David",
        text: "This is a reply to John",
        replies: [
          {
            id: 3,
            name: "Sarah",
            text: "This is a nested reply to David",
            replies: [
              {
                id: 4,
                name: "Mike",
                text: "This is another nested reply",
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 5,
        name: "Alex",
        text: "Another reply to John",
        replies: []
      }
    ]
  },
  {
    id: 6,
    name: "Emma",
    text: "This is the second main comment",
    replies: [
      {
        id: 7,
        name: "Robert",
        text: "I agree with you",
        replies: []
      },
      {
        id: 8,
        name: "Lisa",
        text: "Can you explain more?",
        replies: [
          {
            id: 9,
            name: "Emma",
            text: "Sure, let me explain",
            replies: []
          }
        ]
      }
    ]
  },
  {
    id: 10,
    name: "Chris",
    text: "This is the third main comment",
    replies: []
  }
];

const CommentList = ({ comments }) => {
  return (
    <div className='flex flex-col gap-1.5'>
      {
        comments.map((comment) => (
          <>
            <Comment key={comment.id} data={comment} />
            <div className='ml-4 pl-2 border-l'>
              <CommentList comments={comment.replies} />
            </div>
          </>
        ))
      }
    </div>
  )
}

const CommmentContainer = () => {
  return (
    <div className='mt-2 ' >
      <h1 className='text-2xl font-bold mb-2'>Comments:</h1>
      <CommentList comments={commentsData} />
    </div>
  )
}

export default CommmentContainer
