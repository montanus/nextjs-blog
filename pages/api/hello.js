

const data =  [
  {
  "id": 1,
  "status": "online",
  "isbn10": "9780323082990",
  "isbn13": "9780323082990000",
  "eisbn": "http://placeimg.com/640/480",
  "title": "Nuclear Medicine",
  "publisher": "Elsevier Health Sciences"
},
{
  "id": 1,
  "status": "online",
  "isbn10": "9780323082991",
  "isbn13": "9780323082991000",
  "eisbn": "http://placeimg.com/640/480",
  "title": "Nuclear Medicine 2",
  "publisher": "Elsevier Health Sciences"
}
]



export default (req, res) => {
  res.status(200).json(data)
}
