

const data =  [
  {
  "id": 1,
  "temaIndicador": "doug",
  "codigo": "001",
  "observaciones": "Interactions Specialist tertiary Regional Tennessee",
  "activo": "SI",
  "urlImagen": "http://placeimg.com/640/480",
  "color": "cyan",
  "createdAt": "2022-01-26T18:48:36.002Z"
}]



export default (req, res) => {
  res.status(200).json(data)
}
