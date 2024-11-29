import {Component} from 'react'
import TabItem from './components/TabItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeLan: languageGreetingsList[0]}

  onSelecting = id => {
    const selected = languageGreetingsList.find(each => each.id === id)
    this.setState({activeLan: selected})
  }

  render() {
    const {activeLan} = this.state
    const {id, imageUrl, imageAltText} = activeLan
    return (
      <div className="home-page">
        <h1>Multilingual Greetings</h1>
        <nav>
          <ul className="tab-list">
            {languageGreetingsList.map(each => (
              <TabItem
                key={each.id}
                languageItem={each}
                isActive={each.id === id}
                onSelecting={this.onSelecting}
              />
            ))}
          </ul>
        </nav>
        <img src={imageUrl} alt={imageAltText} className="lang-image" />
      </div>
    )
  }
}

export default App
