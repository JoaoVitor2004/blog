import Illustration from './assets/images/illustration-article.svg'
import Avatar from './assets/images/image-avatar.webp'
import { Wrapper } from './components/Wrapper'
import { Img, Title, Container } from './components'

function App() {
  return (
    <Wrapper>
      <Img src={Illustration} alt='illustration'/>
      <span>Learning</span>
      <p>Published 21 Dec 2023</p>
      <Title>HTML & CSS foundations</Title>
      <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
      <Container>
        <Img largura='30px' src={Avatar} alt='avatar'/>
        <p style={{fontWeight: '900'}} weight='900'>Greg Hooper</p>
      </Container>
    </Wrapper>
  )
}

export default App