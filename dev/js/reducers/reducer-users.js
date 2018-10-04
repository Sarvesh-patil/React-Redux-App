/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

export default function () {
    return [
        {
            id: 1,
            first: "Sarvesh",
            last: "Patil",
            age: 26,
            description: "Sarvesh is a React developer and Cloud Architect",
            thumbnail:"https://mojly.com/wp-content/uploads/2017/12/love-image-lovely-images-photo-gallery-629721354.jpg"
            
        },
        {
            id: 2,
            first: "Pooja",
            last: "Patil",
            age: 25,
            description: "Pooja loves the Packers, cheese, and turtles.",
            thumbnail:"https://mojly.com/wp-content/uploads/2017/12/love-image-lovely-images-photo-gallery-629721354.jpg"
        },
        {
            id: 3,
            first: "Tina",
            last: "Patil",
            age: 21,
            description: "Tine likes his dog but it is really annoying.",
            thumbnail:"https://mojly.com/wp-content/uploads/2017/12/love-image-lovely-images-photo-gallery-629721354.jpg"
        }
    ]
}
