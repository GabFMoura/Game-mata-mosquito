var video = Array()

video[1] = Array()
video[1]['Nome'] = 'Fullmetal Alchemist'
video[1]['Categoria'] = 'Anime'

function getVideo(video){
  try {
    console.log(video[0]['nome'])
  } catch(e) {
    console.log(e)
  } finally {
    console.log('Sempre passa por aqui')
  }
  console.log('A aplicação não morreu')
}  
function tratarErro(e) {
  console.log(e)
}
getVideo(video)